<template>
	<div class="mdc-dialog" ref="dialog">
		<div class="mdc-dialog__container">
			<div class="mdc-dialog__surface" role="alertdialog" aria-modal="true" aria-labelledby="my-dialog-title"
				aria-describedby="my-dialog-content">
				<h2 class="mdc-dialog__title" id="my-dialog-title">Card Update</h2>
				<div class="mdc-dialog__content" id="my-dialog-content">
					<div class="update-form">
						<VInput label="Active from" type="date" v-model="active_from" />
						<VInput label="Active to" type="date" v-model="active_to" />
						<VSelect label="Allowed Transactions" v-model="allowed_transactions_count"
							:options="['single', 'multiple']" />
						<VSelect label="Status" v-model="status" :options="['INACTIVE', 'ACTIVE', 'CLOSED']" />
						<div class="update-form__limits" v-for="(limit, idx) in limits" :key="idx">
							<VSelect label="Limit interval" v-model="limit.interval" :options="limitOptions" required />
							<VInput label="Limit amout" v-model.number="limit.amount" required type="number" />
						</div>
						<div class="update-form__btns">
							<VButton @click="addLimit" type="button" icon="add" text>Add limit</VButton>
							<VButton @click="removeLimit" v-show="limits.length" type="button" icon="delete" text>Remove limit
							</VButton>
						</div>
					</div>
				</div>
				<div class="mdc-dialog__actions">
					<VButton type="button" data-mdc-dialog-action="close">Cancel</VButton>
					<VButton type="button" @click="update()" style="margin-left: 20px">Update</VButton>
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
	name: 'CardUpdate',
	props: ['id'],
	data: () => ({
		active_from: '',
		active_to: '',
		allowed_transactions_count: 'multiple',
		limitOptions: ["per transaction", "daily", "weekly", "monthly", "all time"],
		limits: [],
		status: '',
		dialog: {}
	}),
	methods: {
		formatCardNumber,
		async update() {
			const res = await this.$store.dispatch('updateCard', {
				id: this.id, data: {
					...(this.active_from && { active_from: this.active_from }),
					...(this.active_to && { active_to: this.active_to }),
					...(this.status && { status: this.status }),
					...(this.limits.length && { limits: this.limits }),
					allowed_transactions_count: this.allowed_transactions_count
				}
			})
			if (!res) return
			this.dialog.close()
		},
		addLimit() {
			this.limits.push({
				interval: 'per transaction',
				amount: 1000
			})
		},
		removeLimit() {
			this.limits.pop()
		}
	},
	mounted() {
		const dialog = new MDCDialog(this.$refs.dialog)
		this.dialog = dialog
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

.update-form {
	padding-block: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	padding-top: 20px !important;

	&__limits {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
}
</style>
