<template>
  <div>
		<div class="container a">
		  <div class="row">
		    <div class="col-xs-offset-2 col-xs-8">
		      <div class="page-header"><h2>Router Test</h2></div>
		    </div>
		  </div>
		
		  <div class="row">
		    <div class="col-xs-offset-2 col-xs-3">
		      <div class="list-group">
		        <!--生成路由链接-->
		        <router-link to="/about" class="list-group-item">About</router-link>
		        <router-link to="/home" class="list-group-item">Home</router-link>
		      </div>
		    </div>
		    <div class=" col-xs-5">
		      <div class="panel">
		        <div class="panel-body">
		          <!--显示当前组件-->
		          <keep-alive>
		            <router-view msg="abc"></router-view>
		          </keep-alive>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		<div class="container">
		  <div class="row">
		    <div class="col-sm-offset-1 col-xs-12">
		      <div class="list-group">
		        <!--生成路由链接-->
		        <router-link to="/about" class="list-group-item">About</router-link>
		        <router-link to="/home" class="list-group-item">Home</router-link>
		      </div>
		    </div>
		     <div class="col-sm-offset-1 col-xs-12">
		      <div class="panel">
		        <div class="panel-body">
		          <!--显示当前组件-->
		          <keep-alive>
		            <router-view msg="abc"></router-view>
		          </keep-alive>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
  export default {}
</script>

<style scoped="scoped">
	.a{
		display: none;
	}
	.list-group-item{
		width: 100% !important;
	}
</style>