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

## Methods

Methods | Expressions | Instructions
--|--|--
test | `RegExp.test(str)` | 일치 여부(Boolean) 반환
match | `String.match(RegExp)` | 일치하는 문자의 배열(Array)
replace | `String.replace(RegExp, Replace)` | 일치하는 문자를 대체

## Flag(Option)

Flags | Instructions
--|--
g | 모든 문자 일치 (global)
i | 영어 대소문자의 구분 없이 일치 (ignore case)
m | 여러 줄 일치 (multi line)

## Pattern(Expression)

Patterns | Instructions
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{n} | n개 연속 일치
{n, } | n개 이상 연속 일치
{n, m} | n개 이상 m개 이하(n~m개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | a부터 z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개의 문자(Word, 대소영문 52개 + 숫자 10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치 (Lookbehind)