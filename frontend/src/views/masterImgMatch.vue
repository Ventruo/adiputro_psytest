<template>
    <div>
        <div class="flex justify-between">
            <h1 class="text-3xl font-bold">Image Matching Test List</h1>
            <div class="flex">
                <p class="text-xl font-bold mr-2">Number of Questions: 20</p>
                <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 h-auto w-auto text-base" 
                    @click="this.$router.push({path: '/addSoalImage'})">Add Question</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>