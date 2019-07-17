import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  items: any[];

  constructor(private route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit() {
    const itemSlug = this.route.snapshot.paramMap.get('slug');
    this.dataService.getPostBySlug(itemSlug).subscribe((data: any[]) => {
      this.items = data;
      console.log('ngOnInit() > items: %o', this.items);
    });
  }

}
