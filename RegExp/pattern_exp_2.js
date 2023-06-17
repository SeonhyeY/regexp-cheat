let str = `
010-9570-4934
syoon330@gmail.com
동해물과 백두산이 마르고 닳도록
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

/*
console.log(
  str.match(/[fox]/g)
);
console.log(
  str.match(/[m-q]/g)
);
console.log(
  str.match(/[0-9]{1,}/g)
);
console.log(
  str.match(/[가-힣]{1,}/g)
);


console.log(
  str.match(/\w/g)
);
console.log(
  str.match(/\bf\w{1,}\b/g)
);
console.log(
  str.match(/\d{1,}/g)
);
console.log(
  str.match(/\s/g)
);

const h = `  the hello   world!

`
console.log(
  h.replace(/\s/g, '')
);
*/

console.log(
  str.match(/.{1,}(?=@)/g)
);
console.log(
  str.match(/(?<=@).{1,}/g)
);