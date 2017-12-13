'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , util = require('util')
    
    /* NPM */
    , UglifyJS = require("uglify-js")
    , sourceMap = require('source-map')
    
    /* in-package */
    ;

function compress(source) {
    var minifyOptions = {
        compress: {
            // ...
        },
        mangle: true,
        output: {
            beautify: false,
            max_line_len: 80,
        },
    };
    return _minify(source, minifyOptions);
}

function format(source) {
    var minifyOptions = {
        compress: false,
        mangle: false,
        output: {
            beautify: true,
            max_line_len: 80,
            // ...
        },
    };
    return _minify(source, minifyOptions);
}

function _minify(source, minifyOptions) {
    let sourceCode = util.isBuffer(source.code)
        ? source.code.toString('utf8')
        : source.code
        ;

    let code = {
        'source.js': sourceCode,
    };

    minifyOptions.sourceMap = true;
    let output = UglifyJS.minify(code, minifyOptions);
    let ret = { code: output.code };

    if (source.position) {
        let smc = new sourceMap.SourceMapConsumer(output.map);
        let positionFor = (position) => {
            if (position instanceof Array) {
                return position.map(positionFor);
            }
            else {
                return smc.generatedPositionFor({
                    source: 'source.js',
                    line: position.line,
                    column: position.column,
                });
            }
        };

        if (typeof source.position == 'boolean') {
            ret.positionFor = positionFor;        
        }
        else {
            ret.position = positionFor(source.position);
        }
    }

    return ret;
}

module.exports = {
    compress,
    format,
    beautify: format,
    minify: compress,
};