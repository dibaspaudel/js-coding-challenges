let count = 1;
const id = setInterval(() => {
    console.log(count);
    if (count === 6) {
        clearInterval(id);
    }
    count++;
}, 2000);