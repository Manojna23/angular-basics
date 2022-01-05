import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "./product";

@Component({
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{

    pageTitle: string = 'Product Detail';
    product: IProduct | undefined;
    
    constructor(private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.pageTitle += `: ${id}`;
        this.product = {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          };
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

}