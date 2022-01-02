import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeneyimlerComponent } from './deneyimler.component';

describe('DeneyimlerComponent', () => {
  let component: DeneyimlerComponent;
  let fixture: ComponentFixture<DeneyimlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeneyimlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeneyimlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
