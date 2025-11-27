export default function getDayName(num) {
    switch (num) {
        case 0:
        case 7: 
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getDayName(0));   
console.log(getDayName(1));   
console.log(getDayName(3));       