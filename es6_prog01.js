// ES6 Class

class MyClass {
	constructor (text) {
  this.text=text;}
  
  sayHello(who) {  
  console.log(this.text+who);
	}
}

var say = new MyClass('Hello');
console.log(say);
say.sayHello(' world');
say.sayHello(' nasty world');

console.log("World");