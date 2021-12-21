/* 
  **** File: binary-gap.ts ****
  A binary gap within a positive integer N is any maximal sequence of consecutive 
  zeros that is surrounded by ones at both ends in the binary representation of N.
  For example, number 9 has binary representation 1001 and contains a binary gap of length 2. 
  The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. 
  The number 20 has binary representation 10100 and contains one binary gap of length 1. 
  The number 15 has binary representation 1111 and has 
    console.log(this.binary[this.binary.length - 1]);
    console.log(this.binary[this.binary.length - 1]);
    console.log(this.binary[this.binary.length - 1]);no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
*/

// Solution class
class Solution {
  // variables.
  decimal: number;
  binary: number[];
  temp: number[];
  remainder: number;
  zero: {};
  size: number;

  // initialization of decimal var.
  constructor(decimal: number) {
    this.decimal = decimal;
    this.binary = [].reverse();
    this.zero = {};
    this.size = 0;
  }

  // connverting the decimal to binary form.
  convertToBinary() {
    this.remainder = this.decimal % 2;
    this.decimal = Math.floor(this.decimal / 2);
    if (this.decimal === 0) {
      this.binary.push(this.remainder);
    } else {
      this.binary.push(this.remainder);
      this.convertToBinary();
    }
  }

  // computing binary gap
  computeGap() {
    this.convertToBinary();
    let reversed = this.binary.reverse();
    let index = 0;
    let count = 0;
    for (let i = 0; i <= reversed.length; i++) {
      if (reversed[i] === 0) {
        this.zero[count] = ++index;
      } else {
        count++;
        index = 0;
      }
    }
    console.log(this.zero);
  }

  // finding the length of the largest binary gap
  findLength() {
    this.computeGap();
    let num = [];
    for (const key in this.zero) {
      num.push(this.zero[key]);
    }
    console.log(num);
    if (this.binary[this.binary.length - 1] === 0) {
      num.pop();
    }
    console.log(num)
    this.size = num.length == 0? 0:Math.max(...num);
  }

  toString() {
    this.findLength();   
    console.log(`Length of gap is ${this.size}`);
  }
}

// a new instance of Solution
let solution = new Solution(529);

// results
solution.toString();
