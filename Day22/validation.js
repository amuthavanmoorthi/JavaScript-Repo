function Ename(){
    let a = document.getElementById('ename').value;
    if(a.length>5){
        document.getElementById('span1').textContent="Good!";
    }
    else{
        document.getElementById('span1').textContent="Bad!";
    }
}

function EId(){
    let a = document.getElementById('eid').value;
    if(a != " "){
        document.getElementById('span2').textContent="Ok!";
    }
    else{
        document.getElementById('span2').textContent="Give your id!";
    }
}

function Desi(){
    let a = document.getElementById('designation').value;
    if(a != " "){
        document.getElementById('span3').textContent="Ok!";
    }
    else{
        document.getElementById('span3').textContent="Give your id!";
    }
}

function SetData(){
    let bp = parseInt(document.getElementById('bpay').value);
    let hra =parseInt( document.getElementById('hrpay').value) = bp*(10/100);
    let da = parseInt ( document.getElementById('dapay').value ) = bp*(5/100);
    let pf = parseInt ( document.getElementById('pfpay').value ) = bp*(15/100);
    let netSalary = parseInt ( document.getElementById('nsalary').value )= (pf+hra+da);
    let grossSalary = parseInt ( document.getElementById('gsalary').value )= (netSalary - pf);
}