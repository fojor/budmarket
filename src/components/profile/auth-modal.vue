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
					<div class="mx-auto mt-10 mb-6" style="width:300px">
						<v-form>
							<v-text-field
								label="Номер телефона"
								v-model="phoneNumber"
								name="phoneNumber"
								prepend-icon="mdi-cellphone-iphone"
								type="text"
								prefix="+38"
								v-mask="mask"
							/>
						</v-form>
					</div>
					<div class="d-flex justify-center recaptcha-block">
						<div id="recaptcha-container"></div>
						<div class="recaptcha-skeleton"></div>
					</div>
					<div class="d-flex justify-center mt-6 mb-8">
						<v-btn color="primary" @click="sendCode" text>Send Code</v-btn>
					</div>
				</v-tab-item>
				<v-tab-item>
					<v-card>
						<v-card-text>Регистрация</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
			<v-divider></v-divider>

			<!-- <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="sendCode">I accept</v-btn>
			</v-card-actions>-->
		</v-card>
	</v-dialog>
</template>

<style lang="scss" scoped>
	.recaptcha-block {
		position: relative;
		#recaptcha-container {
			width: 304px;
			height: 78px;
			position: relative;
			z-index: 1;
		}
		.recaptcha-skeleton {
			width: 304px;
			height: 78px;
			position: absolute;
			top: 0;
			background: rgba(0, 0, 0, 0.12);
		}
	}
</style>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { RootMutationsType } from "@/store/mutations";
	import firebase from "firebase";
	import { mask } from "vue-the-mask";

	@Component({
		directives: {
			mask
		}
	})
	export default class AuthModal extends Vue {
		tab = null;
		phoneNumber = "";
		mask = "##########";

		get loginModalVisible() {
			let value = this.$store.state.loginModalVisible;
			const windowRef: any = window;

			if (value && !windowRef.recaptchaVerifier) {
				// windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
				// 	"recaptcha-container"
				// );
				// windowRef.recaptchaVerifier.render();
				setTimeout(() => {
					windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
						"recaptcha-container"
					);
					windowRef.recaptchaVerifier.render();
				}, 100);
			}

			return value;
		}

		close() {
			this.$store.commit(RootMutationsType.HIDE_LOGIN_DIALOG);
		}

		sendCode(verifier: any) {
			const windowRef: any = window;

			firebase
				.auth()
				.signInWithPhoneNumber(
					"+38" + this.phoneNumber,
					windowRef.recaptchaVerifier
				)
				.then(data => console.log(data));
		}
	}
</script>