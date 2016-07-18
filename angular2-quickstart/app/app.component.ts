import {Component} from '@angular/core';
import {Hero} from './hero';
import {ClickMeComponent} from './components/click-me';
import {KeyUpComponent} from "./components/key-up";
import {LoopBackComponent} from "./components/loop-back";
import {EnterKeyUpComponent} from "./components/enter-key-up";
import {HeroFormComponent} from "./forms/hero-form";
import {UseTemplateSyntax} from "./template-syntax/use-template-syntax";

// 当然我们也可以使用
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html', // 1 注意程序运行的根目录,可配置
    directives: [
        ClickMeComponent,
        KeyUpComponent,
        LoopBackComponent,
        EnterKeyUpComponent,
        HeroFormComponent,
        UseTemplateSyntax
    ]
})
export class AppComponent {
    //title = 'Tour of Heroes'; // 0 注意,这里是等号不是冒号
    //myHero = 'Windstorm';

    title: string; // 类型声明
    myHero: Object;
    //heroLists: Array<string>; // 一种声明方式
    heroLists: Object[];

    constructor() {
        this.title = 'title';
        this.heroLists = [
            new Hero(1, 'a'),
            new Hero(2, 'b'),
            new Hero(3, 'c'),
            new Hero(4, 'd'),
        ];
        this.myHero = this.heroLists[0];
    }
}









