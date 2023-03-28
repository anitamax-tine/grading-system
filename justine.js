function calculateGrade(){
// put subject grade values
var sub1=document.getElementById('sub1').value;
var sub2=document.getElementById('sub2').value;
var sub3=document.getElementById('sub3').value;
var sub4=document.getElementById('sub4').value;
var sub5=document.getElementById('sub5').value;
var sub6=document.getElementById('sub6').value;
var sub7=document.getElementById('sub7').value;
// formula
var avg = (parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) +
parseFloat(sub4) + parseFloat(sub5) + parseFloat(sub6) + parseFloat(sub7)) / 7;
// result of the avg puts here
var descriptor = "";
var remarks = "";

if (avg > 100) {
    descriptor = "DOES NOT EXIST";
    remarks = "DOES NOT EXIST";
  }else if (avg >= 90 && avg <= 100) {
    descriptor = "OUTSTANDING";
    remarks = "PASSED";
  } else if (avg >= 85 && avg <= 89) {
    descriptor = "VERY SATISFACTORY";
    remarks = "PASSED";
  } else if (avg >= 80 && avg <= 84) {
    descriptor = "SATISFACTORY";
    remarks = "PASSED";
  } else if (avg >= 75 && avg <= 79) {
    descriptor = "FAIRLY SATISFACTORY";
    remarks = "PASSED";
  } else if(avg >= 0 && avg <= 74){
    descriptor = "DID NOT MEET EXPECTATIONS";
    remarks = "FAILED";
  } else {
    avg= "";
    descriptor = "";
    remarks = "";
  }
// display
  document.getElementById("avg").innerHTML =`${avg.toFixed(2)}`;
  document.getElementById("descriptor").innerHTML =`${descriptor}`;
  document.getElementById("remarks").innerHTML = `${remarks}`;
}