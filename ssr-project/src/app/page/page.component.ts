import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private titleService: Title,  private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("page Component");
    this.meta.removeTag('name=keywords');
    this.meta.removeTag('description');

    // remove element
    const authorTag = this.meta.getTag('name=tag1');
    this.meta.removeTagElement(authorTag);
  }

}
