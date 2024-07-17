import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PLaceholderComponent {

  @Input() header = true;
  @Input() lines = 3;
  constructor(){}

}
