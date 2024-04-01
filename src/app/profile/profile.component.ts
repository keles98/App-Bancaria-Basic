import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import UserInfo from '../models/userInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  public userInfo: UserInfo | undefined;

  constructor(
    private userService: UserService
  )
  {}

  async ngOnInit(){
    await this.getInfoUser();
  }

  public getInfoUser(){
    this.userService.userProfile().subscribe({
      next: (data) => {
        this.userInfo = data;
        console.log(this.userInfo);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
