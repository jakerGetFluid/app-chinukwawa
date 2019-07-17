import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';

const ENDPOINT_URL = environment.endpointURL;

@Injectable({
    providedIn: 'root'
})
export class DataService {

    items: any[];
    categories: any[];
    postsInCat: any[];
    thisCatId = null;
    thisWord: any[];

    constructor(private http: HttpClient) {
    }

    /**
     * Gets a page of posts or all posts formerly fetched
     */
    getWords(): any {
        if (this.items) {
            // The of operator accepts a number of items as parameters, and returns an Observable that emits each of
            // these parameters, in order, as its emitted sequence. In this case, we will only be returning this.items
            // to any subscriber.
            return of(this.items);
        } else {
            // http.get() creates an observable.
            // map() creates and returns its own new observable from the observable that http.get() created,
            // which we can then subscribe to. Therefore, we can subscribe to the result of this method.
            //
            // The Map operator applies a function of your choosing to each item emitted by the source Observable, and
            // returns an Observable that emits the results of these function applications.
            return this.http.get(ENDPOINT_URL + 'wp/v2/words').map(this.processPostData, this);
        }
    }
    // A place for post-processing, before making the fetched data available to view.
    processPostData(data: any[]) {
        // Do post-processing code here (if useful)
        this.items = data;
        return this.items;
    }

    /**
     * Gets all word categories
     */
    getWordCategories(): any {
        if (this.categories) {
            return of(this.categories);
        } else {
            return this.http.get(ENDPOINT_URL + 'wp/v2/word-categories').map(this.processCategoryData, this);
        }
    }
    processCategoryData(data: any[]) {
        this.categories = data;
        return this.categories;
    }

    getCategoryBySlug(slug): any {
        return this.categories.find(category => category.slug === slug);
    }

    /**
     * Gets all words in the category
     */
    getWordsInCategory(slug): any {
        return this.http.get(ENDPOINT_URL + 'wp/v2/words?word-categories=' + slug).map(this.processCategoryPosts, this);
    }
    processCategoryPosts(data: any[]) {
        this.postsInCat = data;
        return this.postsInCat;
    }

    getCategoryName(id): any {
        if (this.categories) {
            console.log(this.categories);
        }
    }

    /**
    * Gets word by slug
    */
    getPostBySlug(slug): any {
        // original tutorial way (throws an error) :
        // return this.items.find(item => item.slug === slug);

        // custom way:
        if (this.thisWord) {
            return of(this.thisWord);
        } else {
            console.log('wp/v2/words?slug=' + slug);
            console.log(this.http.get(ENDPOINT_URL + 'wp/v2/words?slug=' + slug));
            return this.http.get(ENDPOINT_URL + 'wp/v2/words?slug=' + slug);
        }
    }
    processPost(data: any[]) {
        console.log('test');
        this.thisWord = data;
        console.log(this.thisWord);
        return this.thisWord;
    }
}