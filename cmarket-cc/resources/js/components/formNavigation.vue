<template>
    <div>
        <!-- Previous -->
        <input-button 
            @click='previousStep' 
            v-show='!firstStep()'
            name='Back'
            class='inputButton inputButton--clear'
        >
        </input-button>

        <!-- Next -->
        <input-button 
            @click='nextStep' 
            v-show='!lastStep()'
            :name='nextButtonText()'
            class='inputButton inputButton--green'
        >
        </input-button>
    </div>
</template>

<script>
import InputButton from './inputButton.vue'

export default {
    name: 'inputButton',
    props: {
        title: {
            type: String,
            required: true
        },
        type: {
            type: String
        },
        url: {
            type: String
        }
    },
    components: {
        'input-button': InputButton
    },
    methods: {
        // TODO: STEP TWO SUBMITS, STEP THREE IS SUCCESS.
        nextButtonText() {
            if (this.$route.name === 'thirdStep') {
                return 'Submit Application'
            }
            return 'Next'
        },
        firstStep() {
            return this.$route.name === 'firstStep'
        },
        nextStep() {
            if (this.$route.name === 'thirdStep') {
                submit()
            }
        },
        previousStep() {
            if (this.$route.name === 'thirdStep') {
                this.$router.push('/2')
            } else if (this.$route.name === 'secondStep') {
                this.$router.push('/1')
            }
        }
    },
    data () {
        return {
            width: 50 // turn into prop
        }
    },
    submit() {
        alert('This aint it, chief')
    }
}
</script>