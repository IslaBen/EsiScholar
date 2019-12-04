import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAutoCompleteComponent } from './ng-auto-complete.component';

describe('NgAutoCompleteComponent', () => {
  let component: NgAutoCompleteComponent;
  let fixture: ComponentFixture<NgAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
