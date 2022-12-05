import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarFincasComponent } from './administrar-fincas.component';

describe('AdministrarFincasComponent', () => {
  let component: AdministrarFincasComponent;
  let fixture: ComponentFixture<AdministrarFincasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarFincasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarFincasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
