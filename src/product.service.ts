import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Model } from './app/Model/model';

@Injectable()
export class ProductService {

api = 'https://5e7f74f57a92ed0016560686.mockapi.io/product';

  constructor(
    private http: HttpClient
  ) { }
getProduct(): Observable<Model[]>{
 return this.http.get<Model[]>(this.api);
}
}