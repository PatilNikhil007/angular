import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  priceing = { };

  constructor(private config : ConfigService) { }

  ngOnInit() {
    this.priceing = this.getPriceing();
  }

  getPriceing(){
    return this.config.getConfig().priceing;
  }

}
