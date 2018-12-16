import {WarehouseItemModel} from "./warehouse-item.model";

export class CartItemModel {
  quantity: number = 0;
  warehouseItem: WarehouseItemModel = new WarehouseItemModel();

  public constructor(warehouseItem: WarehouseItemModel, quantity: number) {
    this.quantity = quantity;
    this.warehouseItem = warehouseItem;
  }

}
