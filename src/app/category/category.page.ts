import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  
  catPosts: any[];

  constructor(private route: ActivatedRoute, public dataService: DataService, private _location: Location) { }

  ngOnInit() {
    const catId = this.route.snapshot.paramMap.get('slug');

    const catName = this.dataService.getCategoryName(catId);
    console.log(catName);

    this.dataService.getWordsInCategory(catId).subscribe((data: any[]) => {
      this.catPosts = data;
      console.log('ngOnInit() > posts in cat: %o', this.catPosts);
    });
  }

  backClicked() {
    this._location.back();
  }

}
