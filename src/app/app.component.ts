import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {DataService} from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title;
  id;
  thumbnailUrl;
  totalRecords: Number;
  page: Number = 1;
  urll = 'https://jsonplaceholder.typicode.com/photos';
  data;
  startIndex = 0;
  endIndex = 10;

  getArray(length) {
    return new Array(length.length / 10);
  }
  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 10;
    this.endIndex = this.startIndex + 10;
  }
  constructor(private http: HttpClient,private _dataService: DataService) {
    this.http.get(this.urll).subscribe((res) => {
      this.data = res;
      console.log(this.data.length);
      this.totalRecords = this.data.length;
    });
    this._dataService.getUsers()
      .subscribe(res => {
        this.users = res
        this.dataa = this.users.data
        console.log('hi');

        console.log(this.users);
      })
  }

  dataa
  users
  delet(obj) {
    this._dataService.delete(obj).subscribe((posts) => {
      console.log(posts);
    })
  }

}
