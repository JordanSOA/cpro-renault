import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api
    .getProfile()
    .subscribe((user: User | boolean) => {
      if (user) {
        this.user = user as User;
      } else {
        return this.router.navigate(['/not-found']);
      }
    });
  }

}
