import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public selectedUser;
  constructor(private acitvatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    const selectedUserId = this.acitvatedRoute.snapshot.params['id']
    this.selectedUser = this.userService.userData.filter((item) => {
      return item.id == selectedUserId;
    })
    this.selectedUser = this.selectedUser[0];
  }
}
