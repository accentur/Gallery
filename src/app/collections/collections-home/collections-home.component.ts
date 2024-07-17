import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data:any[] = [

    { name: 'James', age: 22, job: 'Designer' },
    { name: 'James2', age: 23, job: 'Designer1' }

  ];

  headers:any[] = [

    { key: 'name', label: 'Names' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
    
  ];



}
