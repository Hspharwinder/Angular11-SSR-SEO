import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTagComponent } from './get-tag.component';

describe('GetTagComponent', () => {
  let component: GetTagComponent;
  let fixture: ComponentFixture<GetTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
