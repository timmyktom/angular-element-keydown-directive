import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({selector: '[appElementKeyDownClick]'})
export class ElementKeyDownClickDirective {
    @Input() actionControl: any;
    @Input() fireOnSpace: boolean;

    constructor(private elementRef: ElementRef) { }

    @HostListener('keydown.enter', ['$event']) onKeyDownForEnter(event: KeyboardEvent) {
        event.preventDefault();
        this.callClick();
    }

    @HostListener('keydown.space', ['$event']) onKeyDownForSpace(event: KeyboardEvent) {
        event.preventDefault();
        if (this.fireOnSpace) {
            this.callClick();
        }
    }

    private callClick() {
        if (this.actionControl) {
            if (typeof(this.actionControl) === 'object') {
                this.actionControl.click();
            }
            if (typeof(this.actionControl) === 'string') {
                document.getElementById(this.actionControl).click();
            }
        } else {
            this.elementRef.nativeElement.click();
        }
    }
}
