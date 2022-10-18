import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-attendance-filter',
  templateUrl: './attendance-filter.component.html',
  styleUrls: ['./attendance-filter.component.css']
})
export class AttendanceFilterComponent implements OnInit {
  enterFilterValue!: string;
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  filterChange = new EventEmitter<string>();

  filterValueChange() {
    this.filterChange.emit(this.enterFilterValue);
    console.log(this.enterFilterValue);
  }
}
