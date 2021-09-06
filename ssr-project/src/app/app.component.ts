import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title,  private meta: Meta) {
  }

  title = 'APP Component';
  ngOnInit() {
    this.titleService.setTitle(this.title);
    // this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project'});
    // this.meta.addTag({name: 'description', content: 'Angular project training on rsgitech.com'});
    // this.meta.addTag({name: 'author', content: 'rsgitech'});
    // this.meta.addTag({name: 'robots', content: 'index, follow'});
  }

  setMetaTag() {
    this.ngOnInit();
  }
}
