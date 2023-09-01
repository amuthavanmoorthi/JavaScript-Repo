function checkUser() {
  let userName = document.getElementById("ename").value;
  let span1 = document.getElementById("sp1");
  let output;
  if (userName.length > 5) {
    output = "Good";
  } else {
    output = "Bad";
  }
  span1.innerHTML = output;
}

function empid() {
  let employeeId = document.getElementById("eid").value;
  let span2 = document.getElementById("sp2");

  if (employeeId != " ") {
    span2.innerHTML = "Ok";
  } else {
    span2.innerHTML = "Enter your Id";
  }
}

function designation() {
  let designation = document.getElementById("designation").value;
  let span3 = document.getElementById("sp3");

  if (employeeId != " ") {
    span3.innerHTML = "Ok";
  } else {
    span3.innerHTML = "Enter your designation";
  }
}

function setData() {
  let bp = document.getElementById("basic").value;
  let hra = (document.getElementById("hra").value = bp * (10 / 100));
  let da = (document.getElementById("da").value = bp * (5 / 100));
  let pf = (document.getElementById("pf").value = bp * (15 / 100));
  let netSalary = (document.getElementById("net").value = pf + hra + da);
  let grossSalary = (document.getElementById("gross").value = netSalary - pf);

  bp = parseInt(bp);
  hra = parseInt(hra);
  da = parseInt(da);
  pf = parseInt(pf);
  netSalary = parseInt(netSalary);
  grossSalary = parseInt(grossSalary);
}

document.getElementById('saveBtn').addEventListener('click',function(){
    const payData = {
       name : document.getElementById('ename').value,
       eid : document.getElementById('eid').value,
       designations : document.getElementById('designation').value,
       basic : document.getElementById("basic").value,
      housera : document.getElementById("hra").value,
        dailya : document.getElementById("da").value,
        providentf : document.getElementById("pf").value ,
        netSalary : document.getElementById("net").value,
        grossSalary : document.getElementById("gross").value 
    }
    localStorage.setItem('payData', JSON.stringify(payData));
    alert('Pay slip saved')
})

document.getElementById('printBtn').addEventListener('click', function(){
  const payData = JSON.parse(localStorage.getItem('payData'));

  if (payData){
    const print = window.open(" ",'_blank');
    print.document.write(`Name : ${payData.name}`);
    print.document.write(`ID : ${payData.eid}`);
    print.document.write(`Designation : ${payData.designations}`);
    print.document.write(`Basic Pay : ${payData.basic}`);
    print.document.write(`House Rent Allowence : ${payData.housera}`);
    print.document.write(`Daily Allowence : ${payData.dailya}`);
    print.document.write(`Provident Fund : ${payData.providentf}`);
    print.document.write(`Net Salary : ${payData.netSalary}`);
    print.document.write(`Gross Salary : ${payData.grossSalary}`);
  }
})