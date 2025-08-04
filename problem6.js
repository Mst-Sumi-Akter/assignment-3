/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var currentSalary;
// for 5%
var result = 1;
for (var i = 0; i<experience; i++){
     result = 1.05 * result;
}
  currentSalary = startingSalary * result;
  console.log(currentSalary.toFixed(2));