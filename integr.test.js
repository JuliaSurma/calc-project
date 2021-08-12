// **
// * @jest-environment jsdom
// */


const Calculator = require('./calc3');

'use strict';
const $ = require('jquery');
test('after click the button 2, then buton "*", then button "1", then button equals the result will be shown', () => {
    // given
    document.body.innerHTML =
        '<div class="result">' +
        '<div last-operation class="last-operation"></div>' +
        '<div running-operation class="running-operation"></div>' +
        '</div>' +
        '<div class="grid">' +
        '<button my-Number></button>' +
        '<button class="making-operator"></button>' +
        '<button my-equal class="doublebtn">=</button>' +
        '</div>';


    const myNumberButtons = document.querySelectorAll('[my-Number]')
    const makingOperationButtons = document.querySelectorAll('[making-operation]')
    const resultButton = document.querySelector('[my-equal]')

    const lastOperationElement = document.querySelector('[last-operation]')
    const runningOperationElement = document.querySelector('[running-operation]')
    const calc = new Calculator(lastOperationElement, runningOperationElement)();

    calc.runningOperationElement.innerText = '';
    calc.lastOperationElement.innerText = '';
    myNumberButtons.innerText = '2'
    makingOperationButtons.innerText = '*'
    resultButton.innerText = '='

    myNumberButtons.addEventListener('click', () => {
        calc.insertNumber(myNumberButtons.innerText);
        calc.makeUpdate();
    })

    makingOperationButtons.addEventListener('click', () => {
        calc.typeOperation(makingOperationButtons.innerText);
        calc.makeUpdate();
    })

    resultButton.addEventListener('click', () => {
        calc.calculate();
        calc.makeUpdate();
    })

    // when
    myNumberButtons.click();
    makingOperationButtons.click();
    myNumberButtons.innerText = '1'
    myNumberButtons.click();
    resultButton.click()

    // then
    expect(document.querySelector(('[running-operation]')).innerText).toEqual('2');
    expect(document.querySelector(('[last-operation]')).innerText).toEqual('');
});



