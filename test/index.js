
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
    it('compress and locate', () => {
        let code = [
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
        let position = { line: 2, column: 8 };

        let output = jsaid.compress({ code, position });
        assert(output.code);
        assert(output.position.line);
        assert(output.position.column);
    });

    it('format and locate', () => {
        let code = [
            'function f(){console.log("Hello world!")',
            '}function add(o,n){return o+n}'
        ].join('\n');

        let position = { line: 2, column: 10 };
        
        let output = jsaid.format({ code, position });
        assert(output.code);
        assert(output.position.line);
        assert(output.position.column);
    });
});