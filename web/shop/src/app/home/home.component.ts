import {Component, OnInit} from '@angular/core';
import {WarehouseItemModel} from "../shared/model/warehouse-item.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<WarehouseItemModel> = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.data['items']) {
      this.items = this.route.snapshot.data['items'];
    }
  }

  addToCart() {

  }

}
