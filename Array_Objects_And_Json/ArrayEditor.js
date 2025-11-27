export default function arrayEditor(input = []) {
    const arr = [...input]; 
    arr.push(10);
    arr.unshift(5);
    arr.pop();
    arr.splice(1, 1);
    return arr;
}

console.log(arrayEditor([1, 2, 3])); 
console.log(arrayEditor([]));       
console.log(arrayEditor([9]));      