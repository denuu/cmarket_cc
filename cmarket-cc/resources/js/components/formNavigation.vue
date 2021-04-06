<template>
    <div class='formNavigation'>
        <!-- Previous -->
        <button class='inputButton' @click='goBack()' v-show='!isFirstStep() && !isSubmitted()'>
            <span class='chevron--left'>&#60;</span> Back
        </button>

        <!-- Next -->
        <button :type='nextButtonText() === "Next" ? "button" : "submit"' class='inputButton inputButton--green flex-self-end' @click='goForward()' v-show='!isSubmitted()'>
            {{ nextButtonText() }}
        </button>
    </div>
</template>

<script>

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
            this.axios
                .post('http://localhost:8000/api/sellers', this.$store.state.form)
                .then(response => (
                    this.$router.push('/3')
                ))
                .catch(err => console.log(err)) // TODO: if exists.
                .finally(() => this.loading = false)
        }
    }
}
</script>