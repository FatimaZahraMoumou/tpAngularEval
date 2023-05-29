import { Component } from '@angular/core'
import { Product } from './interfaces/product'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor() {}
}
