import { Component, Input, OnInit } from '@angular/core';
import { ModalEgitimComponent } from '../modal-egitim/modal-egitim.component';

@Component({
  selector: 'app-egitim',
  templateUrl: './egitim.component.html',
  styleUrls: ['./egitim.component.scss']
})
export class EgitimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() egitim : any = {};
}
