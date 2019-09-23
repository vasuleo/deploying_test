import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'firstproject',
  templateUrl: './firstproject.component.html',
  styleUrls: ['./firstproject.component.css'],

})
export class FirstprojectComponent implements OnInit {
  firstname = "welcome";
  form = new FormGroup({
    username: new FormControl(),
    passwordd: new FormControl()
  })
  submit(f: any) {
    
    console.log(f.username);
    console.log(f.password);
  }
  log(x: any) {
    // console.log(x);
  }
  constructor() { }

  ngOnInit() {
  }

}
