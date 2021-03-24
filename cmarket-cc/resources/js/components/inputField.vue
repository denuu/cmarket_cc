<template>
    <div class='inputField__wrapper'>
        <label :for='name' class='inputField__label'>{{ name }}</label>
        <input :name='name' :type='type' class='inputField' />
    </div>
</template>;

<script>
export default {
    name: 'inputField',
    // props: ['name', 'type', 'autocomplete'],
    props: {
        name: {
            type: String,
        },
        type: {
            type: String,
            required: true
        },
        autocomplete: {
            type: String,
            default: 'off'
        }
    },
    data () {
        return {
            width: 50 // turn into prop
        }
    }
}
</script>