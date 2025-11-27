function divide(a, b) {
    const na = Number(a);
    const nb = Number(b);

    if (!Number.isFinite(na) || !Number.isFinite(nb) || nb === 0) return "Invalid";

    return na / nb;
}

console.log(divide(10, 2));    
console.log(divide("9", "3")); 
console.log(divide(1, 0));     
console.log(divide("foo", 2)); 