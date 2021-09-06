import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-get-tag',
  templateUrl: './get-tag.component.html',
  styleUrls: ['./get-tag.component.scss']
})
export class GetTagComponent implements OnInit {
  getTag: HTMLMetaElement;


  constructor(private titleService: Title,  private meta: Meta) { }

  ngOnInit(): void {
    // remove element
    const authorTag = this.meta.getTag('name=description');
    this.getTag = authorTag;
    console.log('get - Tag :: ', authorTag)
  }
}
