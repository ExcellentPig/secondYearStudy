<template>
	<div>
		<div v-if="!repoUrl">loading...</div>
		<div v-else>most star repo <a :href="repoUrl">{{repoName}}</a></div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			repoUrl:'',
			repoName:''
		}
	},
	mounted(){
		//发ajax请求获取数据
		const url=`https://api.github.com/search/repositories?q=vue&sort=starts`
		this.$http.get(url)
		.then(response=>{
			//成功了
			const result = response.data
			//得到第一个mostrepo
			const mostRepo = result.items[0]
			this.repoUrl = mostRepo.html_url
			this.repoName=mostRepo.name
		},response=>{
			alert('error')
		})
	}
};
</script>

<style></style>
