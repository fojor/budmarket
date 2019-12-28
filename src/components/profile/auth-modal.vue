<template>
	<v-dialog v-model="loginModalVisible" @click:outside="close" width="500">
		<v-card>
			<!-- <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title> -->
			<v-tabs centered grow v-model="tab">
				<v-tab>Вход</v-tab>
				<v-tab>Регистрация</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<v-card>
						<v-card-text>
							<v-form>
								<v-text-field
									label="Номер телефона"
									name="login"
									prepend-icon="mdi-cellphone-iphone"
									type="text"
								/>

								<v-text-field
									id="password"
									label="Password"
									name="password"
									prepend-icon="lock"
									type="password"
								/>
							</v-form>
						</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item>
					<v-card>
						<v-card-text>Регистрация</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
			<!-- <v-divider></v-divider>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" text @click="loginModalVisible = false">I accept</v-btn>
			</v-card-actions>-->
		</v-card>
	</v-dialog>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";

	@Component({})
	export default class AuthModal extends Vue {
		tab = null;

		get loginModalVisible() {
			return this.$store.state.modalVisible;
		}

		close() {
			this.$store.commit("hideModal");
		}
	}
</script>