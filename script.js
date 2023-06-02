let buttons = document.getElementsByClassName('button');

let operands = [];
let operators = [];
let temp = ''
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => { load(buttons[i].getAttribute('data-no')) });
}

function load(val) {
    if (typeof Number(val) == 'number') {
        showDisplay(val);
        operands.push(val)
        console.log(operands)
        return
    }
    console.log('operand');
}


function showDisplay(val) {
    document.getElementsByClassName('cal-display')[0].innerHTML = val;
}

