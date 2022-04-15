import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserColectionComponent } from './user-colection.component';

describe('UserColectionComponent', () => {
  let component: UserColectionComponent;
  let fixture: ComponentFixture<UserColectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserColectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
