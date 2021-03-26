<template>
    <button :name='title' :url='url' :type='type' class='inputButton'>
        {{ title }}
        <!-- <label :for='name' class='inputField__label'>{{ name }}</label>
        <input :name='name' :type='type' class='inputField' /> -->
    </button>
</template>

<script>
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
    data () {
        return {
            width: 50 // turn into prop
        }
    }
}
</script>