import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ButtonListenerComponent } from './button-listener/button-listener.component';
import { EditableTextComponent } from './editable-text/editable-text.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponent,
    PropertyBindingComponent,
    ButtonListenerComponent,
    EditableTextComponent,
    LifecycleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
