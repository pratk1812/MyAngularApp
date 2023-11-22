import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleui',
  templateUrl: './simpleui.component.html',
  styleUrl: './simpleui.component.css'
})
export class SimpleuiComponent {
  userInput: string = '';
  submitted: boolean = false;
  displayedInput: string = '';

  displayInput() {
    this.submitted=true;
    this.displayedInput = this.userInput;
  }
}
