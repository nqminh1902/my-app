import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseTableComponent } from './base-table/base-table.component';
import { HighlightDirective } from './directive/hightligh/highlight.directive';
import { ParentComponent } from './components/parent/parent/parent.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { DatePickerComponent } from './components/date-picker/date-picker/date-picker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
@NgModule({
  declarations: [
    AppComponent,
    BaseTableComponent,
  ],
  imports: [
    FormsModule,
    DatePickerComponent,
    BrowserModule,
    HighlightDirective,
    ParentComponent,
    NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
