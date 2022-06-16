<template>
	<VHeader />
	<div class="home">
		<VNav class="home__nav" />
		<main class="home__view">
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	name: 'HomeView',
	async created() {
		const res = await this.$store.dispatch('getClient')
		if (!res) return
		await this.$store.dispatch('getClientBalance')
	}
})
</script>

<style lang="scss" scoped>
.home {
	flex-grow: 1;
	display: flex;
	height: calc(100% - 60px);

	&__nav {
		flex: 0 1 300px;
	}

	&__view {
		box-shadow: inset 0 0 5px grey;
		flex-grow: 1;
		padding: 20px;
		height: 100%;
		overflow-y: scroll;
	}
}
</style>
