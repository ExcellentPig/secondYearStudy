<template>
	<footer>
		<h1>{{ copyright }}{{title}}</h1>
	</footer>
</template>

<script>
export default {
	props: {
		title: {
			type: String
		}
	},
	data() {
		return {
			copyright: 'Copyright 2017 Vue Demo'
		};
	}
};
</script>

<style scoped="scoped">
footer {
	background-color: #222;
	padding: 6px;
}
h1 {
	color: lightgreen;
	text-align: center;
}
</style>
