const fs=require('fs');
//封装  fs封装成promise

const readFile=function(filename){
	return new Promise((resolve,reject)=>{
		fs.readFile(filename,(err,data)=>{
			if(err)reject(err);
			resolve(data);
		});
	});
};

//async

async function fn(){
	try{ //不能用let???
		f1=await readFile('../data/a.txt')
		f2=await readFile('../data/b.txt')
		f3=await readFile('../data/c.txt')
	}catch(e){};
	console.log(f1.toString());	
	console.log(f2.toString());
	console.log(f3.toString());
}

console.log(fn());