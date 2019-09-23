import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  //creating a variable
   authors: any;

   //calling a AuthorsService whic is created
  constructor(server: AuthorsService) {                      
    console.log("Authors inisde")
    //calling a method to access a value from that method and storing it in authors(this.authors)
      this.authors = server.getmethod();
      console.log(this.authors);
   }

  ngOnInit() {
  }

}
