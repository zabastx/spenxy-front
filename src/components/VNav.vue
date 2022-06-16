<template>
	<aside class="mdc-drawer">
		<div class="mdc-drawer__content">
			<nav class="mdc-list">
				<router-link v-for="route in routes" :key="route.name" :to="route.path" class="mdc-list-item">
					<span class="mdc-list-item__ripple"></span>
					<i class="material-icons mdc-list-item__graphic" aria-hidden="true">{{route.meta.icon}}</i>
					<span class="mdc-list-item__text">{{ route.meta.label }}</span>
				</router-link>
			</nav>
		</div>
	</aside>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	name: 'VNav',
	computed: {
		routes() {
			return this.$router.options.routes[0].children || []
		}
	}
})
</script>

<style lang="scss" scoped>
@use "@material/drawer";
@use "@material/list";

@include drawer.core-styles;
@include drawer.dismissible-core-styles;
@include drawer.modal-core-styles;
@include list.deprecated-core-styles;

.mdc-list-item {
	padding: 10px;
	&__text {
		padding-left: 5px;
	}
	&.router-link-exact-active {
		color: #661fff;
		background-color: #661fff12;
	}
}
</style>
