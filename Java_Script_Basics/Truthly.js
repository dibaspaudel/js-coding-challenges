function filterTruthy(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Expected an array');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filterTruthy([0, 1, "", "hello", null, true, undefined, false, 42]));