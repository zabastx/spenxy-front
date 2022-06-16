<template>
	<div class="mdc-dialog" ref="dialog">
		<div class="mdc-dialog__container">
			<div class="mdc-dialog__surface" role="alertdialog" aria-modal="true" aria-labelledby="my-dialog-title"
				aria-describedby="my-dialog-content">
				<h2 class="mdc-dialog__title" id="my-dialog-title">Card Information</h2>
				<div class="mdc-dialog__content" id="my-dialog-content">
					<p>Card Number: {{ formatCardNumber(card.card_number) }}</p>
					<p>CVV: {{ card.cvv }}</p>
					<p>expiration date: {{ `${card.expiry_month}/${card.expiry_year}` }}</p>
					<p>Name on card: {{ card.name_on_card }}</p>
				</div>
				<div class="mdc-dialog__actions">
					<VButton type="button" data-mdc-dialog-action="close">Close</VButton>
				</div>
			</div>
		</div>
		<div class="mdc-dialog__scrim"></div>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { MDCDialog } from '@material/dialog'
import { formatCardNumber } from '@/utils'

export default defineComponent({
	name: 'CardDetail',
	props: {
		card: Object
	},
	methods: {
		formatCardNumber
	},
	mounted() {
		const dialog = new MDCDialog(this.$refs.dialog)
		dialog.listen('MDCDialog:closed', () => {
			this.$emit('close')
		})
		dialog.open()
	}
})
</script>

<style lang="scss" scoped>
@use "@material/dialog";

@include dialog.core-styles;
</style>
