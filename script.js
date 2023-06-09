
let operands = [];
let operators = [];
let counter = 0;

let isOperatorSet = false;
let isContinue = false;

let temp = '';

let buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        load(buttons[i].getAttribute('data-no'))
    });
}

function solve(operand1, operand2, operators) {

}

function load(val) {

    if (val === 'plus' || val === 'minus' || val === 'mul' || val === 'div') {
        if (isOperatorSet === false) {
            {
                if (temp != '') {
                    operands.push(temp);
                }
                isOperatorSet = true;
                temp = '';
                operators.push(val);
                console.log(operands);

            }
        }



    } else if (val === 'clear') {
        operands = [];
        operators = [];
        temp = '';
        isOperatorSet = false;
        showDisplay('0');

    } else if (val === 'equals') {
        console.log(operands);
        operands.push(temp);
        temp = '';
        while (operators.length > 0) {
            i = 0
            if (operators[i] === 'plus') {
                operands[i] = Number(operands[i]) + Number(operands[i + 1]);
            }
            else if (operators[i] === 'minus') {
                operands[i] = Number(operands[i]) - Number(operands[i + 1]);
            }
            else if (operators[i] === 'mul') {
                operands[i] = Number(operands[i]) * Number(operands[i + 1]);
            }
            else if (operators[i] === 'div') {
                if (operands[i + 1] === '0') {
                    showDisplay('Error');
                    return;
                }
                operands[i] = Number(operands[i]) / Number(operands[i + 1]);
            }
            operands.splice(i + 1, 1);
            operators.splice(i, 1);

            console.log(operands);
        }
        showDisplay(operands[0]);



    } else {
        temp = temp + val;
        isOperatorSet = false;
        showDisplay(temp);


    }

    // console.log(operands);
    // console.log(operators);

}


function showDisplay(val) {

    document.getElementsByClassName('cal-display')[0].innerHTML = val;
}

