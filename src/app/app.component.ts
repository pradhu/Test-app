import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Rage Employee Portal';
  imageSrc = ('assets/images/logo.png');
  constructor(private router: Router) { }
  ngOnInit() {
  }

public gotoLoginDetailsV2(url) {

}
}