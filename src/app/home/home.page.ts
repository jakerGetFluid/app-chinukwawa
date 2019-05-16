import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    items: any[];
    categories: any[];
    constructor(public dataService: DataService) {
    }
    ngOnInit() {
        this.dataService.getWords().subscribe((data: any[]) => {
            this.items = data;
            console.log('ngOnInit() > items: %o', this.items);
        });
        this.dataService.getWordCategories().subscribe((data: any[]) => {
            this.categories = data;
            console.log('ngOnInit() > categories: %o', this.categories);
        });
    }

    text = 'Default starting text';

    onChangeText() {
      this.text = 'Changed!';
    }
}