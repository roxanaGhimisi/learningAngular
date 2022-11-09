import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List!";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  _listFilter: string;
 // get the value (input value)
  get listFilter(): string {
    return this._listFilter;
  }

// when the user modifies the value
// data binding calls the seter passing in the changed value
  set listFilter(value:string){
    this._listFilter = value;
    // set the filteredProducts array to the filterList of products
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

// specify the service as a dependency
// use a constructor parameter "productService"
  constructor(private productService: ProductService) {} // class const. - function executed when the componnet is first initialized


// performFilter method to compare the input value with our listOfProducts
// and return the new filteredProducts array
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toogleImage(): void {
    this.showImage = !this.showImage;
  }

  // ngOnInit(): void {
  //   console.log('In on init');
  //   //service is injected when the Component is instaintiated
  //    //getProducts method called from the product service
  //   this.products = this.productService.getProducts();
  //   //default list filteredProducts values
  //   this.filteredProducts = this.products;
  // }


  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err  => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
