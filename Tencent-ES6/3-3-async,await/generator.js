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

function * gen(){
	yield readFile('../data/a.txt');
	yield readFile('../data/b.txt');
	yield readFile('../data/c.txt');
}


let g1=gen();

g1.next().value.then(res=>{
	console.log(res.toString());
	return g1.next().value;
}).then(res=>{
	console.log(res.toString());
	return g1.next().value;
}).then(res=>{
	console.log(res.toString());
})