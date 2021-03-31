<template>
    <div>
        <!-- Previous -->
        <!-- <input-button 
            @click='goBack' 
            v-show='!isFirstStep()'
            name='Back'
            class='inputButton inputButton--clear'
        >
        </input-button> -->
        <button @click='goBack()' v-show='!isFirstStep() && !isSubmitted()'>
            Back
        </button>

        <!-- Next -->
        <!-- TODO: v-show='!isLastStep()' -->
        <!-- <input-button 
            @click='goForward' 
            :name='nextButtonText()'
            class='inputButton inputButton--green'
        >
        </input-button> -->
        <button @click='goForward()' v-show='!isSubmitted()'>
            {{ nextButtonText() }}
        </button>
    </div>
</template>

<script>
// import InputButton from './inputButton.vue'

export default {
    methods: {
        // TODO: STEP TWO SUBMITS, STEP THREE IS SUCCESS.
        nextButtonText() {
            if (this.$route.name === 'secondStep') {
                return 'Submit Application'
            }
            return 'Next'
        },
        isFirstStep() {
            return this.$route.name === 'firstStep'
        },
        isSubmitted() {
            return this.$route.name === 'thirdStep'
        },
        goForward() {
            if (this.$route.path === '/') {
                this.$router.push('/2')
            } else if (this.$route.path === '/2') {
                this.submit()
            }
        },
        goBack() {
            if (this.$route.name === 'thirdStep') {
                this.$router.push('/2')
            } else if (this.$route.name === 'secondStep') {
                this.$router.push('/')
            }
        },
        submit() {
            // const data = new FormData()
            // data.append('firstName', this.$store.firstName) // TODO Use getter fn.
            alert('This aint it, chief')
            this.$router.push('/3')
        }
    }
    // name: 'inputButton',
    // props: {
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     type: {
    //         type: String
    //     },
    //     url: {
    //         type: String
    //     }
    // },
    // components: {
    //     'input-button': InputButton
    // },
    // data () {
    //     return {
    //         // width: 50 // turn into prop
    //     }
    // },
}
</script>