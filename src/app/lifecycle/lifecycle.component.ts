import { Component } from '@angular/core';
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  message = '';
  ngOnInit() {
    this.message = 'Initialized by OnInit!'
  }

  updateMessage(){
    this.message = 'Updated by updateMessage function!';
  }
}
