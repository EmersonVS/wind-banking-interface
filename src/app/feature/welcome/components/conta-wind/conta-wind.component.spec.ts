/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContaWindComponent } from './conta-wind.component';

describe('ContaWindComponent', () => {
  let component: ContaWindComponent;
  let fixture: ComponentFixture<ContaWindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
