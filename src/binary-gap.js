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
var Solution = /** @class */ (function () {
    // initialization of decimal var.
    function Solution(decimal) {
        this.decimal = decimal;
        this.binary = [].reverse();
        this.zero = {};
        this.size = 0;
    }
    // connverting the decimal to binary form.
    Solution.prototype.convertToBinary = function () {
        this.remainder = this.decimal % 2;
        this.decimal = Math.floor(this.decimal / 2);
        if (this.decimal === 0) {
            this.binary.push(this.remainder);
        }
        else {
            this.binary.push(this.remainder);
            this.convertToBinary();
        }
    };
    // computing binary gap
    Solution.prototype.computeGap = function () {
        this.convertToBinary();
        var reversed = this.binary.reverse();
        var index = 0;
        var count = 0;
        for (var i = 0; i <= reversed.length; i++) {
            if (reversed[i] === 0) {
                this.zero[count] = ++index;
            }
            else {
                count++;
                index = 0;
            }
        }
        console.log(this.zero);
    };
    // finding the length of the largest binary gap
    Solution.prototype.findLength = function () {
        this.computeGap();
        var num = [];
        for (var key in this.zero) {
            num.push(this.zero[key]);
        }
        console.log(num);
        if (this.binary[this.binary.length - 1] === 0) {
            num.pop();
        }
        console.log(num);
        this.size = num.length == 0 ? 0 : Math.max.apply(Math, num);
    };
    Solution.prototype.toString = function () {
        this.findLength();
        console.log("Length of gap is " + this.size);
    };
    return Solution;
}());
// a new instance of Solution
var solution = new Solution(529);
// results
solution.toString();
