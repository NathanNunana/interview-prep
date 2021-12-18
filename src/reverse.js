function reverseStack(input){
    if(input.length === 0){
        return input;
    }else{
        return reverseStack(input.slice(1)) + input[0];
    }
}

let fruits = ["apple", "orange","banana"]

console.log(reverseStack(fruits));

function reverseStr(input) {
  if (input.length === 0) {
    return input;
  } else {
    return reverseStr(input.substring(1)) + input.charAt(0);
  }
}

console.log(reverseStr("Nathan"));

