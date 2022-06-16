<template>
	<div class="users">
		<h1>{{ $route.meta.label }}</h1>
		<div class="users__content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	name: 'Users'
})
</script>

<style lang="scss" scoped>
.users {
	&__content {
		min-width: 600px;
		width: fit-content;
		padding: 15px;
		background-color: #fff;
		border-radius: 12px;
		box-shadow: 0 0 10px grey;
	}
}
</style>
