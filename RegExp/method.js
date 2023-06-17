let str = `
010-9570-4934
syoon330@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

const regexp_1 = /fox/gi;
console.log(regexp_1.test(str));
const regexp_2 = /Seonhye/gi;
console.log(regexp_2.test(str));

const regexp_3 = /fox/gi;
console.log(str.replace(regexp_3, 'AAA'));
console.log(str);

str = str.replace(regexp_3, 'AAA');
console.log(str);