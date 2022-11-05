import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecadoComponent } from './create-secado.component';

describe('CreateSecadoComponent', () => {
  let component: CreateSecadoComponent;
  let fixture: ComponentFixture<CreateSecadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSecadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSecadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
