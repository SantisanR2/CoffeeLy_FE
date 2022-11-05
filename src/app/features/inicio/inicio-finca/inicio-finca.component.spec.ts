import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFincaComponent } from './inicio-finca.component';

describe('InicioFincaComponent', () => {
  let component: InicioFincaComponent;
  let fixture: ComponentFixture<InicioFincaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioFincaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioFincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
