import { Component } from '@angular/core'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    year: number = new Date().getFullYear()
    url: string = 'https://www.github.com/'
    author: string = 'Fatima Zahra Moumou'
}
