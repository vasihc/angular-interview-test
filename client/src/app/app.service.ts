import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from "rxjs/index";

@Injectable()
export class AppService  {
  API_URL  =  'http://localhost:8000';
  mellowness: number = 46;
  tagsCount: number;
  range: number = 255 - this.mellowness;

  getColorByIndex(index: number): string {
    let x = (2 * this.range / (this.tagsCount - 1)) * index;
    let red = x >= this.range ? 255 : this.mellowness + x;
    let green = x > this.range ? 255 - x + this.range : 255;
    let blue = this.mellowness;
    return this.rgbToHex(red, green, blue);
  }

  private componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  constructor(private httpClient: HttpClient) {
  }

  public getTags() :  Observable<any> {
   // return this.httpClient.get(`${this.API_URL}/api/v0/todos/tags`);
    let subject = new Subject<any>();

    subject.next({
      "items": {
        "1": "#низкий приоритет",
        "2": "#средний приоритет",
        "3": "#высокий приоритет",
        "4": "#АЛЯРМ!!!"
      }
    });
    return subject.asObservable();

  }

  public getItems()  : Observable<any[]>{
    let subject = new Subject<any[]>();

    subject.next([{id:0, tag:0, contetnt: "Todo1"},{id:0, tag:0, contetnt: "Todo1"}]);
    return subject.asObservable();
//todo
    //todo get and get again
   // return this.httpClient.get(`${this.API_URL}/api/v0/todos/items`).map(this.extract).catch(e => this.handleError(e));

  }

  public addItem(item: any)  {
    //return this.httpClient.post<any>(`${this.API_URL}/api/v0/todos/item`, item).map(this.extract).catch(e => this.handleError(e));
  }

   public deleteItem(id: number) : Observable<boolean>{
     let subject = new Subject<boolean>();

     subject.next(true);
     return subject.asObservable();
   // const url = `${this.API_URL}/api/v0/todos/item/${id}`;
   // return this.httpClient.delete(url).map(this.extract).catch(e => this.handleError(e));
  }

  private extract(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(e: any) {
   if (e.json() && e.json().error) {
     console.log(e.json().error)
    }
    return new Observable(observer => {
      observer.next(null);
      observer.complete();
    });
  }
}
