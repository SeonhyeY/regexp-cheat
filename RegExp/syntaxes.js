const str = `
010-9570-4934
syoon330@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

const regexp_1 = new RegExp('the', 'gi');
console.log(str.match(regexp_1));

const regexp_2 = /the/gi;
console.log(str.match(regexp_2));