import { Component } from '@angular/core';

@Component({
  selector: 'app-second-parent',
  templateUrl: './second-parent.component.html',
  styleUrls: ['./second-parent.component.css']
})
export class SecondParentComponent {
  names = ['Alex', 'Maria', 'Francesca'];
  addName(newName: string){
    this.names.push(newName);
  }
}
