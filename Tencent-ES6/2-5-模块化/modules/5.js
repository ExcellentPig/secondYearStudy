const a=12;
const b=5;

const sum=()=>{
	console.log(a+b);
	return a+b;
}

const show=()=>{
	console.log('执行了show');
	return 1;
}

class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	
	showName(){
		return `my name is ${this.name}`;
	}
}

export {
	a,
	b,
	sum,
	show
}

export default {
	Person
}