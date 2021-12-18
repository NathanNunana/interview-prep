function digital_root_helper(n, output) {
  if (Math.floor(n / 10) === 0) {
    return output + n;
  } else {
    return digital_root_helper(Math.floor(n / 10), output + (n % 10));
  }
}
function digital_root(n) {
  // ...
  let sum = digital_root_helper(n, 0);
  while (Math.floor(sum / 10) !== 0) {
    sum = digital_root_helper(sum, 0);
  }
  return sum;
}

let result = digital_root(493193);

console.log(result)


function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
    }

let solution = digital_root(493193);

console.log(solution)
