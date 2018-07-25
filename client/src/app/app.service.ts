import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



@Injectable()
export class AppService {
  constructor(private http: HttpClientModule, private router: Router) {
  }

  public getTags() : Observable<any> {
    return // this.http .get(``).map(this.extractData).catch(e => this.handleError(e));
  }

  //
  //
  // private extractData(res: Response) {
  //   const replaceDate = (item: Object) => {
  //     for (let key in item) {
  //       if (item.hasOwnProperty(key) && item[key]) {
  //         if (typeof item[key] == 'object') {
  //           replaceDate(item[key]);
  //         }
  //         if (typeof item[key] == 'string' && item[key].match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[A-Z]?$/)) {
  //           item[key] = new Date(item[key]);
  //         }
  //       }
  //     }
  //   }
  //   let body = res.json();
  //   replaceDate(body);
  //   return body;
  // }
  //
  // private handleError(e: any): Observable<any> {
  //   if (e.status == 401)
  //     this.router.navigate(['/login']);
  //   else if (e.json() && e.json().error) {
  //     Messenger().post({
  //       message: e.json().error,
  //       type: 'error',
  //       showCloseButton: true
  //     });
  //   }
  //   return new Observable(observer => {
  //     observer.next(null);
  //     observer.complete();
  //   });
  // }
}
