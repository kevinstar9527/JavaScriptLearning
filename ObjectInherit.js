//对象继承总结

//对象继承的方式
//1.原型链

function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayName =function(){
        console.log("My name is e its a problem");
    }
}

function RealPerson(name,age){
    this.realName = name;
    this.realAge = age;
}
RealPerson.prototype = new Person("Hello","Sir");

var realPeople = new RealPerson("Kevin","Star");

console.log(realPeople.name);

realPeople.sayName();

//2.借用构造函数（Constructor Stealing）


//3.组合继承 （将原型链和 construcotr stealing 的方式组合到一起）

//4.原型式继承

//5.寄生式继承

//6.寄生组合式继承 （结合 3，与6）