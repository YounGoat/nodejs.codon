#	codon
__JavaScript Code Assistant__

其他语言 / [English](./README.md)

##	目录

*	[快速开始](#快速开始)
*	[推荐](#推荐)

##	链接

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/nodejs.jsai)

##	快速开始

格式化代码。如果提供了源代码中的位置信息（行、列），则同时返回相应代码在格式化代码中的位置信息。

```javascript
const codon = require('codon');

let code = '// Minified JavaScript Source Code';
let position = { line: 1, column: 10 };

let output = codon.format({ code, position });
// RETURN: { code, position }
```

压缩代码。如果提供了源代码中的位置信息（行、列），则同时返回相应代码在压缩后代码中的位置信息。

```javascript
const codon = require('codon');

let code = '// JavaScript Source Code';
let position = { line: 1, column: 10 };

let output = codon.compress({ code, position });
// RETURN: { code, position }
```

##  推荐

*   [Online JavaScript beautifier](http://jsbeautifier.org)