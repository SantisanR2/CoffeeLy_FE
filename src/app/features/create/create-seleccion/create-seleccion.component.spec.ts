import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeleccionComponent } from './create-seleccion.component';

describe('CreateSeleccionComponent', () => {
  let component: CreateSeleccionComponent;
  let fixture: ComponentFixture<CreateSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSeleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
