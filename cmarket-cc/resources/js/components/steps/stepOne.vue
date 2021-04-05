<template>
    <div class='card-centre'>
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

            <!-- First Name -->
            <div class='inputField width50'>
                <label for='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' v-model='firstName' autocomplete='given-name'/>
            </div>

            <!-- Last Name -->
            <div class='inputField width50'>
                <label for='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' v-model='lastName' autocomplete='family-name'/>
            </div>

            <!-- Shop Category -->
            <div class='inputField width100'>
                <label for='shopCategory' autocomplete='off'>Your Shop Category</label>
                <select type='text' id='shopCategory' name='shopCategory' v-model='shopCategory'>
                    <option>Graphics</option>
                    <option>Fonts</option>
                    <option>Templates</option>
                    <option>Add-ons</option>
                    <option>Photos</option>
                    <option>Web Themes</option>
                    <option>3D</option>
                </select>
            </div>
            
            <!-- Portfolio Link -->
            <div class='inputField width100'>
                <label for='portfolioLink' autocomplete='off'>Portfolio Link</label>
                <input type='url' id='portfolioLink' name='portfolioLink' v-model='portfolioLink'/>
            </div>

            <!-- Content Owner -->
            <div class='inputField width100'>
                <input type='checkbox' id='contentOwner' name='contentOwner' v-model='contentOwner' v-if='portfolioLink'>
                <label for='contentnOwner' v-if='portfolioLink'>Yes, I confirm that the content I submit is authored by me.</label>
            </div>

            <!-- Existing Store -->
            <div class='inputField width100 inputField--radio'>
                <label for='existingStore'>Do you already have an online store?</label>

                <label for='existingStoreYes'>
                    <input type='radio' id='existingStoreYes' name='existingStoreYes' v-model='existingStore' value='yes'/>
                    <span class="selected"></span>
                    Yes
                </label>
                
                <label for='existingStoreNo'>
                    <input type='radio' id='existingStoreNo' name='existingStoreNo' v-model='existingStore' value='no'/>
                    <span class="selected"></span>
                    No
                </label>
            </div>

            <!-- Existing Store URLs -->
            <div class='inputField width100'>
                <label for='existingStoreUrls' autocomplete='off' v-if='existingStore === "yes"'>Online stores I sell on today</label>
                <textarea rows='3' id='existingStoreUrls' name='existingStoreUrls' v-model='existingStoreUrls' v-if='existingStore === "yes"'/></textarea>
            </div>

            <form-navigation></form-navigation>
        </div>
    </div>
</template>

<script>
import formNavigation from '../formNavigation'
import { mapFields } from 'vuex-map-fields'

export default {
    components: {
        'form-navigation': formNavigation
    },
    computed: {
        ...mapFields([
            'form.currentStep',
            'form.firstName',
            'form.lastName',
            'form.shopCategory',
            'form.portfolioLink',
            'form.contentOwner',
            'form.existingStore',
            'form.existingStoreUrls'
        ])
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
