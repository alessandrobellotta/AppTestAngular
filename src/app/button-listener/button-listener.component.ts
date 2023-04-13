import { Component } from '@angular/core';

@Component({
  selector: 'app-button-listener',
  templateUrl: './button-listener.component.html',
  styleUrls: ['./button-listener.component.css']
})
export class ButtonListenerComponent {
  canClick = false;
  message = 'Hi!';

  sayMessage(){
    alert(this.message);
  }
}
