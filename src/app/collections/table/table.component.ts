import { Component ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  ngOnInit(): void {
   
  }
  @Input() classNames= '';
  @Input() data :any[]= [];
  @Input() headers:any[] = [];

}
