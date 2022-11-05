import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarRecolectoresComponent } from './administrar-recolectores.component';

describe('AdministrarRecolectoresComponent', () => {
  let component: AdministrarRecolectoresComponent;
  let fixture: ComponentFixture<AdministrarRecolectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarRecolectoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarRecolectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
