import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteEditComponent } from './lote-edit.component';

describe('LoteEditComponent', () => {
  let component: LoteEditComponent;
  let fixture: ComponentFixture<LoteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
