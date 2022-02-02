<template>
    <div class="h-full w-9/12 m-auto text-white relative">
        <div class="fixed top-0 inset-x-0 w-screen h-screen flex justify-center items-center">
            <div class="bg-primary-800 h-2/3 w-1/3 px-5 py-7 rounded-xl">
                <h1 class="text-2xl font-bold mb-3">Image Matching Test</h1>
                <div v-if="section!=null">
                    <hr>
                    <div class="my-1 p-2">
                        <p class="text-sm font-bold mb-1">Instruction : </p>
                        <p class="text-sm">
                            <!-- Diberikan sebuah pola yang terpisah, tugas anda adalah memilih salah satu gambar dari 5 pilihan 
                            (a, b, c, d, atau e) yang apabila pola yang terpisah digabungkan akan menghasilkan gambar tersebut!  -->
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
    </div>
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