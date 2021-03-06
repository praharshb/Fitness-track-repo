import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { MessagesService } from './services/messages.service';
import { GameService } from './services/game.service';
import { LoginComponent } from './login/login.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { WorkoutComponent } from './workout/workout.component';
import { ProfileComponent } from './profile/profile.component';
import { MotivationComponent } from './motivation/motivation.component';
import { SearchusersComponent } from './searchusers/searchusers.component';
// import { SearchuserComponent } from './searchuser/searchuser.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessagesComponent,
    HomeComponent,
    GameComponent,
    LoginComponent,
    NutritionComponent,
    WorkoutComponent,
    ProfileComponent,
    MotivationComponent,
    SearchusersComponent,
    // SearchuserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'game', component: GameComponent },
        { path: 'login', component: LoginComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'nutrition', component: NutritionComponent },
        { path: 'workout', component: WorkoutComponent },
        { path: 'motivation', component: MotivationComponent },
        { path: 'searchusers', component: SearchusersComponent },
        // { path: 'searchuser', component: SearchuserComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [MessagesService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
