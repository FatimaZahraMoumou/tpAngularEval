import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Product } from 'src/app/interfaces/product'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private apiUrl = 'http://localhost:3000/ProductCollection'

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl)
    }

    getProduct(id: string): Observable<Product> {
        const url = `${this.apiUrl}/${id}`
        return this.http.get<Product>(url)
    }

    deleteProduct(id: string): Observable<Product> {
        const url = `${this.apiUrl}/${id}`
        return this.http.delete<Product>(url)
    }

    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.apiUrl, product, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        })
    }

    updateProduct(product: Product): Observable<Product> {
        const url = `${this.apiUrl}/${product.id}`
        return this.http.put<Product>(url, product)
    }
}
