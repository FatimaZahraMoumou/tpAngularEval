import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component'
import { ButtonComponent } from './components/button/button.component'
import { InputComponent } from './components/input/input.component'
import { ProductsComponent } from './components/products/products.component'
import { AddProductComponent } from './components/add-product/add-product.component'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './pages/about/about.component'

const appRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        InputComponent,
        ProductsComponent,
        AddProductComponent,
        AboutComponent,
    ],
    imports: [BrowserModule, FontAwesomeModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
