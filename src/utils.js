import { createToast } from 'mosha-vue-toastify'

export const formatCardNumber = card_number => {
	const arr = []
	for (let i = 1; i <= 16; i+=4) {
		arr.push(card_number.slice(i-1, i+3))
	}
	return arr.join(' ')
}

const toastifyOptsError = {
	timeout: 3000,
	type: 'danger',
	position: 'bottom-center',
	showIcon: true,
	transition: 'slide'
}

export const errorToasts = {
	500: () => createToast('Internal Server Error', toastifyOptsError),
	403: data => createToast({ title: 'Error', description: data.detail }, toastifyOptsError),
	404: data => createToast({ title: 'Error', description: data.detail }, toastifyOptsError)
}
