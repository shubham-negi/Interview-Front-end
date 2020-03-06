import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceIconComponent } from './service-icon/service-icon.component';
import { FeedbackThumbnailComponent } from './feedback-thumbnail/feedback-thumbnail.component';


@NgModule({
  declarations: [
    ServiceIconComponent,
    FeedbackThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ServiceIconComponent,
    FeedbackThumbnailComponent
  ],
  providers: []
})
export class SharedModule { }
