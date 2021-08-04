import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  constructor(public users: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.users.getUsers().subscribe((results) => {
      this.users.userData = results['data'];
    })
  }

  userDetails(id: number) {
    this.router.navigate(['users-details', id])
  }

  deleteUser(id: number) {
    let selectedIndex = this.getIndexOfSelectedUser(id);
    if (selectedIndex > -1) {
      this.users.userData.splice(selectedIndex, 1)
    }
  }

  getIndexOfSelectedUser(id: number): number {
    let selectedIndex = -1;
    this.users.userData.findIndex((item, index) => {
      if (item.id === id) {
        selectedIndex = index;
      }
    })
    return selectedIndex;
  }
}
