import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-icon',
  templateUrl: './service-icon.component.html',
  styleUrls: ['./service-icon.component.scss']
})
export class ServiceIconComponent implements OnInit {

  @Input()
  service: any;

  constructor() { }

  ngOnInit() {
  }

}
