<template>
	<div class="mdc-data-table">
		<div class="mdc-data-table__table-container">
			<table class="mdc-data-table__table" aria-label="Dessert calories">
				<thead>
					<tr class="mdc-data-table__header-row">
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Cardholder ID</th>
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Full name</th>
						<th class="mdc-data-table__header-cell" role="columnheader"
							scope="col">Type</th>
						<th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader"
							scope="col">Phone number</th>
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Date of birth</th>
					</tr>
				</thead>
				<tbody class="mdc-data-table__content">
					<tr class="mdc-data-table__row" v-for="holder in getCardholders" :key="holder.user.id">
						<th class="mdc-data-table__cell" scope="row">{{ holder.cardholder_id }}</th>
						<td class="mdc-data-table__cell">{{ `${holder.user.account.first_name} ${holder.user.account.last_name}` }}</td>
						<td class="mdc-data-table__cell">{{ holder.user.account.type }}</td>
						<td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{ holder.user.account.phone }}</td>
						<td class="mdc-data-table__cell">{{ holder.user.account.date_of_birth }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { mapGetters } from "vuex"

export default defineComponent({
	computed: {
		...mapGetters(['getCardholders'])
	},
	async created() {
		await this.$store.dispatch('getCardholders')
	}
})
</script>

<style lang="scss" scoped>
@use "@material/checkbox";
@use "@material/icon-button";
@use "@material/icon-button/mdc-icon-button";
@use "@material/data-table/data-table";

@include checkbox.core-styles;
// @include icon-button.core-styles;
@include data-table.core-styles;
@include data-table.theme-baseline;
</style>
