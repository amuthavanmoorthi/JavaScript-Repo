function Submit(){
    let uname = document.getElementById('inputId').value;
    let date = document.getElementById('dateId').value;
    let creates = uname.slice(0,4);
    let dates = date.substring(0,4)
    let generate = creates.concat(dates);
    document.getElementById('generating').value = generate;
    // alert(generate);
    // g.value = generate ; 
}
