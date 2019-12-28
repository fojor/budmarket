<template>
	<v-btn x-large color="success" to="/offers/create">Сделать заказ</v-btn>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import HelloWorld from "@/components/hello-world.vue";

	@Component({
		components: {
			//HelloWorld
		}
	})
	export default class Home extends Vue {
		name = "home";
	}
</script>
