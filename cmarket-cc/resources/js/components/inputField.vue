<template>
    <div>
        <!-- TODO: Width class! -->

        <!-- Text / Name / Text Area -->
        <div v-if='type === "text" || type === "name" || type === "textarea"' class='inputField__wrapper'>
            <label :for='name' class='inputField__label'>{{ label }}</label>
            <input :id='name' :name='name' :type='type' class='inputField' :v-model='name' />
        </div>

        <!-- Select -->
        <div v-if='type === "select"' class='inputField__wrapper'>
            <label :for='name' class='inputField__label'>{{ label }}</label>
            <select :id='name' :name='name' class='inputField' :v-model='name'>
                <option v-for='item in items' :value='item.value' :key='item.title'>
                    {{ item.title }}
                </option>
            </select>
        </div>

        <!-- Checkbox -->
        <div v-if='type === "checkbox"' class='inputField__wrapper'>
            <input :type='type' :id='name' :name='name' v-model='name'>
            <label :for='name' v-if='portfolioLink'>{{ label }}</label>
        </div>

        <!-- Radio -->
        <div v-if='type === "radio"' class='inputField__wrapper'>
            <div :v-for='item in items' :key='item.value'>
                <input :type='radio' :id='item.name' :name='item.name' v-model='item.name' :value='item.value'/>
                <label :for='item.name'>{{ item.label }}</label>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'inputField',
    // props: ['name', 'type', 'autocomplete'],
    props: {
        name: {
            type: String
        },
        label: {
            type: String
        },
        type: {
            type: String,
            required: true
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        width: {
            type: Number,
            default: 100
        },
        items: {
            type: Array
            // select options
            // radio options
        }
    },
    data () {
        return {
            width: 50 // turn into prop
        }
    }
}
</script>