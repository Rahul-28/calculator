import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  input: string = '';
  result?: number ;
  operand1?: number ;
  operand2?: number ;
  operatorflag: number = 0;
  operator: string[] = ['+', '-', 'x', '÷', '%'];
  decimal: string = '.';
  

  clear() {
    if(this.input != '') {
      this.input = this.input.substring(0, this.input.length-1);
    }
  }

  clearAll() {
    this.input = '';
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
  }

  calculation() {
    this.expressionEval();
    this.operatorflag = 0;
  }

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

    //input cannot contain mor than one operator or '.'
    if(this.operatorflag >=2) {
      alert('cannot contain more than one operator or decimal points');
    }
  }

}
