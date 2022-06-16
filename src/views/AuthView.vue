<template>
	<form class="auth" @submit.prevent="onSubmit">
		<VInput label="API KEY" v-model="api_key" required />
		<VInput label="Client ID" v-model="client_id" required />
		<VButton>Sign in</VButton>
	</form>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	data: () => ({
		api_key: '',
		client_id: ''
	}),
	methods: {
		async onSubmit() {
			const res = await this.$store.dispatch('login', {
				api_key: this.api_key,
				client_id: this.client_id
			})
			if (res) this.$router.push('/')
		}
	},
	mounted() {
		this.api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTU4ODYxODQsInN1YiI6ImVhMzM3NWU0LTZlMmQtNGEwMi1iMDE3LTczMjgzZmVkMGE4MSJ9.tx8P-qLvsD-AXZ1nEO_CkYlwQDGfeUkBCgZ24UpX_Bo'
		this.client_id = 'ea3375e4-6e2d-4a02-b017-73283fed0a81'
	}
})
</script>

<style lang="scss" scoped>
.auth {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
}
</style>
