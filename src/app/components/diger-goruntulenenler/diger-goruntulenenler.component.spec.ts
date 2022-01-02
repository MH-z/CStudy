import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigerGoruntulenenlerComponent } from './diger-goruntulenenler.component';

describe('DigerGoruntulenenlerComponent', () => {
  let component: DigerGoruntulenenlerComponent;
  let fixture: ComponentFixture<DigerGoruntulenenlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigerGoruntulenenlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigerGoruntulenenlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
