<template>
    <div class='card-centre'>
        <div class='card card--success'>
            <!-- Image (CSS hack as I haven't learned Vue Images yet.) -->
            <div class='card__submitImage'></div>
            
            <!-- Heading -->
            <h1 v-if='title' class='card__heading successPanel'>{{ title }}</h1>
            
            <!-- Text Content -->
            <div v-if='textContent' class='card__textContent--success'>
                <p v-html='textContent'></p>
            </div>

            <form-navigation></form-navigation>
        </div>
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
            textContent: 'Our curators are reviewing your application. We’ll get back to you within <strong>5-7 business days</strong>. Meanwhile, you already have access to your Shop Studio, so let’s start setting up your shop!',
        }
    }
}
</script>
