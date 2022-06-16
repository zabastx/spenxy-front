<template>
	<router-view></router-view>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	async created() {
		if (!localStorage.getItem('token')) return this.$router.push('/auth')
	}
})
</script>

<style lang="scss">
@import 'mosha-vue-toastify/dist/style.css';

* {
	box-sizing: border-box;
}

html {
	min-height: 100vh;
	height: 1px;
}

body {
	margin: 0;
	height: 100%;
	background-color: #f9fafc;
}

#app {
	font-family: Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	flex-direction: column;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
