class Calculator {
    constructor(lastOperationElement, runningOperationElement) {
        this.lastOperationElement = lastOperationElement
        this.runningOperationElement = runningOperationElement
        this.cache()
    }

    cache() {
        this.runningOperation = ''
        this.lastOperation = ''
        this.operation = undefined
    }

    singleClear() {
        this.runningOperation = this.runningOperation.toString().slice(0, -1)
    }

    insertNumber(number) {
        if (number === '.' && this.runningOperation.includes('.')) return
        this.runningOperation = this.runningOperation.toString() + number.toString()
    }

    typeOperation(operation) {
        if (this.runningOperation === '') return
        if (this.lastOperation !== '') {
            this.calculate()
        }
        this.operation = operation
        this.lastOperation = this.runningOperation
        this.runningOperation = ''
    }

    calculate() {
        let calculation
        const last = parseFloat(this.lastOperation)
        const run = parseFloat(this.runningOperation)
        if (isNaN(last) || isNaN(run)) return
        switch (this.operation) {
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
                if (run === 0) {
                    throw Error('Invalid operation');
                } else {
                    calculation = last / run
                }
                break
            default:
                return
        }
        this.runningOperation = calculation
        this.operation = undefined
        this.lastOperation = ''
    }

    getDisplay(number) {
        const stringNmb = number.toString()
        const isInteger = parseFloat(stringNmb.split('.')[0])
        const isDecimal = stringNmb.split('.')[1]
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

    makeUpdate() {
        this.runningOperationElement.innerText =
            this.getDisplay(this.runningOperation)
        if (this.operation != null) {
            this.lastOperationElement.innerText =
                `${this.getDisplay(this.lastOperation)} ${this.operation}`
        } else {
            this.lastOperationElement.innerText = ''
        }
    }
}


const myNumberButtons = document.querySelectorAll('[my-Number]')
const makingOperationButtons = document.querySelectorAll('[making-operation]')
const resultButton = document.querySelector('[my-equal]')
const singleClearButton = document.querySelector('[single-clear]')
const cacheButton = document.querySelector('[cache]');
const lastOperationElement = document.querySelector('[last-operation]')
const runningOperationElement = document.querySelector('[running-operation]')
const calc = new Calculator(lastOperationElement, runningOperationElement)

myNumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.insertNumber(button.innerText)
        calc.makeUpdate()
    })
})

makingOperationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.typeOperation(button.innerText)
        calc.makeUpdate()
    })
})


resultButton.addEventListener('click', button => {
    calc.calculate()
    calc.makeUpdate()
})

cacheButton.addEventListener('click', button => {
    calc.cache()
    calc.makeUpdate()
})


singleClearButton.addEventListener('click', button => {
    calc.singleClear()
    calc.makeUpdate()
})

