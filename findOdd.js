function findOdd(A) {
  //happy coding!
  let filtered = {};
  A.forEach((element) => {
    if (!filtered[element]) {
      filtered[element] = 0;
    }
    filtered[element] += 1;
  });
  for (let key in filtered) {
    if (filtered[key] % 2 !== 0) {
      return key;
    }
  }
}

let result = findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);

console.log(result);