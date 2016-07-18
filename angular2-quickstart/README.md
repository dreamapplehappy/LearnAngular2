1.在类中的属性是通过`=`来赋值,比如是这样的:
```javascript
export class Demo {
    a = 'a';
    b = 'b';
}
```

2.字符串模板使用`(`)`,有很多的好处.

3.*ngFor = "let item of items";

4.模板变量可以在元素的任何兄弟节点或子节点中使用

5.定义的模块类名要与导出的一致

6.不添加name属性会报错 使用[(ngModel)]="model.xx" name="xx"