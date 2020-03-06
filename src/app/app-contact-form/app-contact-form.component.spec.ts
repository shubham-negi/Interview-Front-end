import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactFormComponent } from './app-contact-form.component';

describe('AppContactFormComponent', () => {
  let component: AppContactFormComponent;
  let fixture: ComponentFixture<AppContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
