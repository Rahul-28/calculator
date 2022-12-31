import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  input: string = '';
  result: string = 'result';
  operand1?: number ;
  operand2?: number ;
  operator:string[] = ['+', '-', 'x', '÷', '%', '.'];
  

  clear() {
    if(this.input != '') {
      this.input = this.input.substring(0, this.input.length-1);
    }
  }

  clearAll() {
    this.input = '';
    this.result = '';
  }

  getOperand(digit: number) {
    this.input =this.input + digit;
  }

  getOperator(sign: string) {
    this.input =this.input + sign;
  }

  calc() {
    
  }

  expressionEval() {
    this.operator.forEach(symbol => {
      if(this.input[0] == symbol) {
        alert('cannot evaluate expression starting with "'+symbol+'"');
        this.input = '';
      }
    });
  }

}
