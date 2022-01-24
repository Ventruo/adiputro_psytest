<template>
    <td class="px-1">
        <input type="text" v-model="inputValue" :name="nama" 
            class="w-full px-3 py-1 my-1 rounded-xl bg-transparent placeholder-gray-300 text-center outline-none" 
            :placeholder="placeHolder" autocomplete="off"/>
    </td>
</template>

<script>
export default {
    props: ['modelValue', 'placeHolder', 'nama'],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<style>

</style>