const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "CLEAR") {
            expression = "";
            display.value = "";
        }

        else if (value === "=") {
            try {

                let result;

                if (expression.includes("+")) {
                    const [a, b] = expression.split("+");
                    result = add(a, b);
                }

                else if (expression.includes("-")) {
                    const [a, b] = expression.split("-");
                    result = subtract(a, b);
                }

                else if (expression.includes("*")) {
                    const [a, b] = expression.split("*");
                    result = multiply(a, b);
                }

                else if (expression.includes("/")) {
                    const [a, b] = expression.split("/");
                    result = divide(a, b);
                }

                display.value = result;
                expression = result;
            }

            catch {
                display.value = "ERROR";
                expression = "";
            }
        }

        else {
            expression += value;
            display.value = expression;
        }
    });
});