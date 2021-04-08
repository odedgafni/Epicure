import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavLinksComponent } from './mobile-nav-links.component';

describe('MobileNavLinksComponent', () => {
  let component: MobileNavLinksComponent;
  let fixture: ComponentFixture<MobileNavLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNavLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
