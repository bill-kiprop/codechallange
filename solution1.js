let mark = 100
const grade=['A', 'B', 'C', 'D', 'E'] //array containing values that will be used as the grades

function calculateGrading(mark){ //checks the mark and then assigns the proper grade
if (mark > 79 && mark <= 100){
    console.log(grade[0]) 
}
   else if (mark >=60 && mark <=79){
    console.log(grade[1]) 
}
    else if(mark >= 49 && mark <= 59){
        console.log(grade[2])
    }
    else if(mark >= 40 && mark <= 49){
        console.log(grade[3])
}
    else if(mark < 40){
    console.log(grade[4])
    }
}
if (!isNaN(mark) && mark >= 0 && mark <= 100) { //preventes user form entering an invalid value
    calculateGrading(mark);
} else {
    console.log("INPUT ERROR! \nPlease input values between 0 - 100");// prints out ann error when an invalid value is entered
}




 