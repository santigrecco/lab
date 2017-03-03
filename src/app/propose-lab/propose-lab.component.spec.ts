/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProposeLabComponent } from './propose-lab.component';

describe('ProposeLabComponent', () => {
  let component: ProposeLabComponent;
  let fixture: ComponentFixture<ProposeLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposeLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
