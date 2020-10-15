import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  result: any;
  constructor(private _http: HttpClient) {}


  getUsers() {
    console.log(this._http);
    return this._http.get("http://localhost:3001/api/users").pipe(
      map(result => {
        this.result = result
        console.log(this.result);
        return result
      })

    );
  }


  postUsers(obj) {
    console.log(this._http);
    return this._http.post("http://localhost:3001/api/users",obj).pipe(
      map(result => {
        this.result = result
        console.log(this.result);
        return result
      })
    );
  }


  delete(obj) {
    console.log(this._http);
    console.log(obj._id);
    return this._http.delete("http://localhost:3001/api/users" + '/' + obj._id).pipe(
      map(result => {
        this.result = result
        console.log(this.result,'deleted');
        return result
      })
    );
  }
}
