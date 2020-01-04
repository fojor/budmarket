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

			<v-btn v-if="!isAuthenticated" color="red lighten-2" @click="openAuthModal">
				<span class="mr-2">Вход</span>
				<v-icon>mdi-login</v-icon>
			</v-btn>
			<v-btn v-else color="red lighten-2" @click="logout">
				<span class="mr-2">Выход</span>
				<v-icon>mdi-logout</v-icon>
			</v-btn>
			<AuthModal></AuthModal>
		</v-app-bar>

		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script lang="ts">
	import { Vue, Component } from "vue-property-decorator";
	import { RootMutationsType } from "@/store/mutations";
	import AuthModal from "@/components/profile/auth-modal.vue";
	import * as firebase from "firebase/app";

	@Component({
		components: {
			AuthModal
		}
	})
	export default class App extends Vue {
		isAuthenticated = false;

		beforeCreate() {
			firebase.auth().onAuthStateChanged(user => {
				//console.log(user);
				this.isAuthenticated = !!user;
			});
		}

		openAuthModal() {
			this.$store.commit(RootMutationsType.SHOW_LOGIN_DIALOG);
		}

		logout() {
			firebase.auth().signOut();
		}
	}
</script>
