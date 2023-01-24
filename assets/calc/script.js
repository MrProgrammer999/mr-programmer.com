//This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}   
// This function display values
   function display(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function backspace() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0 , -1);
}
function history(){
   document.getElementById("result").value
}
