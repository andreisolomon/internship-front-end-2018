
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistTableComponent } from './userlist-table.component';

describe('UserlistTableComponent', () => {
  let component: UserlistTableComponent;
  let fixture: ComponentFixture<UserlistTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
