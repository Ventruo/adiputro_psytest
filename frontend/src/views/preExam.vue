<template>
    <div class="h-screen w-9/12 m-auto mt-3 relative z-10">
        <div class="flex justify-center">
            <img src="../assets/logo.png" alt="" class="w-20 mb-5">
        </div>
        <div>
            <button class="bg-secondary px-3 py-1 rounded-full" @click="this.$router.push({path: '/dashboard'})">
                <i class="fa fa-chevron-left mr-2 text-xl"></i>
                <span class="font-bold text-xl">Back</span>
            </button>
        </div>

        <div class="text-center w-full h-full">
            <div class="h-3/4 w-9/12 mb-2 mr-2 inline-block align-top relative">
                <div class="w-full h-full bg-foreground-3-500 rounded-lg overflow-hidden">
                    <div class="h-1/3 w-full bg-no-repeat bg-center" style="background-image: url('https://i.pinimg.com/originals/34/25/ba/3425baae5208366016cecb54cc16da61.jpg');"></div>
                    <div class="h-2/3 w-full px-10 py-5 text-black font-bold text-left" v-if="section!=null">
                        <p class="mb-1 text-3xl">Tes 1</p>
                        <p class="mb-2 text-lg">{{section.instruction}}</p>
                        
                        <div class="flex p-2">
                            <div class="mr-2 text-xl">
                                <i class="fas fa-file-alt"></i> <br>
                                <i class="fas fa-clock"></i> <br>
                                <i class="fa fa-check"></i> <br>
                            </div>
                            <div class="mb-2 text-xl">
                                <p>{{section.question_num}} Questions</p>

                                <p>{{section.duration}} Minutes</p>
                                
                                <p v-if="section.option_num==5">Multiple Choices (A - E)</p>
                                <p v-else-if="section.option_num==4">Multiple Choices (A - D)</p>
                                <p v-else-if="section.option_num==3">Multiple Choices (A - C)</p>
                                <p v-else-if="section.option_num==2">Multiple Choices (True or False)</p>
                                <p v-else class="mb-6">Essay</p>
                            </div>
                        </div>

                        <div class="text-center">
                            <button class="bg-safe w-2/3 py-1 rounded-full" @click="this.$router.push({path: '/soalImage', query: {current_section: section.id}})">
                                <i class="fa fa-play mr-2 text-xl"></i>
                                <span class="font-bold text-xl">Start</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="h-full m-auto text-white relative">
        <div class="w-screen h-screen flex justify-center items-center">
            <div class="bg-primary-800 h-2/3 w-1/3 px-5 py-7 rounded-xl">
                <h1 class="text-2xl font-bold mb-3">Image Matching Test</h1>
                <div v-if="section!=null">
                    <hr>
                    <div class="my-1 p-2">
                        <p class="text-sm font-bold mb-1">Instruction : </p>
                        <p class="text-sm">
                            {{section.instruction}}
                        </p>
                    </div>
                    <hr class="mb-2">
                    <div class="flex mb-2 p-2">
                        <div class="mr-2">
                            <i class="fas fa-file-alt"></i> <br>
                            <i class="fas fa-clock"></i> <br>
                            <i class="fa fa-check"></i> <br>
                        </div>
                        <div>
                            <p>{{section.question_num}} Questions</p>

                            <p>{{section.duration}} Minutes</p>
                            
                            <p v-if="section.option_num==5">Multiple Choices (A - E)</p>
                            <p v-else-if="section.option_num==4">Multiple Choices (A - D)</p>
                            <p v-else-if="section.option_num==3">Multiple Choices (A - C)</p>
                            <p v-else-if="section.option_num==2">Multiple Choices (True or False)</p>
                            <p v-else class="mb-6">Essay</p>
                        </div>
                    </div>
                    <div class="text-center bottom-5 w-full mt-5 text-right">
                        <button class="bg-primary-200 text-primary-900 hover:bg-primary-600 hover:text-white
                                duration-300 text-xl font-bold rounded-xl w-1/3 py-2"
                                @click="this.$router.push({path: '/soalImage', query: {current_section: section.id}})"> Start! </button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import axios from 'axios'

export default {
    components: {
        axios
    },
    data(){
        return{
            judulHalaman: 'Persiapan Tes',
            section: null
        }
    },
    created(){
        this.$emit('updateJudul', this.judulHalaman)
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8888/api/section/'+this.$route.query.current_section)
        .then(({data}) => (
            this.section = data
        ))
    },
}
</script>

<style>

</style>