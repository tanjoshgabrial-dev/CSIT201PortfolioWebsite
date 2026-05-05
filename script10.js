function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        return;
    }

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;
    const remainder = num1 % num2;

    document.getElementById("sum").innerHTML =
        "the sum is: " + sum.toFixed(2) + "<br><br>" +
        "the difference is: " + difference.toFixed(2) + "<br><br>" +
        "the product is: " + product.toFixed(2) + "<br><br>" +
        "the quotient is: " + quotient.toFixed(2) + "<br><br>" +
        "the remainder is: " + remainder.toFixed(2);
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sum").innerHTML = "";
}