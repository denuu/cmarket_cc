<template>
    <div class='formComponent__wrapper'>
        <form class='formComponent__form' v-for='(formField, x) in formFields' :key='x'>
            <input-field
                :name='formField.name'
                :type='formField.type'
                :v-model='formField.vModel'
                :autocomplete='formField.autocomplete'
            ></input-field>
        </form>
    </div>
</template>;

<script>
import InputField from './inputField.vue'

export default {
    name: 'sellerApplication',
    props: {
        formFields: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            // inputFields: ''
        }
    },
    components: {
        'input-field': InputField
    }
}
</script>