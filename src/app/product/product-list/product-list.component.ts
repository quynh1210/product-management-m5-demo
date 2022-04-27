import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'flower',
      price: 23000,
      description: 'so beautiful'
    },
    {
      id: 2,
      name: 'cake',
      price: 22000,
      description: 'so sweet'
    },
  ];
  isShowCreatedForm = false;
  isShowEditedForm = false;
  currentProduct: Product = {};

  constructor() {
  }

  changeState() {
    this.isShowCreatedForm = !this.isShowCreatedForm;
  }

  changeStateEditForm(product) {
    this.isShowEditedForm = !this.isShowEditedForm;
    this.currentProduct = product;
  }

  ngOnInit() {
  }

  editProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
        break;
      }
    }
    this.products[index] = product;
  }
}
