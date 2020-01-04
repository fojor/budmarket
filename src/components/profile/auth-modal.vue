<template>
	<v-dialog v-model="loginModalVisible" @click:outside="close" width="500">
		<v-card>
			<v-card-title class="headline grey lighten-2" primary-title>Вход</v-card-title>
			<v-card-text>
				<div class="mx-auto mt-10 mb-6 phone-block">
					<v-form>
						<v-text-field
							label="Номер телефона"
							v-model="phoneNumber"
							name="phoneNumber"
							prepend-icon="mdi-cellphone-iphone"
							type="text"
							prefix="+38"
							v-mask="phoneMask"
						/>
					</v-form>
				</div>
				<div v-if="showCaptcha">
					<div class="d-flex justify-center recaptcha-block">
						<div id="recaptcha-container"></div>
						<div class="recaptcha-skeleton"></div>
					</div>
					<div class="d-flex justify-center mt-6 mb-8">
						<v-progress-circular v-if="isLoaging" indeterminate color="primary"></v-progress-circular>
						<v-btn v-else color="primary" @click="sendCode" text>Войти</v-btn>
					</div>
				</div>
				<div v-else>
					<div class="d-flex justify-center">
						<v-form>
							<v-text-field
								label="Код из SMS"
								v-model="pinCode"
								name="pinCode"
								type="text"
								v-mask="pinMask"
								:error-messages="pinCodeError"
								@input="pinCodeError = ''"
							/>
						</v-form>
					</div>
					<div class="d-flex justify-center mt-6 mb-8">
						<v-progress-circular v-if="isLoaging" indeterminate color="primary"></v-progress-circular>
						<v-btn v-else color="primary" @click="verifyCode" text>Войти</v-btn>
					</div>
				</div>
			</v-card-text>
			<!-- <v-tabs centered grow v-model="tab">
				<v-tab>Вход</v-tab>
				<v-tab>Регистрация</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					
				</v-tab-item>
				<v-tab-item>
					<v-card>
						<v-card-text>Регистрация</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
			<v-divider></v-divider>-->

			<!-- <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="sendCode">I accept</v-btn>
			</v-card-actions>-->
		</v-card>
	</v-dialog>
</template>

<style lang="scss" scoped>
	.phone-block {
		width: 300px;
	}
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
	import * as firebase from "firebase/app";
	import "firebase/auth";
	import { mask } from "vue-the-mask";

	@Component({
		directives: {
			mask
		}
	})
	export default class AuthModal extends Vue {
		windowRef: any = window;
		tab = null;
		phoneNumber = "";
		phoneMask = "##########";
		pinCode = "";
		pinCodeError = "";
		pinMask = "######";
		showCaptcha = true;
		isLoaging = false;

		get loginModalVisible() {
			let value = this.$store.state.loginModalVisible;

			if (value && !this.windowRef.recaptchaVerifier) {
				// windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
				// 	"recaptcha-container"
				// );
				// windowRef.recaptchaVerifier.render();
				setTimeout(() => {
					this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
						"recaptcha-container"
					);
					this.windowRef.recaptchaVerifier.render();
				}, 100);
			}

			return value;
		}

		close() {
			this.$store.commit(RootMutationsType.HIDE_LOGIN_DIALOG);
		}

		sendCode(verifier: any) {
			this.isLoaging = true;
			firebase
				.auth()
				.signInWithPhoneNumber(
					"+38" + this.phoneNumber,
					this.windowRef.recaptchaVerifier
				)
				.then(result => {
					this.windowRef.confirmationResult = result;
					this.showCaptcha = false;
				})
				.finally(() => (this.isLoaging = false));
		}

		verifyCode() {
			this.isLoaging = true;
			this.windowRef.confirmationResult
				.confirm(this.pinCode)
				.then((result: any) => {
					// if(result.user) {
					//    this.success.emit();
					// };
					this.close();
					this.$router.push({ path: "/profile" });
				})
				.catch((error: any) => {
					switch (error.code) {
						case "auth/invalid-verification-code":
							this.pinCodeError = "Неверный код";
							break;
					}
				})
				.finally(() => (this.isLoaging = false));
		}
	}
</script>