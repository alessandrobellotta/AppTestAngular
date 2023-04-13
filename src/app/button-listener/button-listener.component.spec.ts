import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonListenerComponent } from './button-listener.component';

describe('ButtonListenerComponent', () => {
  let component: ButtonListenerComponent;
  let fixture: ComponentFixture<ButtonListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonListenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
