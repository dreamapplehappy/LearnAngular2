import { Component } from '@angular/core';

@Component({
    selector: 'key-up',
    template: `
        <input (keyup)="onKey($event)" />
        <p>{{value}}</p>
    `
})

export class KeyUpComponent {
    value: any;

    constructor() {

    }

    onKey(event: any) {
        this.value += event.target.value + ' | ';
    }
}