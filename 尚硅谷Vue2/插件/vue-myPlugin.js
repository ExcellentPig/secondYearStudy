// /**
//  * vue的插件库
//  */
// 
// (function (){
// 	//向外暴露的插件对象
// 	const MyPlugin={};
// 	
// 	MyPlugin.install=function(Vue,options){
// 		//1,添加全局方法或属性
// 		Vue.myGlobalMethod=function(){
// 			//逻辑
// 			console.log('Vue函数对象的方法myGlobalMethod')
// 		}
// 		
// 		//2，添加全局资源
// 		Vue.direective('my-directive',function(el,binding){
// 			// bind(el,binding,vnode,oldVnode){
// 			// 	
// 			// }
// 			// ...
// 			
// 			el.textContent=binding.value.toUpperCase()
// 			
// 		})
// 		
// 		//3,注入组件
// 		// Vue.mixin({
// 		// 	created:function(){
// 		// 		//逻辑...
// 		// 	}
// 		// })
// 		
// 		//4,添加实例方法
// 		// Vue.prototype.$myMethod=function(methodOptions){
// 		// 	//逻辑
// 		// }
// 		
// 		Vue.prototype.$myMethod=function(){
// 			console.log('Vue实例对象的方法');
// 		}
// 		
// 	}
// 	
// 	window.MyPlugin=MyPlugin;
// 	
// })(window);


(function (window) {
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive',function (el, binding) {
      el.textContent = binding.value.toUpperCase();
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }
  window.MyPlugin = MyPlugin
})(window)