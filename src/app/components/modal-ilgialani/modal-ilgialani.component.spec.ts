import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIlgialaniComponent } from './modal-ilgialani.component';

describe('ModalIlgialaniComponent', () => {
  let component: ModalIlgialaniComponent;
  let fixture: ComponentFixture<ModalIlgialaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIlgialaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIlgialaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
