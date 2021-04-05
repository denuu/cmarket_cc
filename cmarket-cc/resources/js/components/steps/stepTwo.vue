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

            <!-- Form -->
            <div class='inputField width100'>
                <label for='qualityPerspective'>When creating products to sell, which best describes your perspective on quality?</label>
                <select type='text' id='qualityPerspective' name='qualityPerspective' v-model='qualityPerspective' autocomplete='off'>
                    <option value='5'>I don’t care what it takes, my products are the highest quality possible.</option>
                    <option value='4'>I put in enough effort to make my product pretty high quality, but at some point my time is better spent elsewhere.</option>
                    <option value='3'>I try to get quality products out quickly, even if I need to take a shortcut now and then.</option>
                    <option value='2'>I spend the minimum amount of time & effort it takes to create products that are acceptable quality.</option>
                    <option value='1'>Quantity is more important to me than quality.</option>
                </select>
            </div>

            <div class='inputField width100'>
                <label for='experienceLevel'>How would you describe your experience level as an online seller?</label>
                <select type='text' id='experienceLevel' name='experienceLevel' v-model='experienceLevel' autocomplete='off'>
                    <option value='5'>I sell on multiple marketplaces and through my own website.</option>
                    <option value='4'>I have experience selling through only my own website.</option>
                    <option value='3'>I have experience selling through multiple marketplaces.</option>
                    <option value='2'>I have experience selling through one online marketplace.</option>
                    <option value='1'>I’m new to selling creative products online.</option>
                </select>
            </div>

            <div class='inputField width100'>
                <label for='businessMarketing' autocomplete='off'>How would you describe your understanding of business and marketing?</label>
                <select type='text' id='businessMarketing' name='businessMarketing' v-model='businessMarketing' autocomplete='off'>
                    <option value='4'>I have an extensive background in business and/or marketing.</option>
                    <option value='3'>I’m familiar with some skills & techniques, but I’m not sure how to apply them when selling my creative work.</option>
                    <option value='2'>I’m vaguely aware of basic business & marketing concepts.</option>
                    <option value='1'>I’m not interested in understanding business & marketing.</option>
                </select>
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
			'form.qualityPerspective',
			'form.experienceLevel',
			'form.businessMarketing'
        ])
	},
    data() {
        return {
            title: 'Tell us a little about yourself',
            textContent: 'Your answers will help us provide you with a more personalized experience as a seller!',
            label: 'Seller Application',
            indexLabel: `Step 2 of 2`
        }
    }
}
</script>
