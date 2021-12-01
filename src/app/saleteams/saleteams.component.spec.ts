import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleteamsComponent } from './saleteams.component';

describe('SaleteamsComponent', () => {
  let component: SaleteamsComponent;
  let fixture: ComponentFixture<SaleteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
