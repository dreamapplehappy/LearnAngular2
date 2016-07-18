"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var click_me_1 = require('./components/click-me');
var key_up_1 = require("./components/key-up");
var loop_back_1 = require("./components/loop-back");
var enter_key_up_1 = require("./components/enter-key-up");
var hero_form_1 = require("./forms/hero-form");
var use_template_syntax_1 = require("./template-syntax/use-template-syntax");
// 当然我们也可以使用
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'title';
        this.heroLists = [
            new hero_1.Hero(1, 'a'),
            new hero_1.Hero(2, 'b'),
            new hero_1.Hero(3, 'c'),
            new hero_1.Hero(4, 'd'),
        ];
        this.myHero = this.heroLists[0];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [
                click_me_1.ClickMeComponent,
                key_up_1.KeyUpComponent,
                loop_back_1.LoopBackComponent,
                enter_key_up_1.EnterKeyUpComponent,
                hero_form_1.HeroFormComponent,
                use_template_syntax_1.UseTemplateSyntax
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map