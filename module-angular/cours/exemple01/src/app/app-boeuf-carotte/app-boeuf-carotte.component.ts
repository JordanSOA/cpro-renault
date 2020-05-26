import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-boeuf-carotte',
  templateUrl: './app-boeuf-carotte.component.html',
  styleUrls: ['./app-boeuf-carotte.component.css']
})
export class AppBoeufCarotteComponent implements OnInit {

  constructor() { }

  // https://angular.io/guide/lifecycle-hooks
  /**
   * Initialize the directive/component after Angular first displays the
   * data-bound properties and sets the directive/component's input properties.
   * Called once, after the first ngOnChanges().
   */
  ngOnInit(): void {
  }

}
