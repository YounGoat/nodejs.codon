#	codon
__JavaScript Code Assistant__

其他语言 / [English](./README.md)

##	目录

*	[快速开始](#快速开始)
*   [API](#api)
*	[推荐](#推荐)

##	链接

*	[更新日志](./CHANGELOG.md)
*	[主页](https://github.com/YounGoat/nodejs.jsai)

##	快速开始

格式化代码。如果提供了源代码中的位置信息（包括行、列信息，以下称之为代码坐标），则同时返回格式化代码中的对应坐标。

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

##  API

### codon.compress()

出于参数可扩展的考虑，该方法仅接受一个参数对象，包含以下属性：
*   *string* | *Buffer* __code__  
    源代码文本。

*   *boolean* | *Object* | *[Object]* __position__ OPTIONAL  
    若该属性为对象或对象数组，指源代码坐标。  
    若该属性为布尔值且为值为 `true`，则返回值对象中将提供一个 `positionFor()` 方法，可用于完成从源代码坐标到生成代码坐标的转换。
    

举例如下：
*   { string *code* } __codon.format__({ string *code* })  
    生成压缩代码文本。

*   { string *code*, object *position* } __codon.format__({ string *code*, object *position* })  
    生成压缩代码文本，及一个源代码坐标所对应的生成代码坐标。

*   { string *code*, Array *position* } __codon.format__({ string *code*, Array *position* })  
    生成压缩代码文本，及一组源代码坐标所对应的生成代码坐标。

*   { string *code*, function *positionFor* } __codon.format__({ string *code*, boolean *position* })  
    生成压缩代码文本，及从源代码坐标到生成代码坐标的转换方法。该方法接收坐标对象或坐标数组作为参数，相应地返回一个或一组坐标对象。

### codon.format()

出于参数可扩展的考虑，该方法仅接受一个参数对象，包含以下属性：
*   *string* | *Buffer* __code__  
    源代码文本。

*   *boolean* | *Object* | *[Object]* __position__ OPTIONAL  
    若该属性为对象或对象数组，指源代码坐标。  
    若该属性为布尔值且为值为 `true`，则返回值对象中将提供一个 `positionFor()` 方法，可用于完成从源代码坐标到生成代码坐标的转换。
    

举例如下：
*   { string *code* } __codon.format__({ string *code* })  
    生成格式化代码文本。

*   { string *code*, object *position* } __codon.format__({ string *code*, object *position* })  
    生成格式化代码文本，及一个源代码坐标所对应的生成代码坐标。

*   { string *code*, Array *position* } __codon.format__({ string *code*, Array *position* })  
    生成格式化代码文本，及一组源代码坐标所对应的生成代码坐标。

*   { string *code*, function *positionFor* } __codon.format__({ string *code*, boolean *position* })  
    生成格式化代码文本，及从源代码坐标到生成代码坐标的转换方法。该方法接收坐标对象或坐标数组作为参数，相应地返回一个或一组坐标对象。

##  推荐

*   [Online JavaScript beautifier](http://jsbeautifier.org)
