import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response;
      })
  }
  //creatPost( input : HTMLInputElement){
  // console.log(input+"its working")
  //}

}

