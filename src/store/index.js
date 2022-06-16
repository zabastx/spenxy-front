import axios from 'axios'
import { createStore } from 'vuex'
import {errorToasts} from '@/utils'

export default createStore({
	state: {
		client: {},
		clientBalance: {},
		cardholders: [],
		cards: []
	},
	getters: {
		getClient: ({ client }) => client,
		getClientBalance: ({ clientBalance }) => clientBalance,
		getCardholders: ({ cardholders }) => cardholders,
		getCards: ({ cards }) => cards
	},
	mutations: {
		SET_CLIENT(state, value) {
			state.client = value
		},
		SET_CLIENT_BALANCE(state, value) {
			state.clientBalance = value
		},
		SET_CARDHOLDERS(state, value) {
			state.cardholders = value
		},
		SET_CARDS(state, value) {
			state.cards = value
		},
		UPDATE_CARD(state, value) {
			const idx = state.cards.findIndex(item => item.card_id === value.card_id)
			state.cards.splice(idx, 1, value)
		},
	},
	actions: {
		async axios({ }, { url, method = 'get', data, auth = true, headers: newHeaders }) {
			try {
				const headers = auth ? {
					authorization: `Bearer ${localStorage.getItem('token')}`
				} : newHeaders
				const res = await axios({ method, data, headers, url: 'https://api.demo.spenxy.com/api/v1/' + url })
				console.log('res', res.data)
				return res.data
			} catch (error) {
				console.log('Error', error)
				errorToasts[error.response.status](error.response.data)
				return false
			}
		},
		async login({ dispatch }, data) {
			const res = await dispatch('axios', {
				url: 'authentication/login', method: 'post', headers: {
					'x-api-key': data.api_key,
					'x-client-id': data.client_id
				},
				auth: false
			})
			if (!res) return false
			localStorage.setItem('token', res.access_token)
			return true
		},
		async getClient({ commit, dispatch }) {
			const res = await dispatch('axios', { url: 'authentication/login/test-token', method: 'post' })
			if (res) {
				commit('SET_CLIENT', res)
				return true
			}
			localStorage.removeItem('token')
		},
		async getClientBalance({ commit, dispatch }) {
			const res = await dispatch('axios', { url: 'company/balance' })
			if (!res) return
			commit('SET_CLIENT_BALANCE', res)
		},
		async getCardholders({ commit, dispatch }) {
			const res = await dispatch('axios', { url: 'cardholder/get/all' })
			if (!res) return
			commit('SET_CARDHOLDERS', res)
		},
		async getCards({ commit, dispatch }) {
			const res = await dispatch('axios', { url: 'cards/cards/all' })
			if (!res) return
			commit('SET_CARDS', res)
		},
		async createUser({ dispatch }, data) {
			const res = await dispatch('axios', { url: 'cardholder/create', method: 'post', data })
			return !!res
		},
		async createCard({ dispatch }, data) {
			const res = await dispatch('axios', { url: 'cards/card/create', method: 'post', data })
			return !!res
		},
		async getCardDetail({ dispatch }, card_id) {
			return await dispatch('axios', { url: 'cards/cards/detail/sensitive?card_id=' + card_id })
		},
		async updateCard({ commit, dispatch }, { id, data }) {
			const res = await dispatch('axios', { url: 'cards/card/update?card_id=' + id, method: 'put', data })
			if (!res) return false
			commit('UPDATE_CARD', res)
			return true
		},
	},
	modules: {
	}
})
