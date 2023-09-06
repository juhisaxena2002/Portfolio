// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare var $: any; // Import jQuery
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Enable the Bootstrap dropdown
    $(document).ready(function () {
      $('.dropdown-toggle').dropdown();
    });
  }
}
