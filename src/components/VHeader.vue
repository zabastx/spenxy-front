<template>
	<header class="header">
		<span>Balance: <b>{{ getBalance }}</b></span>
		<span>{{ getClient.primary_contact_email }}</span>
		<VButton icon="logout" @click="logout">Logout</VButton>
	</header>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { mapGetters } from "vuex"

export default defineComponent({
	name: 'VHeader',
	data: () => ({
		currencyMap: new Map([['USD', '$']])
	}),
	computed: {
		...mapGetters(['getClient', 'getClientBalance']),
		getBalance() {
			const { currency, available_amount } = this.getClientBalance
			return this.currencyMap.get(currency) + available_amount || ''
		}
	},
	methods: {
		logout() {
			localStorage.removeItem('token')
			this.$router.push('/auth')
		}
	}
})
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex: 0 0 60px;
	padding: 15px;
	gap: 20px;
	box-shadow: 0 0 5px grey;
	z-index: 10;
	background-color: #fff;
	b {
		color: #6200ee;
	}
}
</style>
