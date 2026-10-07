
function addNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let sum = a + b;
    // document.getElementById("result").innerHTML = "Result = " + sum;
    document.getElementById("result").innerText = "Result = " + sum;
}
//    let b = parseInt(document.getElementById("num2").value);
// let b = parseFloat(document.getElementById("num2").value);