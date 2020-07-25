//实例化vue对象
new Vue({
	el: '#vue-app',
	data: {
		age: 18,
		x: 0,
		y: 0,
		name: '',
		age1: ''
	},
	methods: {
		add(inc) {
			this.age += inc;
		},
		subtract(dec) {
			this.age -= dec;
		},
		updateXY(event) {
			// console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving(event) {
			event.stopPropagation();
		},
		alert() {
			alert('aaaaaaaa');
		},
		logName() {
			console.log('输入名字')
		},
		logAge() {
			console.log('输入年龄')
		},
		logName1() {
			this.name = this.$refs.name.value;
		},
		logAge1() {
			//console.log('输入年龄')
			this.age1 = this.$refs.age1.value;
		}
	}
});

/*

	

*/
