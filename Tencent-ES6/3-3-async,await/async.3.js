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
	
	let [a,b,c]=await Promise.all([
		readFile('../data/a.txt'),
		readFile('../data/b.txt'),
		readFile('../data/c.txt')
	]);
	
	console.log(a.toString());
	console.log(b.toString());
	console.log(c.toString());
		
}
fn();
