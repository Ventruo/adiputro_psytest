<template>
    <div class="relative bottom-32 w-full flex justify-center gap-10">
        <div class="w-3/12 h-96 bg-white rounded-xl shadow-xl">

        </div>
        <div class="w-3/12 h-96 bg-white rounded-xl shadow-xl">

        </div>
        <div class="w-3/12 h-96 bg-white rounded-xl shadow-xl">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.$emit('updateHeader', 'Dashboard')
    },
    methods: {

    },
}
</script>

<style>

</style>