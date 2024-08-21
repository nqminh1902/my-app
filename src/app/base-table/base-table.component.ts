import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements AfterContentInit, AfterViewInit {
  ngAfterViewInit(): void {
    
  }
  ngAfterContentInit(): void {
  }
  @Input() data?: any[] = [
    {name: "Minh"}
  ]
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;
  @ContentChild('name') name?: ElementRef<any>

}
