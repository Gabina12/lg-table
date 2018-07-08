import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lg-table',
  templateUrl: './lg-table.component.html',
  styleUrls: ['./lg-table.component.css']
})
export class LgTableComponent implements OnInit {


  @Input()
  get dataSource() {
    return this.dataSourceFull;
  }

  set dataSource(val) {
    this.dataSourceFull = val;
    this.dataSourceFilter = val;
  }

  @Input() colums: any[];

  dataSourceFull: any[];
  dataSourceFilter: any[];
  sortedColumns: any[] = [];

  selectedRow: any;
  sortColumn: any;
  isAsc: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectRow(row) {
    this.selectedRow = row;
  }

  sort(col) {
    if (!col.allowFilter) return;

    this.sortColumn = col;
    if (this.sortedColumns.find(x => x.name == col.name)) {
      this.sortedColumns.find(x => x.name == col.name).isAsc = !this.sortedColumns.find(x => x.name == col.name).isAsc;
      this.isAsc = !this.sortedColumns.find(x => x.name == col.name).isAsc;
    } else {
      this.sortedColumns.push({
        name: col.name,
        isAsc: true
      });
      this.isAsc = false;
    }
    this.sortData(col);
  }

  getIsAsc(col): boolean {
    let row = this.sortedColumns.find(x => x.name == col.name);
    return row ? row.isAsc : false;
  }

  sortData(col) {
    if (this.isAsc)
      this.dataSource = this.dataSource.sort((a, b) => 0 - (a[col.name] > b[col.name] ? -1 : 1));
    else
      this.dataSource = this.dataSource.sort((a, b) => 0 - (a[col.name] > b[col.name] ? 1 : -1));
  };

  Search(searchValue: string) {
    if(searchValue === '') {
       this.dataSourceFilter = this.dataSourceFull;
       return;
    }
    this.dataSourceFilter = this.dataSourceFull.filter(x=>x[this.colums[0].name] == searchValue);    
  }

}
