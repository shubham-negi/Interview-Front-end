import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackThumbnailComponent } from './feedback-thumbnail.component';

describe('FeedbackThumbnailComponent', () => {
  let component: FeedbackThumbnailComponent;
  let fixture: ComponentFixture<FeedbackThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
