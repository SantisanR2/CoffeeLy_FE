import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarMaquinasComponent } from './administrar-maquinas.component';

describe('AdministrarMaquinasComponent', () => {
  let component: AdministrarMaquinasComponent;
  let fixture: ComponentFixture<AdministrarMaquinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarMaquinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
