import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLavadoComponent } from './create-lavado.component';

describe('CreateLavadoComponent', () => {
  let component: CreateLavadoComponent;
  let fixture: ComponentFixture<CreateLavadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLavadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLavadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
