import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'users-list',
    component: UsersListComponent,
    data: { title: 'Users List' }
  },
  {
    path: 'users-details/:id',
    component: UserComponent,
    data: { title: 'Users Details' }
  },
  {
    path: '',
    redirectTo: '/users-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
