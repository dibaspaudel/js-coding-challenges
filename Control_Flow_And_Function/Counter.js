function createCounter(initial = 0) {
    let count = initial; 
    return {
        increment() {
            count += 1;
            return count;
        },
        get() {
            return count;
        }
    };
}

const c1 = createCounter();
console.log(c1.get());        
console.log(c1.increment());  
console.log(c1.increment());  
console.log(c1.get());        

const c2 = createCounter(10);
console.log(c2.get());        
console.log(c2.increment()); 

