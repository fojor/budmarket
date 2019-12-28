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

			<v-btn color="red lighten-2" @click="openAuthModal">
				<span class="mr-2">Вход</span>
				<v-icon>mdi-open-in-new</v-icon>
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

	@Component({
		components: {
			AuthModal
		}
	})
	export default class App extends Vue {
		openAuthModal() {
			this.$store.commit(RootMutationsType.SHOW_LOGIN_DIALOG);
		}
	}
</script>
