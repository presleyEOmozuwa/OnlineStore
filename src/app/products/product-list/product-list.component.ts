import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CourseInfo, CourseModel, Product } from 'src/app/interfaces/product.interface';
import { AppState } from 'src/app/store';
import { ProductService } from '../product.service';
import * as fromProductAction from '../state/product.actions';
import * as fromProductSelector from '../state/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit 
{
  
  p: number = 1;
  courses: CourseInfo[] = [];
  course: CourseInfo;
  productListUrl: string = "https://localhost:5001/api/course/items/products";
  constructor(private productService: ProductService, private store: Store<AppState>) { }

  ngOnInit(): void 
  {
    this.store.dispatch(fromProductAction.loadProducts({url: this.productListUrl}))
    this.store.pipe(select(fromProductSelector.selectAllProducts)).subscribe(data => 
      {

        data.forEach((p:any) => 
          {
            this.course = {
              courseId: p.id,
              courseName: p.name,
              description: p.description,
              image: p.images[0]
            }
            this.courses.push(this.course);
          });
      });
  }

}
