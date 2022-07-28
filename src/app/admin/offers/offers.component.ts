import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  @Input() offers: Array<any> = [];
  @Output() selectedOffer: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitSelectedOffer(offerId: number) {
    this.selectedOffer.emit(offerId);
  }

}
