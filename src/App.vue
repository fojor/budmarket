<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<router-link to="/">
					<v-img
						alt="Vuetify Logo"
						class="shrink mr-2"
						contain
						src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
						transition="scale-transition"
						width="40"
					/>
				</router-link>
			</div>

			<v-spacer></v-spacer>

			<v-dialog v-model="loginModalVisible" width="500">
				<template v-slot:activator="{ on }">
					<v-btn color="red lighten-2" v-on="on">
						<span class="mr-2">Вход</span>
						<v-icon>mdi-open-in-new</v-icon>
					</v-btn>
				</template>

				<v-card>
					<v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

					<v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

					<v-divider></v-divider>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" text @click="loginModalVisible = false">I accept</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-app-bar>

		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script lang="ts">
	import { Vue, Component } from "vue-property-decorator";

	@Component({
		components: {}
	})
	export default class App extends Vue {
		loginModalVisible = false;
	}
</script>
