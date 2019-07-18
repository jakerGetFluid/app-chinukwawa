import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesPageModule'
  },
  {
    path: 'word-categories/:slug',
    loadChildren: './category/category.module#CategoryPageModule'
  },
  {
    path: 'word/:slug',
    loadChildren: './post/post.module#PostPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
