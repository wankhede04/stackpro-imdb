import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'detail', component: MovieDetailComponent },
  { path: 'details', component: MovieDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upcoming', component: UpcomingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
