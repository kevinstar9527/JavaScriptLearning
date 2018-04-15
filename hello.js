var hello = "Hello";


console.log(hello);

//读取属性的特性
//使用Object.getOwnPropertyDescriptor()方法，可以取得给定属性的描述符，返回值是一个对象（特性对象）

//对象字面量声明对象
var book = {};

Object.defineProperties(book,{
    _year:{
        value:2004
    },
    edition:{
        value:1,
        configurable:false
    },
    year:{
        get:function(){
            return this._year;
        },
        set:function(newValue){
            console.log("acessor property was invoked");
            this._year = newValue;
            console.log("newvalue = %d,_year = %d",newValue,this._year);
        }
        
    }
});

var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.value);
console.log(descriptor.configurable);

delete book._year;

