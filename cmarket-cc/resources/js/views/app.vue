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

const default_layout = "default"

export default {
	computed: {},
	data () {
		return {
			title: 'Share your work with us',
            textContent: 'To ensure the the quality of our marketplace, we limit our seller community to the most qualified creators. Let our curators know why you’d be a great seller:',
            label: 'Seller Application',
            indexLabel: `Step 1 of 2`,
            formFields: [
                {name: 'First Name', type: 'text', autocomplete: 'given-name'},
                {name: 'Last Name', type: 'text', autocomplete: 'family-name'},
                {name: 'Your Shop Category', type: 'select', autocomplete: 'off'},
                {name: 'Portfolio Link', type: 'url', autocomplete: 'off'},
                {name: 'Do you already have an online store?', type: 'radio', autocomplete: 'off'}
            ]
		}
	},
    components: {
        'card': Card
    }
}

</script>