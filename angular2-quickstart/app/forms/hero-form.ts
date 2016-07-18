import {Component} from '@angular/core';
import {NgForm} from '@angular/common';

import {FHero} from './f-hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/forms/hero-form.html'
})

export class HeroFormComponent {
    powers = ['Help A', 'Help B', 'Help C', 'Help D'];

    model = new FHero(1, 'dreamapple', this.powers[0], 'say sth..');

    submitted = false;

    active = true;

    onSubmit() {
        this.submitted = true;
        console.log('submit');
    }

    // 获取属性时运行
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    newHero() {
        this.model = new FHero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}