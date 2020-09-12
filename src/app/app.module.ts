import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieDetailComponent,
    MovieDetailsComponent,
    RegisterComponent,
    UpcomingComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
