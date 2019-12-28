<template>
	<HelloWorld msg="Welcome to Your Vue.js" />
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import HelloWorld from "@/components/HelloWorld.vue";

	@Component({
		components: {
			HelloWorld
		}
	})
	export default class Home extends Vue {
		name = "home";
	}
</script>
