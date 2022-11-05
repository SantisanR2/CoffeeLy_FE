import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFermentacionComponent } from './create-fermentacion.component';

describe('CreateFermentacionComponent', () => {
  let component: CreateFermentacionComponent;
  let fixture: ComponentFixture<CreateFermentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFermentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFermentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
