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
    components: {
        'form-component': formComponent,
        'input-button': inputButton,
    }
}
</script>