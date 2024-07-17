import { Component,ElementRef, OnDestroy, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  
  @Output() close = new EventEmitter();

  onCloseClick() {
  
    this.close.emit();

}
  

  constructor(private el: ElementRef) {

  }
  ngOnDestroy(): void {

    this.el.nativeElement.remove();
  }

  ngOnInit(): void {

    document.body.appendChild(this.el.nativeElement);

    
  }

  

}
