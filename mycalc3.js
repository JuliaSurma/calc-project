
function calculate(last, run, operation) {
    let calculation
    last = parseFloat(last)
    run = parseFloat(run)

    if (isNaN(last) || isNaN(run)) return

    switch (operation) {
        case '+':
            calculation = last + run

            break
        case '-':
            calculation = last - run
            break
        case '*':
            calculation = last * run
            break
        case '/':
            if (run !== 0) {
                calculation = last / run
            } else {
                throw Error('Invalid operation');
            }
            break
        default:
            return
    }
    return calculation
}

module.exports = calculate;

function getDisplay(isInteger, isDecimal) {
    let integerShow
    if (isNaN(isInteger)) {
        integerShow = ''
    } else {
        integerShow = isInteger.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (isDecimal != null) {
        return `${integerShow}.${isDecimal}`
    } else {
        return integerShow
    }
}

module.exports = getDisplay;


'use strict';
// const $ = require('jquery');

document.querySelector('[cache]').addEventListener('click', function () {
    document.querySelector('[running-operation]').innerText = ' ';
})




