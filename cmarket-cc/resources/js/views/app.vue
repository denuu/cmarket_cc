<template>
	<div>
		{{message}}
		<card></card>
	</div>
</template>

<script>
import Card from '../components/card.vue'

const default_layout = "default"

export default {
	computed: {},
	data () {
		return {
			message:'Hello World'
		}
	},
    components: {
        'card': Card
    }
}

</script>