<template>
	<div class="mdc-data-table" ref="table">
		<div class="mdc-data-table__table-container">
			<table class="mdc-data-table__table" aria-label="Dessert calories">
				<thead>
					<tr class="mdc-data-table__header-row">
						<th class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox" role="columnheader"
							scope="col">
							<div class="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected">
								<input type="checkbox" class="mdc-checkbox__native-control" aria-label="Toggle all rows" />
								<div class="mdc-checkbox__background">
									<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
										<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
									</svg>
									<div class="mdc-checkbox__mixedmark"></div>
								</div>
								<div class="mdc-checkbox__ripple"></div>
							</div>
						</th>
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Card Number</th>
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Created at</th>
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Status</th>
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Brand</th>
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">Form Factor</th>
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col"></th>
					</tr>
				</thead>
				<tbody class="mdc-data-table__content">
					<tr :data-row-id="'u' + idx" class="mdc-data-table__row" v-for="(card, idx) in cards" :key="card.card_id">
						<td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
							<div class="mdc-checkbox mdc-data-table__row-checkbox">
								<input type="checkbox" class="mdc-checkbox__native-control" :aria-labelledby="'u' + idx" />
								<div class="mdc-checkbox__background">
									<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
										<path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
									</svg>
									<div class="mdc-checkbox__mixedmark"></div>
								</div>
								<div class="mdc-checkbox__ripple"></div>
							</div>
						</td>
						<th class="mdc-data-table__cell mask_number" scope="row" :id="'u' + idx"
							@click="$emit('getCard', card.card_id)">{{ formatCardNumber(card.mask_number) }}</th>
						<td class="mdc-data-table__cell">{{ (new Date(card.created_at)).toLocaleDateString() }}</td>
						<td class="mdc-data-table__cell">{{ card.status }}</td>
						<td class="mdc-data-table__cell">{{ card.brand }}</td>
						<td class="mdc-data-table__cell">{{ card.form_factor }}</td>
						<td class="mdc-data-table__cell">
							<VButton @click="$emit('updateCard', card.card_id)">update</VButton>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { MDCDataTable } from '@material/data-table'
import { formatCardNumber } from '@/utils'

export default defineComponent({
	name: 'CardsTable',
	props: ['cards'],
	methods: {
		formatCardNumber
	},
	mounted() {
		const dataTable = new MDCDataTable(this.$refs.table)
	}
})
</script>

<style lang="scss" scoped>
@use "@material/checkbox";
@use "@material/data-table/data-table";

@include checkbox.core-styles;
@include data-table.core-styles;
@include data-table.theme-baseline;

.mask_number {
	cursor: pointer;
}
</style>
