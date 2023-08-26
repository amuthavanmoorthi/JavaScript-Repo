let doingTasks =[];
function getInput(){
     let valuePush = document.getElementById('userInput').value;  
     doingTasks.push(valuePush);
     document.getElementById('userInput').value=" ";

     viewDetails();
}

function viewDetails(){
    emptyString ="";
    let sno =0;
    doingTasks.forEach(function(value,index){
        sno+=1;
        emptyString +='<tr><td>'+sno+'</td><td>'+value+'</td><td><a onClick= removetasks()>'+index+'REMOVE</a></td></tr>';
    })
    document.getElementById('tasks').innerHTML=emptyString;
}

function removetasks(id){
    doingTasks.splice();
    viewDetails();
}