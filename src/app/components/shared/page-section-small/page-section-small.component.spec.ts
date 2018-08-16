import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionSmallComponent } from './page-section-small.component';

describe('PageSectionSmallComponent', () => {
  let component: PageSectionSmallComponent;
  let fixture: ComponentFixture<PageSectionSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
