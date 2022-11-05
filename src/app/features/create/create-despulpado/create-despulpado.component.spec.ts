import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDespulpadoComponent } from './create-despulpado.component';

describe('CreateDespulpadoComponent', () => {
  let component: CreateDespulpadoComponent;
  let fixture: ComponentFixture<CreateDespulpadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDespulpadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDespulpadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
