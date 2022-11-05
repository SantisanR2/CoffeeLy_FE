import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCosechaComponent } from './create-cosecha.component';

describe('CreateCosechaComponent', () => {
  let component: CreateCosechaComponent;
  let fixture: ComponentFixture<CreateCosechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCosechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCosechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
