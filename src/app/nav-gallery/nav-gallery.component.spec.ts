import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGalleryComponent } from './nav-gallery.component';

describe('NavGalleryComponent', () => {
  let component: NavGalleryComponent;
  let fixture: ComponentFixture<NavGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavGalleryComponent]
    });
    fixture = TestBed.createComponent(NavGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
