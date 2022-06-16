<template>
	<div class="cards-list" :class="{ loading: isLoading }">
		<VButton class="cards-list__btn" @click="$router.push('/cards/create')">Create Card</VButton>
		<CardsTable @getCard="getDetail" @updateCard="updateCard" :cards="getCards" v-if="getCards.length" />
		<CardDetail :card="cardInfo" v-if="showDetail" @close="close('showDetail')" />
		<CardUpdate v-if="showUpdate" @close="close('showUpdate')" :id="updateCardId" />
	</div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import CardsTable from "@/components/CardsTable.vue"
import CardDetail from "@/components/CardDetail.vue"
import CardUpdate from "@/components/CardUpdate.vue"
import { mapGetters } from "vuex"

export default defineComponent({
	name: 'CardsList',
	data: () => ({
		showDetail: false,
		showUpdate: false,
		updateCardId: '',
		cardInfo: {},
		isLoading: false
	}),
	components: {
		CardsTable,
		CardDetail,
		CardUpdate
	},
	computed: {
		...mapGetters(['getCards'])
	},
	methods: {
		async getDetail(id) {
			this.isLoading = true
			const res = await this.$store.dispatch('getCardDetail', id)
			if (!res) return
			this.cardInfo = res
			this.showDetail = true
			this.isLoading = false
		},
		close(field) {
			this[field] = false
		},
		updateCard(id) {
			this.updateCardId = id
			this.showUpdate = true
		}
	},
	async created() {
		await this.$store.dispatch('getCards')
	},
})
</script>

<style lang="scss" scoped>
.cards-list {
	display: flex;
	flex-direction: column;
	gap: 20px;

	&__btn {
		margin-left: auto;
	}
	&.loading {
		cursor: wait;
	}
}
</style>
