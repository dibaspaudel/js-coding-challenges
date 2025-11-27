export default function reverseArray(arr) {
    if (!Array.isArray(arr)) throw new TypeError('reverseArray expects an array');
    const result = new Array(arr.length);
    for (const [i, v] of arr.entries()) {
        result[arr.length - 1 - i] = v;
    }
    return result;
}

console.log(reverseArray([1, 2, 3])); 
console.log(reverseArray([4,5,6,7,8,9])); 