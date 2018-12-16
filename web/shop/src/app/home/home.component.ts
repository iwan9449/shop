import {Component, OnInit} from '@angular/core';
import {WarehouseItemModel} from "../shared/model/warehouse-item.model";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../shared/service/cart.service";
import {CartItemModel} from "../shared/model/cart-item.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<WarehouseItemModel> = [];
  constructor(private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit() {
    if (this.route.snapshot.data['items']) {
      this.items = this.route.snapshot.data['items'];
    }
  }

  addToCart(item: WarehouseItemModel) {
    let shoppingCartItem = new CartItemModel(item, 1);
    this.cartService.addItem(shoppingCartItem);
  }

  isInCart(warehouseId: number): boolean {
    return this.cartService.containsItem(warehouseId);
  }

}
