var display = document.getElementById("display");
var expression = "";
var buttons = document.getElementsByTagName('button');
var num = 0;
for (var b of buttons) {
    b.addEventListener('click', function () {
        if (this.innerText === "AC") {
            expression = "";
            display.value = expression;
        } else if (this.innerText === "%") {
            var num = parseFloat(expression);
            expression = (num/100) + "*";
        } else if (this.innerText === "=") {
            calculate(expression);
            expression = "";
        } else {
            
            expression += this.innerText;
            display.value = expression;
        }
    });
}

function calculate(exp) {
    display.value = eval(exp);
    return ;
}

