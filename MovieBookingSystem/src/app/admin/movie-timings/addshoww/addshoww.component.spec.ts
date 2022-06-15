import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshowwComponent } from './addshoww.component';

describe('AddshowwComponent', () => {
  let component: AddshowwComponent;
  let fixture: ComponentFixture<AddshowwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshowwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshowwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
