 # 정규표현식 (RegExp)

 정규식, Regular Expression

 ## Role

 - 문자 검색 (search)
 - 문자 대체 (replace)
 - 문자 추출 (extract)

 ## Website for Test

 https://regexr.com/

 ## Create RegExp

 ```js
// 생성자
new RegExp('pattern', 'Option');
new RegExp('[a-z]', 'gi');

// 리터럴 (Literal)
/pattern/Option
/[a-z]/gi
 ```

## Example String

```js
const str = `
010-9570-4934
syoon330@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;
```

## methods

메소드 | 문자 | 설명
--|--|--
test | `RegExp.test(str)` | 일치 여부(Boolean) 반환
match | `String.match(RegExp)` | 일치하는 문자의 배열(Array)
replace | `String.replace(RegExp, Replace)` | 일치하는 문자를 대체