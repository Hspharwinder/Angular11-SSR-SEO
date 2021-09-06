import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title,  private meta: Meta) {
  }

  title = 'APP Component';
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({name: 'Extra', content: 'This is extra tag'});
    this.meta.addTag({name: 'descriptionExtra', content: 'descriptionExtra'});
  }

}
