import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-thumbnail',
  templateUrl: './feedback-thumbnail.component.html',
  styleUrls: ['./feedback-thumbnail.component.scss']
})
export class FeedbackThumbnailComponent implements OnInit {

  @Input() feed: any;
  constructor() { }

  ngOnInit() {
  }

}
