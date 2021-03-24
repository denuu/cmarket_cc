<template>
    <div class='formComponent__wrapper'>
        <form class='formComponent__form' v-for='(inputField, x) in inputFields' :key='x'>
            <input-field :name='inputField.name' :type='inputField.type' :autocomplete='inputField.autocomplete'></input-field>
            <!--
            <input-field name='First Name' type='name' autocomplete='given-name'></input-field>

            <input-field name='Last Name' type='name' autocomplete='family-name'></input-field>

            <input-field name='Your Shop Category' type='select'></input-field>

            <input-field name='Portfolio Link' type='url'></input-field>

            <input-field name='Do you already have an online store?' type='radio'></input-field>
            -->
        </form>
    </div>
</template>;

<script>
import InputField from './inputField.vue'

export default {
    data () {
        return {
            name: 'sellerApplication',
            inputFields: [
                {name: 'First Name', type: 'text', autocomplete: 'given-name'},
                {name: 'Last Name', type: 'text', autocomplete: 'family-name'},
                {name: 'Your Shop Category', type: 'select', autocomplete: 'off'},
                {name: 'Portfolio Link', type: 'url', autocomplete: 'off'},
                {name: 'Do you already have an online store?', type: 'radio', autocomplete: 'off'}
            ]
        }
    },
    components: {
        'input-field': InputField
    }
}
</script>