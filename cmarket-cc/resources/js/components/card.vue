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
        <form-component v-if='formFields' :formFields='formFields'></form-component>

        <!-- Button -->
        <input-button title='Next'></input-button>
    </div>
</template>;

<script>
import formComponent from './formComponent.vue'
import inputButton from './inputButton.vue'

export default {
    props: {
        title: {
            type: String
        },
        textContent: {
            type: String
        },
        label: {
            type: String
        },
        indexLabel: {
            type: String
        },
        formFields: {
            type: Array
        }
    },
    data () {
        return {
            // title: 'Share your work with us',
            // textContent: 'To ensure the the quality of our marketplace, we limit our seller community to the most qualified creators. Let our curators know why you’d be a great seller:',
            // label: 'Seller Application',
            // currentIndex: 1,
            // total: 2,
            // indexLabel: `Step 1 of 2`,
            // formFields: [
            //     {name: 'First Name', type: 'text', autocomplete: 'given-name'},
            //     {name: 'Last Name', type: 'text', autocomplete: 'family-name'},
            //     {name: 'Your Shop Category', type: 'select', autocomplete: 'off'},
            //     {name: 'Portfolio Link', type: 'url', autocomplete: 'off'},
            //     {name: 'Do you already have an online store?', type: 'radio', autocomplete: 'off'}
            // ]
        }
    },
    components: {
        'form-component': formComponent,
        'input-button': inputButton,

    }
}
</script>