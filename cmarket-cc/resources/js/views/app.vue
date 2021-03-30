<template>
	<div>
		<step-one></step-one> 
		<!-- <card
			:title='title'
			:textContent='textContent'
			:label='label'
			:indexLabel='indexLabel'
			:formFields='formFields'
		></card> -->
	</div>
</template>

<script>
// let formData = {{ }}
import Card from '../components/card.vue'
import StepOne from '../components/steps/stepOne.vue'

const default_layout = "default"

export default {
	// computed: {
	// 	firstName: {
	// 		get() {
	// 			return this.$store.state.firstName
	// 		},
	// 		set(value) {
	// 			this.$store.commit('setFirstName', {firstName: value})
	// 		}
	// 	},
	// 	lastName: {
	// 		get() {
	// 			return this.$store.state.lastName
	// 		},
	// 		set(value) {
	// 			this.$store.commit('setLastName', {lastName: value})
	// 		}
	// 	},
	// 	shopCategory: {
	// 		get() {
	// 			return this.$store.state.shopCategory
	// 		},
	// 		set(value) {
	// 			this.$store.commit('setShopCategory', {shopCategory: value})
	// 		}
	// 	},
	// 	portfolioLink: {
	// 		get() {
	// 			return this.$store.state.portfolioLink
	// 		},
	// 		set(value) {
	// 			this.$store.commit('setPortfolioLink', {portfolioLink: value})
	// 		}
	// 	},
	// 	existingStore: {
	// 		get() {
	// 			return this.$store.state.existingStore
	// 		},
	// 		set(value) {
	// 			this.$store.commit('setExistingStore', {existingStore: value})
	// 		}
	// 	},
	// 	existingStoreUrls: {
	// 		get() {
	// 			return this.$store.state.existingStoreUrls
	// 		},
	// 		set(value) {
	// 			this.$store.commit('setExistingStoreUrls', {existingStoreUrls: value})
	// 		}
	// 	}
	// },
	data () {
		return {
			title: 'Share your work with us',
            textContent: 'To ensure the the quality of our marketplace, we limit our seller community to the most qualified creators. Let our curators know why you’d be a great seller:',
            label: 'Seller Application',
            indexLabel: `Step 1 of 2`,
            // formFields: [
            //     {name: 'First Name', type: 'text', autocomplete: 'given-name', vModel: 'firstName'},
            //     {name: 'Last Name', type: 'text', autocomplete: 'family-name', vModel: 'lastName'},
            //     {name: 'Your Shop Category', type: 'select', autocomplete: 'off', vModel: 'shopCategory'},
            //     {name: 'Portfolio Link', type: 'url', autocomplete: 'off', vModel: 'portfolioLink'},
            //     {name: 'Do you already have an online store?', type: 'radio', autocomplete: 'off', vModel: 'existingStore'},
            //     {name: 'Online stores I sell on today', type: 'textarea', autocomplete: 'off', vModel: 'existingStoreUrls'},
            // ]
		}
	},
    components: {
        'card': Card,
		'step-one': StepOne
        // FormComponent
    }
}

</script>