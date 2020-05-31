import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

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
  constructor(private http: HttpClient) {
    this.http.get(this.urll).subscribe((res) => {
      this.data = res;
      console.log(this.data.length);
      this.totalRecords = this.data.length;
    });
  }
}
