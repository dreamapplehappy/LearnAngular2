import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
        <button (click)="clickMe()">Click me!</button>
        <p>{{clickMessage}}</p>
    `
})

export class ClickMeComponent {
    clickMessage: string;

    constructor() {
        this.clickMessage = 'welcome to here!';
    }

    clickMe() {
        this.clickMessage = 'You really clicked me!';
    }
}