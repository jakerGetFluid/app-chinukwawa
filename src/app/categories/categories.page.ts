import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any[];

  constructor(private route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getWordCategories().subscribe((data: any[]) => {
      this.categories = data;
      console.log('ngOnInit() > categories: %o', this.categories);
    });
  }

}
