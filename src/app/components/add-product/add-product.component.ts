import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from 'src/app/interfaces/product'

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
    id: string = ''
    Category: string = ''
    MainCategory: string = ''
    TaxTarifCode: string = ''
    SupplierName: string = ''
    WeightMeasure: number = 0
    WeightUnit: string = ''
    Description: string = ''
    Name: string = ''
    DateOfSale?: string = ''
    ProductPicUrl: string = ''
    Status: string = ''
    Quantity: number = 0
    UoM: string = ''
    CurrencyCode: string = ''
    Price: number = 0
    Width: number = 0
    Depth: number = 0
    Height: number = 0
    DimUnit: string = ''

    @Input() isOpen: Boolean = false

    @Output() onAddProduct: EventEmitter<Product> = new EventEmitter()

    constructor() {}

    // validation
    validate() {
        if (
            this.id === '' ||
            this.Category === '' ||
            this.MainCategory === '' ||
            this.TaxTarifCode === '' ||
            this.SupplierName === '' ||
            this.WeightMeasure === 0 ||
            this.WeightUnit === '' ||
            this.Description === '' ||
            this.Name === '' ||
            this.DateOfSale === '' ||
            this.ProductPicUrl === '' ||
            this.Status === '' ||
            this.Quantity === 0 ||
            this.UoM === '' ||
            this.CurrencyCode === '' ||
            this.Price === 0 ||
            this.Width === 0 ||
            this.Depth === 0 ||
            this.Height === 0 ||
            this.DimUnit === ''
        ) {
            return true
        } else {
            return false
        }
    }

    onSubmit() {
        const product = {
            id: 'hr-' + Math.floor(Math.random() * 10000000 + 1),
            Category: this.Category,
            MainCategory: this.MainCategory,
            TaxTarifCode: this.TaxTarifCode,
            SupplierName: this.SupplierName,
            WeightMeasure: this.WeightMeasure,
            WeightUnit: this.WeightUnit,
            Description: this.Description,
            Name: this.Name,
            DateOfSale: this.DateOfSale,
            ProductPicUrl: this.ProductPicUrl,
            Status: this.Status,
            Quantity: this.Quantity,
            UoM: this.UoM,
            CurrencyCode: this.CurrencyCode,
            Price: this.Price,
            Width: this.Width,
            Depth: this.Depth,
            Height: this.Height,
            DimUnit: this.DimUnit,
        }
        this.onAddProduct.emit(product)
        this.clearForm()
    }

    clearForm() {
        this.id = ''
        this.Category = ''
        this.MainCategory = ''
        this.TaxTarifCode = ''
        this.SupplierName = ''
        this.WeightMeasure = 0
        this.WeightUnit = ''
        this.Description = ''
        this.Name = ''
        this.DateOfSale = ''
        this.ProductPicUrl = ''
        this.Status = ''
        this.Quantity = 0
        this.UoM = ''
        this.CurrencyCode = ''
        this.Price = 0
        this.Width = 0
        this.Depth = 0
        this.Height = 0
        this.DimUnit = ''
    }
}
