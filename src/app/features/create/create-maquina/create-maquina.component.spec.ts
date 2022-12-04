import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaquinaComponent } from './create-maquina.component';

describe('CreateMaquinaComponent', () => {
  let component: CreateMaquinaComponent;
  let fixture: ComponentFixture<CreateMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMaquinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
