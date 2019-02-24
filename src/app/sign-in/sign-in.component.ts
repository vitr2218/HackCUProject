import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

declare const $;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email = '';
  password = '';
  user;
  constructor() { }

  ngOnInit() {
    
  }

  public signIn() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).then(() => {
      return firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          $('#myModal').modal('toggle');
          this.user = user.user;
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  }

  public signOut() {
    firebase.auth().signOut().then(() => {
      this.user = null;
    })
  }

}
