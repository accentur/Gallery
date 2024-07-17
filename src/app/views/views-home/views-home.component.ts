import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {


  stats = [{ value: 22, label: '# of Users' },
    { value: 43, label: '# of Users' },
    { value: 13, label: '# of Users' }
  ]

  items = [{ 

    images:'assets/a.png', title:'Durga', description:'Maa Durga'
  }, {images:'assets/ab.jpg', title:'Couch', description:'This is couch'}]

}
