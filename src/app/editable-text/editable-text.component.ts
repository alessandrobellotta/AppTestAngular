import { Component } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent {
  message = 'Im read only!';
  canEdit = false;

  onEditClick(){
    this.canEdit = !this.canEdit;
    if(this.canEdit){
      this.message = 'You can edit!'
    }else{
      this.message = 'READ ONLY';
    }
  }
}
