<template>
	<div class="users-list">
		<VButton class="users-list__btn" @click="$router.push('/users/create')">Create User</VButton>
		<UsersTable />
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import UsersTable from "@/components/UsersTable.vue"

export default defineComponent({
	name: 'UsersList',
	components: {
		UsersTable
	}
})
</script>

<style lang="scss" scoped>
.users-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
	&__btn {
		margin-left: auto;
	}
}
</style>
