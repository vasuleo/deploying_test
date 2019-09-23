import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'environement-test',
  templateUrl: './environement-test.component.html',
  styleUrls: ['./environement-test.component.css']
})
export class EnvironementTestComponent implements OnInit {

bc = environment.ngc



  constructor() {
    console.log(this.bc)
   }

  ngOnInit() {
  }

}
