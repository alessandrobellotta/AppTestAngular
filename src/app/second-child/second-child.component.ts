import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {
  //@Output decorator lets the child send data to the parent component.
  @Output() newName = new EventEmitter<string>;
  addNewName(name: string){
    this.newName.emit(name);
  }
}
