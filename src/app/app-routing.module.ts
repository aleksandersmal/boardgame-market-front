import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardGameListComponent } from './board-game-list/board-game-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { UsersGamesComponent } from './users-games/users-games.component';

const routes: Routes = [
  { path: 'game-list', component: BoardGameListComponent},
  { path: 'your-games', component: UsersGamesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'games-search', component: SearchComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
