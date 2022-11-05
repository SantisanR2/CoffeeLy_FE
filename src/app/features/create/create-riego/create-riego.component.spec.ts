import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRiegoComponent } from './create-riego.component';

describe('CreateRiegoComponent', () => {
  let component: CreateRiegoComponent;
  let fixture: ComponentFixture<CreateRiegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRiegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
