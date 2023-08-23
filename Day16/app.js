let storing = [];

function addButton(){
let a = document.getElementById("inputBox").value;
storing.push(a);
document.getElementById("inputBox").value="";
document.getElementById('listHere').innerHTML=`${storing}`;
}




