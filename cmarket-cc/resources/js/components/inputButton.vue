<template>
    <button :name='name' :url='url' :type='type' class='inputButton'>
        {{ name }}
        <!-- <label :for='name' class='inputField__label'>{{ name }}</label>
        <input :name='name' :type='type' class='inputField' /> -->
    </button>
</template>

<script>
export default {
    name: 'inputButton',
    props: {
        name: {
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
    data () {
        return {
            // width: 50 // turn into prop
        }
    }
}
</script>