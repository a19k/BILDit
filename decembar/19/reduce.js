

const array = [1, 3, 2, 2, 0, 4, 3];

console.log(array.reduce((acc, e) => e === 3 ? e : acc, 0));
