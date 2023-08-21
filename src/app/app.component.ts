import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void{
    const firebaseConfig = {
      apiKey: "AIzaSyCcGYb7dJsQX6Y6TDoFDwllRVmLO9xvn2k",
      authDomain: "patrick-439f4.firebaseapp.com",
      projectId: "patrick-439f4",  
      databaseUrl: "https://patrick-439f4-default-rtdb.firebaseio.com/",
      storageBucket: "patrick-439f4.appspot.com",
      messagingSenderId: "367292247757",
      appId: "1:367292247757:web:3f59ed45c059850fd64384"
    };

    firebase.initializeApp(firebaseConfig);

  }
}
