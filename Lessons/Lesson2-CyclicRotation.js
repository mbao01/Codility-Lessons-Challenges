
function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    let rotations = K % A.length;
    if (rotations > 0) {
        let removed = A.splice(0, A.length-rotations);
        Array.prototype.push.apply(A, removed);
    }
    return A;
}
