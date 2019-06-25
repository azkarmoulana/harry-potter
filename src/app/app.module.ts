import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { NavComponent } from './shared/nav/nav.component';
import { BooksComponent } from './books/books.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';
import { HousesComponent } from './houses/houses.component';


const appRoutes: Routes = [
  { path:'', component: BooksComponent},
  { path:'characters', component: CharactersComponent},
  { path:'staff', component: StaffComponent},
  { path:'students', component: StudentsComponent},
  { path:'houses', component: HousesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    StaffComponent,
    StudentsComponent,
    HousesComponent,
    NavComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
