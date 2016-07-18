import { Component } from '@angular/core';

@Component({
    selector: 'enter-key-up',
    template: `
        <input #box (keyup.enter)="onKey(box.value)" />
        <p>{{values}}</p>
    `
})

export class EnterKeyUpComponent {
    values: string = '';

    constructor() {

    }

    onKey(value: string) {
        this.values += value + ' | ';
    }
}