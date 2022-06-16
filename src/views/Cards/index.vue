<template>
	<div class="cards">
		<h1>{{ $route.meta.label }}</h1>
		<div class="cards__content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	name: 'CardsView'
})
</script>

<style lang="scss" scoped>
.cards {
	&__content {
		width: fit-content;
		min-width: 600px;
		padding: 15px;
		background-color: #fff;
		border-radius: 12px;
		box-shadow: 0 0 10px grey;
	}
}
</style>
