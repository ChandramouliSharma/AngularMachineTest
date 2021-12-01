import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleteamListComponent } from './saleteam-list.component';

describe('SaleteamListComponent', () => {
  let component: SaleteamListComponent;
  let fixture: ComponentFixture<SaleteamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleteamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleteamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
