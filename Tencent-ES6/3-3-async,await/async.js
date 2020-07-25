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
	let f1=await readFile('../data/a.txt');
	console.log(f1.toString());
	let f2=await readFile('../data/b.txt');
	console.log(f2.toString());
	let f3=await readFile('../data/c.txt');
	console.log(f3.toString());
}

fn();