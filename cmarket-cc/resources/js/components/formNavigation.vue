<template>
    <div class='formNavigation'>
        <!-- Previous -->
        <!-- <input-button 
            @click='goBack' 
            v-show='!isFirstStep()'
            name='Back'
            class='inputButton inputButton--clear'
        >
        </input-button> -->
        <button class='inputButton' @click='goBack()' v-show='!isFirstStep() && !isSubmitted()'>
            <span class='chevron--left'>&#60;</span> Back
        </button>

        <!-- Next -->
        <!-- TODO: v-show='!isLastStep()' -->
        <!-- <input-button 
            @click='goForward' 
            :name='nextButtonText()'
            class='inputButton inputButton--green'
        >
        </input-button> -->
        <button class='inputButton inputButton--green flex-self-end' @click='goForward()' v-show='!isSubmitted()'>
            {{ nextButtonText() }}
        </button>
    </div>
</template>

<script>
// import InputButton from './inputButton.vue'

export default {
    methods: {
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
            console.log(this.$store.state.form)
            alert('If only MySQL 8.* mysql_native_password bug could be fixed so we could submit this.')
            this.$router.push('/3')
        }
    }
}
</script>