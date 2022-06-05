import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from 'src/app/interfaces/product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-added-to-cart',
  templateUrl: './added-to-cart.component.html',
  styleUrls: ['./added-to-cart.component.css']
})
export class AddedToCartComponent implements OnInit {
  
  courseId: string;
  course: CourseModel;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.course = {
      courseId: null,
      courseName: null,
      priceId: null,
      price: 0,
      description: null,
      image: null
    }
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.getItemModel();
  }

  getItemModel() {
    this.productService.getCourseById(this.courseId).subscribe(res => {
      Object.assign(this.course, res);
     /*  this.course.courseId = res.courseId;
      this.course.priceId = res.priceId;
      this.course.price = res.price;
      this.course.courseName = res.courseName;
      this.course.description = res.description;
      this.course.image = res.image; */
    });
  }


}
