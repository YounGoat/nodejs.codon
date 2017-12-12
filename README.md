#	codon
__JavaScript Code Assistant__

LANGUAGES / [简体中文](./README.zh_CN.md)

##	Table of contents

*	[Get Started](#get-started)
*	[Recommendations](#recommendations)

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/nodejs.jsai)

##	Get Started

To format minified source code and offer the position in generated code if corresponding position in source code is provided.

```javascript
const codon = require('codon');

let code = '// Minified JavaScript Source Code';
let position = { line: 1, column: 10 };

let output = codon.format({ code, position });
// RETURN: { code, position }
```

To compress source code and offer the position in generated code if corresponding position in source code is provided.

```javascript
const codon = require('codon');

let code = '// JavaScript Source Code';
let position = { line: 1, column: 10 };

let output = codon.compress({ code, position });
// RETURN: { code, position }
```

##  Recommendations

*   [Online JavaScript beautifier](http://jsbeautifier.org)