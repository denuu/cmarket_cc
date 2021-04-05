<template>
	<div>
		<app-header></app-header>
		<step-one v-if='this.$route.path === "/"'></step-one>
		<step-two v-if='this.$route.path === "/2"'></step-two>
		<step-three v-if='this.$route.path === "/3"'></step-three>
	</div>
</template>

<script>
import AppHeader from '../components/appHeader.vue'
import Card from '../components/card.vue'
import StepOne from '../components/steps/stepOne.vue'
import StepTwo from '../components/steps/stepTwo.vue'
import StepThree from '../components/steps/stepThree.vue'

// const default_layout = "default"

export default {
    components: {
		'app-header': AppHeader,
        'card': Card,
		'step-one': StepOne,
		'step-two': StepTwo,
		'step-three': StepThree,
    }
}

</script>