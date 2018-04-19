import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

declare let mLayout: any;
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    mLayout.initHeader();

}

}
