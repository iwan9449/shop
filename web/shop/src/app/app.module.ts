import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './layout/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import { ContentComponent } from './layout/content/content.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { ProductCategoriesComponent } from './admin-panel/product-categories/product-categories.component';
import { ProductsComponent } from './admin-panel/products/products.component';
import { EditProductCategoryComponent } from './admin-panel/edit-product-category/edit-product-category.component';
import { EditProductComponent } from './admin-panel/edit-product/edit-product.component';
import { OrdersComponent } from './admin-panel/orders/orders.component';
import { WarehouseItemsComponent } from './admin-panel/warehouse-items/warehouse-items.component';
import {ProductCategoryService} from "./shared/service/product-category.service";
import {ProductCategoriesResolve, ProductCategoryResolve} from "./shared/resolve/product-category.resolve";
import {ProductService} from "./shared/service/product.service";
import {ProductResolve, ProductsResolve} from "./shared/resolve/product.resolve";
import {DictionaryService} from "./shared/service/dictionary.service";
import {ProductCategoryDictionaryResolve, ProductDictionaryResolve} from "./shared/resolve/dictionary.resolve";
import {WarehouseItemService} from "./shared/service/warehouse-item.service";
import {WarehouseItemResolve, WarehouseItemsResolve} from "./shared/resolve/warehouse-item.resolve";
import {EditWarehouseItemComponent} from "./admin-panel/edit-warehouse-item/edit-warehouse-item.component";

@NgModule({
  declarations: [
    MainComponent,
    ContentComponent,
    AdminPanelComponent,
    HomeComponent,
    ProductCategoriesComponent,
    ProductsComponent,
    EditProductCategoryComponent,
    EditProductComponent,
    OrdersComponent,
    WarehouseItemsComponent,
    EditWarehouseItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    ProductCategoryService,
    ProductCategoriesResolve,
    ProductCategoryResolve,
    ProductService,
    ProductsResolve,
    ProductResolve,
    DictionaryService,
    ProductCategoryDictionaryResolve,
    ProductDictionaryResolve,
    WarehouseItemService,
    WarehouseItemsResolve,
    WarehouseItemResolve
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
