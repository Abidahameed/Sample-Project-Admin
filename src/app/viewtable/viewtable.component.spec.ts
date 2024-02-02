import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtableComponent } from './viewtable.component';

describe('ViewtableComponent', () => {
  let component: ViewtableComponent;
  let fixture: ComponentFixture<ViewtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtableComponent]
    });
    fixture = TestBed.createComponent(ViewtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
