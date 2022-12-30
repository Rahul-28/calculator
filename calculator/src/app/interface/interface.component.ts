import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  input: string = 'input';
  result: string = 'result';

  clear() {
    if(this.input != "") {
      this.input = this.input.substring(0, this.input.length-1);
    }
  }

  clearAll() {
    this.input = '';
    this.result = '';
  }

}
