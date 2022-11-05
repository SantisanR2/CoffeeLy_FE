import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarOperariosComponent } from './administrar-operarios.component';

describe('AdministrarOperariosComponent', () => {
  let component: AdministrarOperariosComponent;
  let fixture: ComponentFixture<AdministrarOperariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarOperariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarOperariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
