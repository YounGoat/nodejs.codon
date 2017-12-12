'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , fs = require('fs')
    /* NPM */
    , sourceMap = require('source-map')
    
    /* in-package */
    ;

let map = JSON.parse(fs.readFileSync('./sample.min.js.map', 'utf8'));
let smc = new sourceMap.SourceMapConsumer(map);

// 指定源代码位置，获取生成代码位置。
let posInGenerated = smc.generatedPositionFor({
    source: 'sample.js',
    line: 6,
    column: 12
});

let posInSource = smc.originalPositionFor({
    source: 'sample.js',
    line: 2,
    column: 11
});