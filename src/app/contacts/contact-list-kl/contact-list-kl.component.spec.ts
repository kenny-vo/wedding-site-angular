import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListklComponent } from './contact-list-kl.component';

describe('ContactListComponent', () => {
  let component: ContactListklComponent;
  let fixture: ComponentFixture<ContactListklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
