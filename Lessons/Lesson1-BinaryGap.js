
function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let numInBinary = (N).toString(2);
    let matches = numInBinary.match(/[0]+(?=[1])/gi);
    return (matches) ? matches.sort()[matches.length - 1].length : 0;
}
