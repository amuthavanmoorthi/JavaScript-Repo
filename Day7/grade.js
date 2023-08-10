function findGrade(mark){
    if(mark>=90 && mark>=100){
        console.log("Your grade is A")
    }
    if(mark>=80 && mark>90){
        console.log("Your grade is B")
    }
    if(mark>=60 && mark>80){
        console.log("Your grade is C")
    }
    if(mark>=50 && mark>60){
        console.log("Your grade is D")
    }
    if(mark>=35 && mark>50){
        console.log("Your grade is E")
    }
    if(mark<35){
        console.log("Failed")
    }
    else{
        console.log("Invalid Mark")
    }
}
findGrade(3);