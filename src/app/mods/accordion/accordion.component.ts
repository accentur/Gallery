import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  onClick(_t5: number) {
  
    if (this.openItemIndex == _t5) {
      
      this.openItemIndex = -1;
    } else {
      
      this.openItemIndex = _t5;
    }

  
}
  
  

  @Input() items: any[] = [];
  
  openItemIndex = 0;

}
