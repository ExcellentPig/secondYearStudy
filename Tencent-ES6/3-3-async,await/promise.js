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

readFile('../data/a.txt').then(res=>{
	console.log(res.toString()); //<Buffer 61 61 61 61 61> //aaaaa
	return readFile('../data/b.txt');
}).then(res=>{
	console.log(res.toString());
	return readFile('../data/c.txt');
}).then(res=>{
	console.log(res.toString());
});