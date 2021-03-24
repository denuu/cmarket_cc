<template>
    <div class='card'>
        <!-- Labels -->
        <div class='card__labelRow'>
            <span class='card__label'>
                {{ label }}
            </span>
            <span class='card__indexLabel'>
                {{ indexLabel }}
            </span>
        </div>
        
        <!-- Heading -->
        <h1 class='card__heading'>{{ title }}</h1>
        
        <!-- Text Content -->
        <div class='card__textContent'>
            <p>{{ textContent }}</p>
        </div>

        <!-- Form -->
        <form-component></form-component>

        <!-- Button -->
    </div>
</template>;

<script>
import formComponent from './formComponent.vue'

export default {
  components: { formComponent },
    data () {
        return {
            title: 'Share your work with us',
            textContent: 'To ensure the the quality of our marketplace, we limit our seller community to the most qualified creators. Let our curators know why you’d be a great seller:',
            label: 'Seller Application',
            currentIndex: 1,
            total: 2,
            indexLabel: `Step 1 of 2`,
        }
    },
    components: {
        'form-component': formComponent,
    }
}
</script>