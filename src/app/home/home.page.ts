import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    items: any[];
    text = 'Learn More';

    constructor(public dataService: DataService) {
    }
    ngOnInit() {
        this.dataService.getWords().subscribe((data: any[]) => {
          this.items = data;
          console.log('ngOnInit() > items: %o', this.items);
        });
    }

}