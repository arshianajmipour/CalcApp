var HeaderClickedHandler = function()
{
    console.log('Clicked!');
}
class Calculator{
    constructor(){
        this.screen = '0' ;
        this.current = '' ;
        this.prev = '0' ;
        this.operation = '' ;
        this.clear();
    }

    compute(){
        let computation
        let p = parseFloat(this.prev)
        let c = parseFloat(this.current)
        switch (this.operation) {
            case '+':
              computation = p + c
              break
            case '-':
              computation = p - c
              break
            case '*':
              computation = p * c
              break
            case '÷':
              computation = p / c
              break
            default:
              return
        }
        this.current = computation
        this.operation = undefined
        this.prev = ''
    }

    clear(){
        this.screen = '0' ;
        this.current = '' ;
        this.prev = '0' ;
        this.operation = '' ;
    }

    appendNumber(number) {
        if (number === '.' && this.current.includes('.')) return
        this.current = this.current.toString() + number.toString()
    }

    setOperation(operation) {
        if (this.current === '') return
        if (this.prev !== '') {
          this.compute()
        }
        this.operation = operation
        this.prev = this.current
        this.current = ''
    }

    update(){
        document.getElementById('screen').innerText=this.current;
    }
}
const calculator = new Calculator();

function number (a){
    console.log(a);
    if(a===10){
        
        calculator.appendNumber('.');
        calculator.update();
    }
    else{
        calculator.appendNumber(a);
        calculator.update();
    }
}
function operation(o){
    console.log(o);
    calculator.setOperation(o);
    // calculator.update();
}
function clearScreen(){
    calculator.clear();
    console.log(calculator)
    calculator.update();
}
function equal(){
    calculator.compute();
    calculator.update();
}