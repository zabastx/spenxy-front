<template>
	<div class="card-create">
		<h2>Create Card</h2>
		<form class="card-create__form" @submit.prevent="onSubmit">
			<VInput label="Cardholder ID" required v-model="cardholder_id" />
			<VInput label="Active from" type="date" v-model="active_from" />
			<VInput label="Active to" type="date" v-model="active_to" />
			<VSelect label="Allowed Transactions" v-model="allowed_transactions_count" :options="['single', 'multiple']" />
			<div class="card-create__form__limits" v-for="(limit, idx) in limits" :key="idx">
				<VSelect label="Limit interval" v-model="limit.interval" :options="limitOptions" required />
				<VInput label="Limit amout" v-model.number="limit.amount" required type="number" />
			</div>
			<div class="card-create__form__btns">
				<VButton @click="addLimit" type="button" icon="add" text>Add limit</VButton>
				<VButton @click="removeLimit" v-show="limits.length" type="button" icon="delete" text>Remove limit</VButton>
			</div>
			<VButton>Create</VButton>
		</form>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	name: 'UserCreate',
	data: () => ({
		cardholder_id: '',
		active_from: '',
		active_to: '',
		allowed_transactions_count: 'multiple',
		limitOptions: ["per transaction", "daily", "weekly", "monthly", "all time"],
		limits: []
	}),
	methods: {
		async onSubmit(e) {
			const res = await this.$store.dispatch('createCard', {
				cardholder_id: this.cardholder_id,
				settings: {
					active_from: this.active_from,
					active_to: this.active_to,
					allowed_transactions_count: this.allowed_transactions_count,
					limits: this.limits
				}
			})
			if (res) this.$router.push('/cards')
			e.target.reset()
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
	}
})
</script>

<style lang="scss" scoped>
.card-create {
	&__form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: flex-start;

		&__limits {
			display: flex;
			gap: 20px;
		}
		&__btns {
			display: flex;
			gap: 20px;
		}
	}
}
</style>
