<template>
	<div class="profile">
		<h1>{{ $route.meta.label }}</h1>
		<div class="profile__content">
			<div class="profile__content__item">
				<span>Status</span>
				<div>
					<span :class="['status', { active: getClient.is_active }]">
						{{ getClient.is_active ? 'Active' : 'Inactive' }}
					</span>
				</div>
			</div>
			<div class="profile__content__item">
				<span>Name</span>
				<span>{{ getClient.name }}</span>
			</div>
			<div class="profile__content__item">
				<span>Email</span>
				<span>{{ getClient.primary_contact_email }}</span>
			</div>
			<div class="profile__content__item">
				<span>Phone</span>
				<span>{{ getClient.phone }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { mapGetters } from "vuex"

export default defineComponent({
	name: 'ProfileView',
	computed: {
		...mapGetters(['getClient'])
	}
})
</script>

<style lang="scss" scoped>
.profile {
	&__content {
		padding: 15px;
		background-color: #fff;
		border-radius: 12px;
		box-shadow: 0 0 10px grey;
		max-width: 700px;

		&__item {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 15px 5px 10px;
			border-bottom: 1px solid grey;

			>* {
				align-self: center;
			}

			.status {
				display: inline-block;
				padding: 5px;
				border-radius: 6px;
				background-color: red;
				color: #fff;
				font-weight: bold;

				&.active {
					background-color: rgb(6, 160, 44);
				}
			}
		}
	}
}
</style>
