import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  /* @Input decorator lets a parent component update
     data in a child component.
     @Output decorator lets the child send data
     to a parent component. */
  @Input() myName = '';
  @Input('parent') parentName = '';
}
