import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Product } from 'src/app/interfaces/product'
import { ProductService } from 'src/app/services/product.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    products: Product[] = []
    title: String = 'Computer Brand'
    isOpen: Boolean = false
    modal() {
        this.isOpen = !this.isOpen
    }
    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe((products) => {
            this.products = products
        })
    }

    onDeleteProduct(id: string) {
        this.productService.deleteProduct(id).subscribe((product) => {
            this.products = this.products.filter((x) => x.id !== id)
        })
    }

    onUpdateProduct(product: Product) {
        this.productService.updateProduct(product).subscribe((product) => {
            this.products = this.products.map((x) => (x.id === product.id ? product : x))
        })
    }
    onAddProduct(product: Product) {
        this.productService.addProduct(product).subscribe((product) => {
            this.products.push(product)
        })
    }
}
