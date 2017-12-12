'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , UglifyJS = require("uglify-js")
    , sourceMap = require('source-map')
    
    /* in-package */
    ;

function compress(source) {
    var code = {
        'source.js': source.code,
    };
    var options = {
        compress: {
            // ...
        },
        mangle: true,
        output: {
            beautify: false,
            max_line_len: 80,
        },
        sourceMap: true,
    };

    let output = UglifyJS.minify(code, options);
    let ret = { code: output.code };

    if (source.position) {
        let smc = new sourceMap.SourceMapConsumer(output.map);
        ret.position = smc.generatedPositionFor({
            source: 'source.js',
            line: source.position.line,
            column: source.position.column,
        });
    }

    return ret;
}

function format(source) {
    var code = {
        'source.js': source.code,
    };
    var options = {
        compress: false,
        mangle: false,
        output: {
            beautify: true,
            max_line_len: 80,
            // ...
        },
        sourceMap: true,
    };

    let output = UglifyJS.minify(code, options);
    let ret = { code: output.code };

    if (source.position) {
        let smc = new sourceMap.SourceMapConsumer(output.map);
        ret.position = smc.generatedPositionFor({
            source: 'source.js',
            line: source.position.line,
            column: source.position.column,
        });    
    }

    return ret;
}

module.exports = {
    compress,
    format,
    beautify: format,
    minify: compress,
};