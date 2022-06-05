import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseModel } from '../interfaces/product.interface';
import { ProductService } from '../products/product.service';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  item: CourseModel;
  shipping: number;
  totalBeforeTax: number;
  estimatedTax: number;
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.item = {
      courseId: null,
      priceId: null,
      price: 0,
      courseName: null,
      description: null,
      image: null
    };
    this.shipping = 0;
    this.totalBeforeTax = 0;
    this.estimatedTax = 0;
    this.getItem();
  }


  getItem() {
    const courseId = this.route.snapshot.paramMap.get('courseId');
    this.productService.getCourseById(courseId).subscribe(res => {
      Object.assign(this.item, res);
    });
  }

  checkOut(priceId: string) {
    this.orderService.requestSessionId(priceId);
  }

  goToItem(courseId: string) {
    this.router.navigate(['/products/view', courseId])
  }

}
