import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

const ENDPOINT_URL = environment.endpointURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
