import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  modal = false;

  items = [
    {
      title:'title1', content:'aaaaa'
    },{
      title:'title2', content:'bbbbb'
    },{
      title:'title3', content:'ccccc'
    }
  ];

onClick() {
  this.modal = !this.modal;
}

}
