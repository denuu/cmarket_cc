<template>
    <div class='card'>
		<!-- Image -->
        
        <!-- Heading -->
        <h1 v-if='title' class='card__heading'>{{ title }}</h1>
        
        <!-- Text Content -->
        <div v-if='textContent' class='card__textContent'>
            <p>{{ textContent }}</p>
        </div>

        <form-navigation></form-navigation>
    </div>
</template>

<script>
import formNavigation from '../formNavigation'

export default {
    components: {
        'form-navigation': formNavigation
    },
    data() {
        return {
            title: 'Thank you for applying to become a seller with Creative Market!',
            textContent: 'Our curators are reviewing your application. We’ll get back to you within 5-7 business days. Meanwhile, you already have access to your Shop Studio, so let’s start setting up your shop!',
			// image: '~images/plane' // TODO.
        }
    }
}
</script>
