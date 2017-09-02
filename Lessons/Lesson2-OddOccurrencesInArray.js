// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    let obj = {};

    /* Code with "forEach method" which proved faster that "for loop" below */
    A.forEach((a) => {
            if (obj[a]) {
            obj[a]++;
        } else {
            obj[a] = 1;
        }
    });

    /*
     // Code with "for loop" slower than "forEach method" above
     var a = 0;
     for (index in A) {
     a = A[index];
     if (obj[a]) {
     obj[a]++; 
     } else {
     obj[a] = 1;
     }
     };
    */

    for (let prop in obj) {
        if (obj[prop] % 2) {
            return parseInt(prop);
        }
    }
}
