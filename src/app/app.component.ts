import { AfterViewChecked, AfterViewInit, Component, ContentChild, ContentChildren, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { HighlightDirective } from './directive/hightligh/highlight.directive';
import { BaseTableComponent } from './base-table/base-table.component';
import { from, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
}
