<template>
	<div class="main">
		<h1>{{ $route.meta.label }}</h1>
		<div class="main__content">
			<div class="main__content__item">
				<span>Currency</span>
				<span>{{ getClientBalance?.currency }}</span>
			</div>
			<div class="main__content__item">
				<span>Available Amount</span>
				<span>{{ getClientBalance?.available_amount }}</span>
			</div>
			<div class="main__content__item">
				<span>Total Amount</span>
				<span>{{ getClientBalance?.total_amount }}</span>
			</div>
			<div class="main__content__item">
				<span>Reserved Amount</span>
				<span>{{ getClientBalance?.reserved_amount }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { mapGetters } from "vuex"

export default defineComponent({
	computed: {
		...mapGetters(['getClientBalance'])
	}
})
</script>

<style lang="scss" scoped>
.main {
	&__content {
		min-width: 600px;
		width: fit-content;
		padding: 15px;
		background-color: #fff;
		border-radius: 12px;
		box-shadow: 0 0 10px grey;

		&__item {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 15px 5px 10px;
			border-bottom: 1px solid grey;

			>* {
				align-self: center;
			}
		}
	}
}
</style>
