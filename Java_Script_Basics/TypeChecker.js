function checkTypes(values) {
    if (!Array.isArray(values)) throw new TypeError('Expected an array');
    return values.map(v => typeof v);
}

console.log(checkTypes([1, "hello", true, { x: 1 }]));
