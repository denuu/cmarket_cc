<template>
	<div>
		<card
			:title='title'
			:textContent='textContent'
			:label='label'
			:indexLabel='indexLabel'
			:formFields='formFields'
		></card>
	</div>
</template>

<script>
import Card from '../components/card.vue'

// const default_layout = "default"

export default {
	computed: {},
	data () {
		return {
			title: 'Tell us a little about yourself',
            textContent: 'Your answers will help us provide you with a more personalized experience as a seller!',
            label: 'Seller Application',
            indexLabel: `Step 2 of 2`,
            formFields: [
				// TODO: Placeholder in input.
                {name: 'When creating products to sell, which best describes your perspective on quality?', type: 'select', placeholder: 'Select Answer'},
                {name: 'How would you describe your experience level as an online seller?', type: 'select', placeholder: 'Select Answer'},
                {name: 'How would you describe your understanding of business and marketing?', type: 'select', placeholder: 'Select Answer'},
            ]
		}
	},
    components: {
        'card': Card
    }
}

</script>