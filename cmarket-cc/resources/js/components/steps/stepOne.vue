<template>
    <div class='card'>
        <!-- Labels -->
        <div v-if='label || indexLabel' class='card__labelRow'>
            <span v-if='label' class='card__label'>
                {{ label }}
            </span>
            <span v-if='indexLabel' class='card__indexLabel'>
                {{ indexLabel }}
            </span>
        </div>
        
        <!-- Heading -->
        <h1 v-if='title' class='card__heading'>{{ title }}</h1>
        
        <!-- Text Content -->
        <div v-if='textContent' class='card__textContent'>
            <p>{{ textContent }}</p>
        </div>

        <!-- Form -->
        <label for='firstName'>First Name</label>
        <input type='text' id='firstName' name='firstName' v-model='firstName' autocomplete='given-name'/>

        <label for='lastName'>Last Name</label>
        <input type='text' id='lastName' name='lastName' v-model='lastName' autocomplete='family-name'/>

        <label for='shopCategory' autocomplete='off'>Your Shop Category</label>
        <input type='text' id='shopCategory' name='shopCategory' v-model='shopCategory'/>
        
        <label for='portfolioLink' autocomplete='off'>Portfolio Link</label>
        <input type='url' id='portfolioLink' name='portfolioLink' v-model='portfolioLink'/>

        <!-- TODO radio. -->
        <label for='existingStore'>Do you already have an online store?</label>
        <input type='text' id='existingStore' name='existingStore' v-model='existingStore'/>

        <label for='existingStoreUrls' autocomplete='off'>Online stores I sell on today</label>
        <input type='textarea' id='existingStoreUrls' name='existingStoreUrls' v-model='existingStoreUrls'/>

        <form-navigation></form-navigation>
    </div>
</template>

<script>
import formNavigation from '../formNavigation'

export default {
    components: {
        'form-navigation': formNavigation
    },
    computed: {
        currentStep: {
            get() {
                return this.$store.state.currentStep
            },
            set(value) {
                this.$store.commit('setCurrentStep', {currentStep: value})
            }
        },
		firstName: {
			get() {
				return this.$store.state.firstName
			},
			set(value) {
				this.$store.commit('setFirstName', {firstName: value})
			}
		},
		lastName: {
			get() {
				return this.$store.state.lastName
			},
			set(value) {
				this.$store.commit('setLastName', {lastName: value})
			}
		},
		shopCategory: {
			get() {
				return this.$store.state.shopCategory
			},
			set(value) {
				this.$store.commit('setShopCategory', {shopCategory: value})
			}
		},
		portfolioLink: {
			get() {
				return this.$store.state.portfolioLink
			},
			set(value) {
				this.$store.commit('setPortfolioLink', {portfolioLink: value})
			}
		},
		existingStore: {
			get() {
				return this.$store.state.existingStore
			},
			set(value) {
				this.$store.commit('setExistingStore', {existingStore: value})
			}
		},
		existingStoreUrls: {
			get() {
				return this.$store.state.existingStoreUrls
			},
			set(value) {
				this.$store.commit('setExistingStoreUrls', {existingStoreUrls: value})
			}
		}
	},
    data() {
        return {
            title: 'Share your work with us',
            textContent: 'To ensure the the quality of our marketplace, we limit our seller community to the most qualified creators. Let our curators know why you’d be a great seller:',
            label: 'Seller Application',
            indexLabel: `Step 1 of 2`
        }
    }
}
</script>
