import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FirstprojectComponent } from './firstproject/firstproject.component';
import { AuthorsComponent } from './authors/authors.component';
import { EnvironementTestComponent } from './environement-test/environement-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FirstprojectComponent,
    AuthorsComponent,
    EnvironementTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                              
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
