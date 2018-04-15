//创建对象

//第一种方式

//1.工厂方法  缺陷无法知道对象的类型
function createPerson(name,age){
    var o = new Object();
    o.name = name;
    o.age = age;
    return o;
}

var person = createPerson("kevin",24);
var person2 = createPerson("star",23);
console.log(person.name);
console.log(person2.name);

//2.构造函数模式 改进无法获取对象类型的缺陷
//以这种方式定义的构造函数是定义在Global对象中的（在浏览器中是window对象）

function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayName =sayName;
}

function sayName(){
    console.log(this.name);
}

var p1 = new Person("wang",11);
var p2 = new Person("zhe",22);

p1.sayName();
p2.sayName();

console.log(p1.constructor == Person);
console.log(p2.constructor == Person);

Person("window",1);//添加到Global
global.sayName();
//3.原型模式 创建的每个函数都有prototype原型属性，该属性为指针类型，指向一个对象，该对象的用途是包涵，可以由特定类型的所有实例共享的属性和方法
// 该原型的对象可以被所有 构造函数实例共享
//关键字 共享

//理解原型对象 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个prototyp属性，这个属性指向函数的原型对象


// 

console.log("****************原型模式创建对象******************");
function Student(){}

Student.prototype.name = "Michal";
Student.prototype.age = 23;
Student.prototype.sayName = function(){
    console.log("My Name is "+this.name);
};

var st1 = new Student();
st1.sayName();

var st2 = new Student();
st2.sayName();

//"name" in st1;
//st1.hasOwnProperty("name");
console.log(st1.sayName == st2.sayName);
//更简单的原型语法

function WorkerMan(){}
WorkerMan.prototype = {
    name:"Hello",
    age:34,
    job:"Software Engineer",
    sayName:function(){
        console.log("More Simpe Prototype");
    }
};

var work1 = new WorkerMan();
work1.sayName();

var work2 = new WorkerMan();
work2.sayName();



//原型的动态性 由于在原型中查找值得过程是一次搜索过程，因此我们对原型的修改

console.log(typeof Array.prototype.sort);

//组合使用原型模式和构造函数，原型用来定义方法和共享属性
//构造函数用来定义属性方法
//并且这种混合模式还支持向构造函数传递参数


//动态原型模式



function dynamicPrototype(name,year){
    this.name = name;
    this.year = year;
    if(typeof this.sayName!="function"){
        dynamicPrototype.prototype.sayName = function(){
            console.log(this.name);
        }
    }
}