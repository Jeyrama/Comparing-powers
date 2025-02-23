/*
You certainly can tell which is the larger number between 210 and 215.
But what about, say, 210 and 310? You know this one too.
Things tend to get a bit more complicated with both different bases and exponents: which is larger between 39 and 56?

Well, by now you have surely guessed that you have to build a function to compare powers, 
returning -1 if the first member is larger, 0 if they are equal, 
1 otherwise; powers to compare will be provided in the [base, exponent] format:
  comparePowers([2,10],[2,15])===1
  comparePowers([2,10],[3,10])===1
  comparePowers([2,10],[2,10])===0
  comparePowers([3,9],[5,6])===-1
  comparePowers([7,7],[5,8])===-1
*/


// Solution

function comparePowers([b1, e1], [b2, e2]) {
  let d = Math.log(b2) * e2 - Math.log(b1) * e1;
  return (d > 0) - (d < 0);
}

// or

const comparePowers = ([a, n], [b, m]) => Math.sign(b - a ** (n / m));