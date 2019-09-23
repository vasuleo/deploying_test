import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
//aftering creating a service go to the app.model.ts in that file type class name of the services(AuthorsService) in a providers[]

//creating a method and returning a value
  getmethod(){
    return ["authore1","authore2","authore3"]
  }
  
}
