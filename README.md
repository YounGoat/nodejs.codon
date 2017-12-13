#	codon
__JavaScript Code Assistant__

Languages / [简体中文](./README.zh_CN.md)

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

let sourceCode = '// Minified JavaScript Source Code';

// -- return transformed position directly --
let output_1 = codon.format({ 
    code: sourceCode, 
    position: { line: 1, column: 10 },
});
// RETURN: { code, position }

// -- to do poisition transformation by yourself --
let output_2 = codon.format({ 
    code: sourceCode,
    position: true,
});
// RETURN: { code, positionFor }
let transformedPosition = output_2.positionFor({ line: 1, column: 10 });
// RETURN: { line, column }
```

If you wanna compress source code other than formatting it, use `codon.compress()` instead.

##  API

### codon.compress()

The only parameter is an object with following attributes:
*   *string* | *Buffer* __code__  
    Source code.

*   *boolean* | *Object* | *[Object]* __position__ OPTIONAL  
    As object (array), it represents the position in source code.
    As boolean and valued `true`, there SHOULD be an attribute named `positionFor` which is a function in charge of transforming position(s) in source code to position(s) in generated code.
    

E.g. 
*   { string *code* } __codon.format__({ string *code* })  
    To generate formatted code.

*   { string *code*, object *position* } __codon.format__({ string *code*, object *position* })  
    To generate formatted code, and a transformed position object.

*   { string *code*, Array *position* } __codon.format__({ string *code*, Array *position* })  
    To generate formatted code, and a group of transformed position objects.

*   { string *code*, function *positionFor* } __codon.format__({ string *code*, boolean *position* })  
    To generate formatted code, and a transform method.

### codon.format()

Similar to [__codon.compress()](#codoncompress), but to beautify source code other than minifying it.

##  Recommendations

*   [Online JavaScript beautifier](http://jsbeautifier.org)
