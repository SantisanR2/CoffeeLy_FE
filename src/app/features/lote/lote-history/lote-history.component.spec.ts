import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteHistoryComponent } from './lote-history.component';

describe('LoteHistoryComponent', () => {
  let component: LoteHistoryComponent;
  let fixture: ComponentFixture<LoteHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoteHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
