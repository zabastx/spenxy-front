<template>
	<div class="cardholder-create">
		<h2>Create User</h2>
		<form class="cardholder-create__form" @submit.prevent="onSubmit">
			<VInput label="Email" required v-model="email" type="email" />
			<VInput label="First Name" required v-model="first_name" />
			<VInput label="Middle Name" v-model="middle_name" />
			<VInput label="Last Name" required v-model="last_name" />
			<VInput label="Date Of Birth" required type="date" v-model="date_of_birth" />
			<VInput label="Phone" required v-model="phone" />
			<VButton>Create</VButton>
		</form>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	name: 'UserCreate',
	data: () => ({
		email: '',
		first_name: '',
		middle_name: '',
		last_name: '',
		date_of_birth: '',
		phone: ''
	}),
	methods: {
		async onSubmit(e) {
			const res = await this.$store.dispatch('createUser', {
				email: this.email,
				first_name: this.first_name,
				middle_name: this.middle_name,
				last_name: this.last_name,
				date_of_birth: this.date_of_birth,
				phone: this.phone
			})
			if (res) e.target.reset()
		}
	}
})
</script>

<style lang="scss" scoped>
.cardholder-create {
	&__form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
}
</style>
