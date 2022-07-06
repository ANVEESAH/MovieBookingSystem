import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTheatreComponent } from './edit-theatre.component';

describe('EditTheatreComponent', () => {
  let component: EditTheatreComponent;
  let fixture: ComponentFixture<EditTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTheatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
