function addAsync(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

addAsync(5, 10).then((result) => console.log(result)); 