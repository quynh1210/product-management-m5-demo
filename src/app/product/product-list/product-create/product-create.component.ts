import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};



  constructor() {
  }

  ngOnInit() {
  }
  createProduct(productForm) {
    console.log(productForm.value);
  }

}
