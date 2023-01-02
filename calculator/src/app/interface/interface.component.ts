import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  input: string = '';
  result: number = 0;
  operand1: number = 0;
  operand2: number = 0;
  operatorflag: number = 0;
  operator: string[] = ['+', '-', 'x', '÷', '%'];
  decimal: string = '.';
  operatorIndex: number = 0;

  clear() {
    if(this.input != '') {
      this.input = this.input.substring(0, this.input.length-1);
    }
  }

  clearAll() {
    this.input = '';
    this.result = 
    this.operatorflag = 0;
  }

  getOperand(digit: number) {
    this.input =this.input + digit;
  }

  getOperator(sign: string) {
    this.input =this.input + sign;
    if(!(sign == '.')) {
      this.operatorflag++;
    }
    this.operand1 = Number(this.input.substring(0,this.input.length-1));
    this.operatorIndex = this.input.indexOf(sign);
  }

  calculation() {
    this.expressionEval();
    this.operatorflag = 0;
    if(this.input.includes('+')) {
      this.result = Number(this.operand1 + this.operand2);
    }
    else if(this.input.includes('-')) {
      this.result = Number(this.operand1 - this.operand2);
    }
    else if(this.input.includes('x')) {
      this.result = Number(this.operand1 * this.operand2);
    }
    else if(this.input.includes('÷')) {
      this.result = Number(this.operand1 / this.operand2);
    }
    else if(this.input.includes('%')) {
      this.result = Number(this.operand1 % this.operand2);
    }
    this.input = this.result.toString();
  }

  //to check logical condition and errors brfore calculating
  expressionEval() {
    //input cannot start with symbols or '.'
    this.operator.forEach(symbol => {
      if(this.input[0] == symbol) {
        alert('cannot evaluate expression starting with "'+symbol+'"');
        this.input = '';
      }
    });

    if(this.input[0] == this.decimal) {
      alert('cannot evaluate expression starting with "'+this.decimal+'"');
      this.input = '';
    }

    //input cannot contain mor than one operator
    if(this.operatorflag >=2) {
      alert('cannot contain more than one operator');
    }

    this.operand2 = Number(this.input.substring(this.operatorIndex+1, this.input.length));

  }

}
