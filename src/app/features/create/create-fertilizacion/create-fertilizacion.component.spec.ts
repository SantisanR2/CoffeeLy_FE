import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFertilizacionComponent } from './create-fertilizacion.component';

describe('CreateFertilizacionComponent', () => {
  let component: CreateFertilizacionComponent;
  let fixture: ComponentFixture<CreateFertilizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFertilizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFertilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
