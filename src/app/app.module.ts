import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { StarComponent } from './shared/star.component';
import { HeaderComponent } from './app/header/header.component';
import { LinkComponent } from './components/link/link.component';

const appRoutes: Routes = [
  { path: 'products-list', component: ProductListComponent },
  { path: 'about-us', component: WelcomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    StarComponent,
    HeaderComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas:   [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
