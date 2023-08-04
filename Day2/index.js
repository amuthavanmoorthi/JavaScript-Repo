alert("Are you comin to checkin your Grade!");

let mark = 80

if(mark<40){
    document.write("Grade F")
}
else if((mark>=40 && mark<=50)){
    document.write("Grade D")
}
else if((mark>=50 && mark<=60)){
    document.write("Grade C")
}
else if((mark>=60 && mark<=70)){
    document.write("Grade B")
}
else if(mark>=70){
    document.write("Grade A")
}

Array

var array=[1,2,3,4,5];
for(let a=0; a<array.length; a++){
    document.array(array[a], "<br>")
}

for (let a=1; a<=20; a++){
    document.write(a*a, "<br>")
}

for (let a=1; a<=5; a++){
    for (let b=1; a<=b; b++)
    {
        document.write("* ")
    }
}
    document.write("<br>")