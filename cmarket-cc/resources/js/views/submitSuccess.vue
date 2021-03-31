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
			title: 'Thank you for applying to become a seller with Creative Market!',
            textContent: 'Our curators are reviewing your application. We’ll get back to you within 5-7 business days. Meanwhile, you already have access to your Shop Studio, so let’s start setting up your shop!',
            // label: 'Seller Application',
            // indexLabel: `Step 2 of 2`,
			image: '', // TODO.
            // formFields: [
            //     {name: 'When creating products to sell, which best describes your perspective on quality?', type: 'select', placeholder: 'Select Answer'},
            //     {name: 'How would you describe your experience level as an online seller?', type: 'select', placeholder: 'Select Answer'},
            //     {name: 'How would you describe your understanding of business and marketing?', type: 'select', placeholder: 'Select Answer'},
            // ]
		}
	},
    components: {
        'card': Card
    }
}

</script>