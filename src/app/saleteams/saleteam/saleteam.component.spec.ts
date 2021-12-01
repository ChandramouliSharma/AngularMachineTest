import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleteamComponent } from './saleteam.component';

describe('SaleteamComponent', () => {
  let component: SaleteamComponent;
  let fixture: ComponentFixture<SaleteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
