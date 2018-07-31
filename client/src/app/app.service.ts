import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
  })
};

@Injectable()
export class AppService  {
  API_URL  =  'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  public getTags() :  Observable<any> {
    return this.httpClient.get(`${this.API_URL}/api/v0/todos/tags`);
  }

  public getItems(hash = null)  : Observable<any>{
    let url = `${this.API_URL}/api/v0/todos/items`
    if (hash != null && hash != undefined)
      url += `?hash=${hash}`;
    return this.httpClient.get(url);

  }

  public addItem(item: any)  {
    return this.httpClient.post(`${this.API_URL}/api/v0/todos/item/`, item, httpOptions);
  }

   public deleteItem(item: any) : Observable<any>{
     let url = `${this.API_URL}/api/v0/todo/item/${item.id}`;
    return this.httpClient.delete(url, httpOptions);
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



