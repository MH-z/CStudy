import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deneyimler',
  templateUrl: './deneyimler.component.html',
  styleUrls: ['./deneyimler.component.scss']
})
export class DeneyimlerComponent implements OnInit {

  constructor() { }

  @Input() deneyim :any= {};

  ngOnInit(): void {
  }

}
