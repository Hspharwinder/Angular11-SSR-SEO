import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title,  private meta: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Contact Component");
    this.meta.addTag({name: 'keywords', content: 'Contact Component'});
    this.meta.addTag({name: 'description', content: 'Contact Component'});
    this.meta.addTag({name: 'author', content: 'Contact Component'});
    this.meta.addTag({ name: 'robots', content: 'Component, Contact' });

    // set multiple tag
    this.meta.addTags([
      { name: 'tag1', content: 'tag1 Component' },
      { name: 'tag2', content: 'tag2 Component' },
      { name: 'tag3', content: 'tag3 Component' }
    ]);
  }


}
