import { Component } from '@angular/core';

@Component({
    selector: 'use-template-syntax',
    templateUrl: 'app/template-syntax/use-template-syntax.html'
})

export class UseTemplateSyntax {
    msg2 = 'Hello 插值表达式!';
    window = window;
    temp = 'nothing';
    temp1 = `{{expression}}
             [target] = "expression"
             bind-target = "expression"`;
    dis1 = true;
    imgUrl = 'http://placehold.it/20x20';
    propClass = {
      'info': true
    };

    constructor() {
    }

    method2() {
        return 'method2';
    }

    clickMe() {
        alert('You clicked me!');
    }
}