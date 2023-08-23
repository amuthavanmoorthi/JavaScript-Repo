let getName = [];
let getDOB = [];



function addItem(){
    let userInputOne = document.getElementById('inputOne').value;
    let userInputTwo = document.getElementById('inputTwo').value;

    getName.push(userInputOne);
    getDOB.push(userInputTwo);
    console.log(getName,getDOB);

    document.getElementById("inputOne").value="";
    document.getElementById("inputTwo").value="";

    document.getElementById('Table').innerHTML=`<tr><th>Name</th>  <th>Date of Birth</th></tr><tr><td>${getName}</td>  <td> ${getDOB}</td> </tr>`;
    // document.getElementById('Table').className="border";
}
// addItem();   