import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';


declare let mLayout: any;
@Component({
  selector: 'app-quick-sidebar',
  templateUrl: './quick-sidebar.component.html',
  encapsulation: ViewEncapsulation.None,

})
export class QuickSidebarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    mLayout.initAside();

  }

}
