import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookDetailsComponent } from './guestbook-details.component';

describe('GuestbookDetailsComponent', () => {
  let component: GuestbookDetailsComponent;
  let fixture: ComponentFixture<GuestbookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
