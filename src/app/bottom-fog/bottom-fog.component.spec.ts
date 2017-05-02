/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BottomFogComponent } from './bottom-fog.component';

describe('BottomFogComponent', () => {
  let component: BottomFogComponent;
  let fixture: ComponentFixture<BottomFogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomFogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomFogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
