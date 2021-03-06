# 设计模式

### 工厂模式

像工厂的生产车间一样，把复杂的操作逻辑按照流程去执行，最后的到一个实例，隐藏了创建实例的复杂度，对外只提供一个调用接口。构造函数就使用的工厂模式。

```js
class Person{
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
class Factory{
    static reate(name) {
        return new Person(name)
    }
}

Factory.create('joy').showName();
```

### 单例模式

在全局范围内只存在一份，可以通过一个变量去控制，如果已经存在就直接返回，否则就创建。

```js
class Singleton{
    constructor() {}
}
let getInstance = (function() {
    let instance;
    if (instance) {
        return instance;
    } else {
        return new Singleton()
    }
})()

getInstance() === getInstance()  // true
```

### 适配器模式

将一个接口加工变成另一个接口，让原本不兼容的类可以一起工作，达到适配的目的。

```js
let $id = function (id) {
    return $(id)[0]
}
// jquery 方法兼容 $id
```

### 代理模式

代理模式的定义是把对一个对象的访问, 交给另一个代理对象来操作。

```js
let oUl = document.querySelector('ul');
oUl.onclick = function () {};
// 事件代理
```

### 发布订阅模式

发布-订阅模式也叫做观察者模式。通过一对一或者一对多的依赖关系，当对象发生改变时，订阅方都会收到通知。