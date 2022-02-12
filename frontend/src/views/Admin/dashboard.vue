<template>
    <div class="relative bottom-32 w-full text-center">
        <div class="flex justify-center gap-10">
            <div class="w-3/12 h-96 bg-white rounded-xl shadow-xl">

            </div>
            <div class="w-3/12 h-96 bg-white rounded-xl shadow-xl">

            </div>
            <div class="w-3/12 h-96 bg-white rounded-xl shadow-xl">
                
            </div>
        </div>
        <div class="w-10/12 h-96 bg-white rounded-xl shadow-xl inline-block relative top-10">

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
    mounted(){
        $('.menu').removeClass('bg-primary-200')
        $('.menu').removeClass('text-primary-900')
        $('.menu').addClass('hover:bg-primary-800')
        $('#menu-home').removeClass('hover:bg-primary-800')
        $('#menu-home').addClass('bg-primary-200')
        $('#menu-home').addClass('text-primary-900')
    }
}
</script>

<style>

</style>