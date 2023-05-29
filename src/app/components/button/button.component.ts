import { Component, EventEmitter, Input, Output } from '@angular/core'
// import delete and edit icons from fontawesome
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
    @Input() style: string = 'bg-primary'
    @Input() disabled: boolean = false
    @Input() type: string = 'button'
    @Input() variant: string = 'raised'
    @Input() text: string | undefined = undefined
    @Input() iconName: string | undefined = undefined

    //  icons
    faEdit = faEdit
    faTrash = faTrash

    get iconSwitch(): IconProp {
        switch (this.iconName) {
            case 'edit':
                return this.faEdit
            case 'delete':
                return this.faTrash
            default:
                return this.faEdit
        }
    }

    @Output() onClick = new EventEmitter<any>()

    constructor() {}

    onClickButton(event: any) {
        this.onClick.emit(event)
    }
}
