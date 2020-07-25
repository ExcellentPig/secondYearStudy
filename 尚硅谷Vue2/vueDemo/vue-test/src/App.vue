<template>
	<div>
		<div v-if="!repoUrl">loading...</div>
		<div v-else>
			most star repo
			<a :href="repoUrl">{{ repoName }}</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			repoUrl: '',
			repoName: ''
		};
	},
	mounted() {
		const url = `https://api.github.com/search/repositories?q=vu&sort=starts`;
		//使用axios发送ajax请求
		axios.get(url).then(response => {
			const result = response.data;
			const mostRepo = result.items[0];
			this.repoUrl = mostRepo.html_url;
			this.repoName = mostRepo.name;
		}).catch(error=>{
			alert('404');
		})
	}
};
</script>

<style></style>
