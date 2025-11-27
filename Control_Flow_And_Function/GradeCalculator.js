export default function getGrade(score) {
    if (typeof score !== 'number' || !Number.isFinite(score)) {
        return "Invalid";
    }
    if (score < 0 || score > 100) {
        return "Invalid";
    }

    let grade;
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}

console.log(getGrade(85));  
console.log(getGrade(72));
console.log(getGrade(101));    
console.log(getGrade("A+"));
