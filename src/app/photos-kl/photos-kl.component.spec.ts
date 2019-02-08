import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosKlComponent } from './photos-kl.component';

describe('PhotosKlComponent', () => {
  let component: PhotosKlComponent;
  let fixture: ComponentFixture<PhotosKlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosKlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosKlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
