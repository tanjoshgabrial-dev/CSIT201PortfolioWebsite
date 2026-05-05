// For Loop Logic
function runForLoop() {
    const num = parseInt(document.getElementById("forNum").value);
    const text = document.getElementById("forText").value;
    let display = "";

    for (let i = 1; i <= num; i++) {
        display += i + ". " + text + "<br>";
    }
    document.getElementById("forResults").innerHTML = display;
}

// While Loop Logic
function runWhileLoop() {
    const num = parseInt(document.getElementById("whileNum").value);
    const text = document.getElementById("whileText").value;
    let display = "";
    let i = 1;

    while (i <= num) {
        display += i + ". " + text + "<br>";
        i++;
    }
    document.getElementById("whileResults").innerHTML = display;
}

// Do-While Loop Logic
function runDoWhileLoop() {
    const num = parseInt(document.getElementById("doWhileNum").value);
    const text = document.getElementById("doWhileText").value;
    let display = "";
    let i = 1;

    if (!isNaN(num) && num > 0) {
        do {
            display += i + ". " + text + "<br>";
            i++;
        } while (i <= num);
    }
    document.getElementById("doWhileResults").innerHTML = display;
}

// Clear function
function clearBox(type) {
    document.getElementById(type + "Num").value = "";
    document.getElementById(type + "Text").value = "";
    document.getElementById(type + "Results").innerHTML = "";
}