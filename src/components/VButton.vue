<template>
	<button :class="['mdc-button', { 'mdc-button--raised': !text }]" ref="btn">
		<span class="mdc-button__ripple"></span>
		<i v-show="!!icon" class="material-icons mdc-button__icon" aria-hidden="true">{{ icon }}</i>
		<span class="mdc-button__label">
			<slot></slot>
		</span>
	</button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { MDCRipple } from '@material/ripple'

export default defineComponent({
	name: 'VButton',
	props: {
		icon: String,
		text: { type: Boolean }
	},
	mounted() {
		const buttonRipple = new MDCRipple(this.$refs.btn)
	}
})
</script>

<style lang="scss" scoped>
@use "@material/button/styles";
</style>
