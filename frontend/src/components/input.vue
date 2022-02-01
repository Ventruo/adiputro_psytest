<template>
    <input :type="type" v-model="inputValue" :name="nama" 
        class="w-full px-3 py-1 my-1 rounded-xl outline-none bg-primary-600 placeholder-gray-300" 
        :placeholder="placeHolder" autocomplete="off"/>
</template>

<script>
export default {
    props: ['type', 'modelValue', 'placeHolder', 'nama'],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                // console.log(value)
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>