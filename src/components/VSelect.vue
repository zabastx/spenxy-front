<template>
	<div class="wrapper">
		<label class="mdc-text-field mdc-text-field--outlined" ref="textfield">
			<span class="mdc-notched-outline">
				<span class="mdc-notched-outline__leading"></span>
				<span class="mdc-notched-outline__notch" v-show="!!label">
					<span class="mdc-floating-label" id="my-label-id">{{ label }}</span>
				</span>
				<span class="mdc-notched-outline__trailing"></span>
			</span>
			<input class="mdc-text-field__input" :value="modelValue" aria-labelledby="my-label-id"
				@click.self="menu.open = true" readonly :required="required">
			<i class="material-icons mdc-text-field__icon" aria-hidden="true" data-v-fb975b06="">expand_more</i>
		</label>
		<div class="mdc-menu mdc-menu-surface" ref="menu">
			<ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
				<li class="mdc-list-item" role="menuitem" v-for="option in options" :key="option"
					@click="$emit('update:modelValue', option)">
					<span class="mdc-list-item__ripple"></span>
					<span class="mdc-list-item__text">{{ option }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { MDCMenu } from '@material/menu'
import { MDCTextField } from '@material/textfield'

export default defineComponent({
	data: () => ({
		textfield: null,
		menu: null,
		select: ''
	}),
	props: {
		label: String,
		options: { type: Array, default: [] },
		required: { type: Boolean, default: false },
		modelValue: [String, Number]
	},
	mounted() {
		this.textfield = new MDCTextField(this.$refs.textfield)
		this.menu = new MDCMenu(this.$refs.menu)
		this.textfield.required = this.required
	}
})
</script>

<style lang="scss" scoped>
@use "@material/line-ripple/mdc-line-ripple";
@use "@material/notched-outline/mdc-notched-outline";
@use "@material/textfield";
@use "@material/floating-label/mdc-floating-label";
@use "@material/list/mdc-list";
@use "@material/menu-surface/mdc-menu-surface";
@use "@material/menu";

@include textfield.core-styles;

.wrapper {
	position: relative;
	width: fit-content;
}

.mdc-text-field {
	@include textfield.outlined-height(44px);
}

.mdc-menu {
	top: 100% !important;
	@include menu.width(100%);
}
</style>
