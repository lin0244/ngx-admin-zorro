import { Component, HostBinding, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'header-search',
    template: `
    <nz-input nzPlaceHolder='{{ "top-search-ph" }}' [(ngModel)]="q"
        (nzFocus)="qFocus()" (nzBlur)="qBlur()">
        <ng-template #prefix>
            <i class="anticon anticon-search"></i>
        </ng-template>
    </nz-input>
    `
})
export class HeaderSearchComponent implements AfterViewInit {

    q: string;

    qIpt: HTMLInputElement;

    @HostBinding('class.header-search__focus')
    focus = false;

    @HostBinding('class.header-search__toggled')
    searchToggled = false;

    @Input()
    set toggleChange(value: boolean) {
        console.log(value);
        if (typeof value === 'undefined') return;
        console.log('toggleChange', value);
        this.searchToggled = true;
        this.focus = true;
        setTimeout(() => this.qIpt.focus(), 300);
    }

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        this.qIpt = (this.el.nativeElement as HTMLElement).querySelector('.ant-input') as HTMLInputElement;
    }

    qFocus() {
        this.focus = true;
    }

    qBlur() {
        this.focus = false;
        this.searchToggled = false;
    }
}
