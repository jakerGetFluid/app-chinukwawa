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
  catInfo: any;

  constructor(private route: ActivatedRoute, public dataService: DataService, private _location: Location) { }

  ngOnInit() {
    // get this category info
    const catId = this.route.snapshot.paramMap.get('slug');

    this.dataService.getCategoryName(catId).subscribe((catData: any) => {
      this.catInfo = catData.name;
    });

    this.dataService.getWordsInCategory(catId).subscribe((data: any[]) => {
      this.catPosts = data;
    });
  }

  // back button
  backClicked() {
    this._location.back();
  }

  // toggle between list and slider view
  timesClicked = 0;
  viewToggle = false;
  togglerText = "<ion-icon name='list-box'></ion-icon> &nbsp; List View";
  iconToggler = "list";
  viewToggler() {
    this.timesClicked++;
    if(this.timesClicked % 2 == 0) {
      // show list view
      this.viewToggle = false;
      this.togglerText = "<ion-icon name='list-box'></ion-icon> &nbsp; List View";
      this.iconToggler = "list";
    } else {
      // show slider view
      this.viewToggle = true;
      this.togglerText = "<ion-icon name='albums'></ion-icon> &nbsp; Slide View";
      this.iconToggler = "albums";
    }
  }
}
