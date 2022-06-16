<template>
	<label class="mdc-text-field mdc-text-field--outlined" ref="textfield">
		<span class="mdc-notched-outline">
			<span class="mdc-notched-outline__leading"></span>
			<span class="mdc-notched-outline__notch">
				<span class="mdc-floating-label" id="my-label-id">{{ label }}</span>
			</span>
			<span class="mdc-notched-outline__trailing"></span>
		</span>
		<input :type="type" class="mdc-text-field__input" :value="modelValue" @click="$event.target.showPicker()"
			@input="$emit('update:modelValue', $event.target.value)" aria-labelledby="my-label-id">
	</label>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { MDCTextField } from '@material/textfield'

export default defineComponent({
	name: 'VInput',
	props: {
		label: { type: String, default: 'Label' },
		required: { type: Boolean, default: false },
		type: { type: String, default: 'text' },
		pattern: { type: String, default: '' },
		modelValue: [String, Number]
	},
	data: () => ({
		model: ''
	}),
	mounted() {
		const textfield = new MDCTextField(this.$refs.textfield)
		textfield.required = this.required
	}
})
</script>

<style lang="scss" scoped>
@use "@material/line-ripple/mdc-line-ripple";
@use "@material/notched-outline/mdc-notched-outline";
@use "@material/textfield";
@use "@material/floating-label/mdc-floating-label";

@include textfield.core-styles;

.mdc-text-field {
	@include textfield.outlined-height(44px);
}
</style>
