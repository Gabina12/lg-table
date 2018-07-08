import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgTableComponent } from './lg-table.component';

describe('LgTableComponent', () => {
  let component: LgTableComponent;
  let fixture: ComponentFixture<LgTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
