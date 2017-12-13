
'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')
    , fs = require('fs')

    /* NPM */

    /* in-package */
    , jsaid = require('..')
    ;

describe('jsaid', () => {
    const codeSource = [
        'function f() {',
        '    var saying = "Hello world!";',
        '    console.log(saying);',
        '}',
        '',
        'function add(foo, bar) {',
        '    var ret = foo + bar;',
        '    return ret;',
        '}',
        ''
    ].join('\n');

    const codeMin =  [
        'function f(){console.log("Hello world!")',
        '}function add(o,n){return o+n}'
    ].join('\n');

    const assert_code_position = (output) => {
        assert(output.code);
        assert(output.position.line);
        assert(output.position.column);
    };
    
    const assert_code_multi_position = (output) => {
        assert(output.code);
        assert(output.position instanceof Array);
        assert(output.position[0].line);
        assert(output.position[0].column);
    };

    const assert_code_positionFor = (output, position) => {
        assert(output.code);
        assert(output.positionFor);

        let generatedPosition = output.positionFor(position);
        assert(generatedPosition.line);
        assert(generatedPosition.column);
    };

    it('compress and position', () => {
        let code = codeSource;        
        let position = { line: 2, column: 8 };

        let output = jsaid.compress({ code, position });
        assert_code_position(output);
    });

    it('compress and multi positions', () => {
        let code = codeSource;
        let position = [
            { line: 2, column: 8 },
            { line: 3, column: 6 } ];

        let output = jsaid.compress({ code, position });
        assert_code_multi_position(output);
    });

    it('compress and positionFor', () => {
        let code = codeSource;        
        let position = true;

        let output = jsaid.compress({ code, position });
        assert_code_positionFor(output, { line: 2, column: 8 });
    });

    it('format and position', () => {
        let code = codeMin;
        let position = { line: 2, column: 10 };
        
        let output = jsaid.format({ code, position });
        assert_code_position(output);
    });

    it('format and multi positions', () => {
        let code = codeMin;
        let position = [
            { line: 2, column: 10 },
            { line: 1, column: 8 } ];
        
        let output = jsaid.format({ code, position });
        assert_code_multi_position(output);
    });

    it('format and positionFor', () => {
        let code = codeMin;
        let position = true;
        
        let output = jsaid.format({ code, position });
        assert_code_positionFor(output, { line: 2, column: 10 });
    });

    it('format Buffer', () => {
        let code = new Buffer(codeMin);
        let output = jsaid.format({ code });
        assert(output.code);
    });
});