import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/AppView.vue'
import AuthView from '../views/AuthView.vue'
import MainView from '../views/MainView.vue'
import ProfileView from '../views/ProfileView.vue'
import CardsView from '../views/Cards/'
import CardsList from '../views/Cards/CardsList.vue'
import CardCreate from '../views/Cards/CardCreate.vue'
import Users from '../views/Users/'
import UsersList from '../views/Users/UsersList.vue'
import CreateUser from '../views/Users/CreateUser.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: AppView,
		children: [
			{
				path: '/',
				name: 'Main',
				meta: {
					label: 'Main',
					icon: 'dashboard'
				},
				component: MainView
			},
			{
				path: '/profile',
				name: 'Profile',
				meta: {
					label: 'Profile',
					icon: 'person'
				},
				component: ProfileView
			},
			{
				path: '/cards',
				name: 'Cards',
				meta: {
					label: 'Cards',
					icon: 'credit_card'
				},
				component: CardsView,
				children: [
					{
						path: '',
						name: 'CardsList',
						component: CardsList
					},
					{
						path: 'create',
						name: 'CardCreate',
						component: CardCreate
					}
				]
			},
			{
				path: '/users',
				name: 'Users',
				meta: {
					label: 'Users',
					icon: 'groups'
				},
				component: Users,
				children: [
					{
						path: '',
						name: 'UsersList',
						component: UsersList
					},
					{
						path: 'create',
						name: 'UserCreate',
						component: CreateUser
					}
				]
			}
		]
	},
	{
		path: '/auth',
		name: 'AuthView',
		component: AuthView
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/'
	}
]

const router = createRouter({
	history: createWebHistory('/front/'),
	routes
})

export default router
