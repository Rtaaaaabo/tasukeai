import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '@/tab-home/models/category';

@Component({
  selector: 'app-category-slide',
  templateUrl: './category-slide.component.html',
  styleUrls: ['./category-slide.component.scss'],
})
export class CategorySlideComponent implements OnInit {

  @Output() public emitChooseCategory: EventEmitter<Category> = new EventEmitter();

  categoryArrayNpo: Array<Category> = [
    { value: 0, name: 'テスト000' },
    { value: 1, name: 'テスト111' },
    { value: 2, name: 'テスト222' },
    { value: 3, name: 'テスト333' },
    { value: 4, name: 'テスト444' },
    { value: 5, name: 'テスト555' },
    { value: 6, name: 'テスト666' },
    { value: 7, name: 'テスト777' },
    { value: 8, name: 'テスト888' },
    { value: 9, name: 'テスト999' },
  ];

  constructor() { }

  ngOnInit() { }

  public onClickCategory(item: Category): void {
    this.emitChooseCategory.emit(item);
  }

}
