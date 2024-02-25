import { Component, OnInit } from '@angular/core';
import { UiService } from './my-code';

@Component({
  selector: 'app-page-web',
  templateUrl: './page-web.component.html',
  styleUrls: ['./page-web.component.scss']
})
export class PageWebComponent implements OnInit {
  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.initializePlugins();
  }
}
