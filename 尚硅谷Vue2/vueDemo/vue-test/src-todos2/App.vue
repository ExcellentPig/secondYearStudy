<template>
  <div class="todo-container">
    <div class="todo-wrap">
			<!--给TodoHeader标签对象绑定addTodo事件监听-->
     <!-- <TodoHeader @addTodo="addTodo"/> -->
		  <TodoHeader ref="header" />
      <TodoList :todos="todos" />
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"/>
    </div>
  </div>
</template>
<!--
* 
* 绑定事件监听---------订阅消息
* 触发事件---------发布消息
* 
* 
* 
* -->
<script>
	import PubSub from 'pubsub-js';
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    data () {
      return {
         todos: JSON.parse(localStorage.getItem('todos_key') || '[]')  // 读取localStorage保存的数据
      }
    },
		
		mounted(){
			//执行异步代码
			//给TodoHeader绑定addTodo事件监听
			//this.$on('addTodo',this.addTodo); //error 这里给App绑定的监听
			this.$refs.header.$on('addTodo',this.addTodo);
			
			//订阅消息
			PubSub.subscribe('deleteTodo',(msg,index)=>{
				this.deleteTodo(index)
			})
		},

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

      // 删除所有已完成的
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },

      // 全选/全不选
      selectAll (isSelectAll) {
        this.todos.forEach(todo => {
          todo.complete = isSelectAll
        })
      }
    },

    watch: {
      todos: {
        deep: true, // 深度监视
        handler: function (val) {
          // 将数据(json)保存到localStorage
          localStorage.setItem('todos_key', JSON.stringify(val))
        }
     
      }
    },

    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>