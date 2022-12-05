import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteEmpresaComponent } from './lote-empresa.component';

describe('LoteEmpresaComponent', () => {
  let component: LoteEmpresaComponent;
  let fixture: ComponentFixture<LoteEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoteEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
