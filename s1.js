// ==================== JavaScript 基础语法学习 ====================

// 【弹窗函数】（已注释）
// alert() - 显示警告框，alert('HELLO ZJH');
// confirm() - 显示确认框，返回 true/false，confirm('确认吗？');

// ==================== 字符串数据类型 ====================
var str = 'hello world';
console.log(str);

// 【单字符字符串】
// 用单引号定义字符串，存储单个字符 'A'
var char = 'A'
console.log(char)
console.log(typeof(char))  // typeof 运算符返回数据类型，这里是 "string"

// 【字符串变量】
// 变量 str3 重新赋值为字符串 'hello world'
var str3 = 'hello world'
console.log(str3)
console.log(typeof(str3))  // 输出 "string"

// 【使用构造函数创建字符串对象】
// new String() 可以创建字符串对象，参数会被转换为字符串
// 注意：String 构造函数只接受第一个参数，后续参数会被忽略
var str4 = new String('Z',"JH",'lisi')

console.log(str4)  // 输出 String {"Z"} 对象
console.log(typeof(str4))  // 输出 "object"，注意与基本字符串类型不同

// ==================== 数值数据类型 ====================
// 【整数】
// 使用 var 声明数值变量，直接赋值整数
var num = 108
console.log(num)
console.log(typeof(num))  // 输出 "number"

// ==================== 布尔数据类型 ====================
// 【布尔值】
// 布尔类型只有两个值：true 和 false
var num2 = false
console.log(num2)
console.log(typeof(num2))  // 输出 "boolean"

// 【let 声明布尔变量】
// let 是 ES6 引入的块级作用域变量声明关键字
// 注意：变量声明和赋值可以在不同行
let bool = true
console.log(bool)
console.log(typeof(bool))  // 输出 "boolean"

// ==================== 函数定义 ====================
// 【函数声明（标准写法）】
// 使用 function 关键字定义命名函数
// 参数 a 是形参，可以接收任意类型的值
function sayHello(a){
    console.log(a)
    // alert('hello world')
}
// 调用函数，传入实参 'hello world'
sayHello('hello world')

// 【函数表达式（变量形式函数写法）】
// 将匿名函数赋值给变量，通过变量名调用函数
var sayHello2 = function(a){
    console.log(a)
    // alert('hello world')    
}
// 调用函数表达式
sayHello2('hello world')

// 【输入函数】（已注释）
// let pr = prompt('请输入姓名')   // prompt 返回字符串类型
// pr = parseInt(pr)  // parseInt 将字符串转换为整数
// console.log(pr)

// ==================== 对象 ====================
// 【使用构造函数创建空对象】
// new Object() 创建一个空对象，可以动态添加属性和方法
var person = new Object()   //创建一个空对象

// 【给对象添加属性】
// 通过点语法(.)给对象添加属性
person.name = 'ZJH'
person.age = 18

// 【给对象添加方法】
// 方法是值为函数的属性，使用变量形式函数写法
person.eat = function(){
    console.log('我正在吃')
}

// 【调用对象的方法】
// 通过对象名.方法名() 调用
person.eat()
console.log(person)  // 输出完整对象
console.log(typeof(person))  // 输出 "object"

// ==================== 构造函数创建对象 ====================
// 【使用函数作为构造函数】
// 构造函数约定以大写字母开头
// this 关键字指向新创建的实例对象
var person2 = function(name){
    this.name = name  // 添加 name 属性
    this.eat = function(){  // 添加 eat 方法
        console.log('2-我正在吃')
    }
}

// 【使用 new 关键字实例化对象】
// new 操作符会创建新对象并调用构造函数
var p2 = new person2('zhangsan')
console.log(p2)
console.log(typeof(p2))  // 输出 "object"

// 【访问对象属性和方法】
console.log(p2.name)  // 通过点语法访问属性，输出 "zhangsan"
p2.eat()  // 调用对象方法，输出 "2-我正在吃"