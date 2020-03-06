import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  socialLinks: any;

  constructor() {
    /* initializes the list with social media references */
    this.socialLinks = [
      { alt: 'facebook logo', src: 'https://facebook.com', logo: '../../assets/icons/icon-fb.png' },
      { alt: 'twitter logo', src: 'https://twitter.com', logo: '../../assets/icons/icon-twtr.png' },
      { alt: 'linkedin logo', src: 'https://linkedin.com', logo: '../../assets/icons/icon-ln.png' },
      { alt: 'email logo', src: 'mailto:shubhamnegi.singh882@gmail.com', logo: '../../assets/icons/icon-mail.png' },
    ];
  }

  ngOnInit() {
  }

}
