function sumAll(...nums) {
    return nums.reduce((sum, n) => sum + Number(n), 0);
}



    console.log(sumAll(1, 2, 3));        
    console.log(sumAll('4', '5'));    
    console.log(sumAll(1, '2', 3));      
    console.log(sumAll());               
    console.log(sumAll(10, -2, '3.5'));  