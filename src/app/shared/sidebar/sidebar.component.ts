import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';


declare let mLayout: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    mLayout.initAside();

  }

}
