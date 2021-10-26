import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardGameListItemComponent } from './board-game-list-item/board-game-list-item.component';
import { BoardGameListComponent } from './board-game-list/board-game-list.component';
import { MaterialModule } from './material.module';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { UsersGamesComponent } from './users-games/users-games.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { BoardGameBorrowLogoComponent } from './board-game-borrow-logo/board-game-borrow-logo.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardGameListComponent,
    UsersGamesComponent,
    ProfileComponent,
    SearchComponent,
    BoardGameListItemComponent,
    MainbarComponent,
    BoardGameBorrowLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
