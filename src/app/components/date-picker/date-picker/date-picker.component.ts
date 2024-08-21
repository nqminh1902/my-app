import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { Dayjs } from 'dayjs';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import * as dayjs from 'dayjs';
import { TimePeriod } from 'ngx-daterangepicker-material/daterangepicker.component';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxDaterangepickerMd],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  selected: {startDate: any, endDate: any};
  minDate = dayjs(new Date(2023, 0, 1));
  maxDate = dayjs(new Date(2025, 11, 31));
  
  //Xác định hướng mở của Date Range Picker
  @Input() opens: "left" | "right" | "center" = 'right'

  //Lịch luôn được hiển thị ngay cả khi không chọn khoảng thời gian.
  @Input() alwaysShowCalendars: boolean = true

  //Xác định hướng rơi xuống của Date Range Picker
  @Input() drops: "down" | "up" = "down"

  //Các lớp CSS để định dạng nút "Apply" và "Cancel".
  @Input() buttonClasses: string[] = ['btn', 'btn-sm']

  //Hiển thị dropdown để người dùng chọn tháng và năm.
  @Input() showDropdowns: boolean = true

  //Cho phép chọn một ngày duy nhất thay vì khoảng thời gian.
  @Input() singleDatePicker: boolean = false

  // Tự động áp dụng khoảng thời gian khi người dùng chọn một ngày, không cần bấm nút 
  @Input() autoApply: boolean = false

  // Đồng bộ hóa hai lịch (bắt đầu và kết thúc) khi điều hướng tháng.
  @Input() linkedCalendars: boolean = false

  // Cấu hình ngôn ngữ, định dạng ngày và các nhãn.
  @Input()
  locale = {
    format: 'DD/MM/YYYY', // Định dạng ngày tháng kiểu Việt Nam
      separator: ' - ',
      applyLabel: 'Áp dụng',
      cancelLabel: 'Hủy',
      fromLabel: 'Từ',
      toLabel: 'Đến',
      customRangeLabel: 'Tùy chỉnh',
      weekLabel: 'Tuần',
      daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
      monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 
                    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
      firstDay: 1  // Bắt đầu từ thứ 2
  }

  //Hiển thị range custom
  @Input()
  showCustomRangeLabel:boolean = true

  //Các khoảng thời gian nhanh để người dùng chọn.
  @Input()
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }

  constructor() {
    this.selected = { "startDate": "2015-11-18T00:00:00.000Z", "endDate": "2015-11-26T00:00:00.000Z" }
  }

  onDatesUpdated(range: TimePeriod) {
    const startDate = range.startDate?.toDate()
    const endDate = range.endDate?.toDate()
    console.log('Ngày được cập nhật:', range);
  }
}
