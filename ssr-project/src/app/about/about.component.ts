import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title,  private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("About Component");
    this.meta.updateTag({name: 'keywords', content: 'About Component'});
    this.meta.updateTag({name: 'description', content: 'You can set second arugment string of attribute selector for update this meta tag.'}, 'name="description"');
  }

}
