import {ProductModel} from "./product.model";

export class WarehouseModel {
  id: number = null;
  price: number = null;
  quantity: number = null;
  product: ProductModel = new ProductModel();
}
