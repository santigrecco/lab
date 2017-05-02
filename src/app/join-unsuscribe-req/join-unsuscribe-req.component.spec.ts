/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JoinUnsuscribeReqComponent } from './join-unsuscribe-req.component';

describe('JoinUnsuscribeReqComponent', () => {
  let component: JoinUnsuscribeReqComponent;
  let fixture: ComponentFixture<JoinUnsuscribeReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinUnsuscribeReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUnsuscribeReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
