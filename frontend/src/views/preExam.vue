<template>
    <div class="h-screen w-9/12 m-auto relative z-10 flex flex-col">
        <div class="flex justify-center mt-3">
            <img src="../assets/logo.png" alt="" class="w-20 mb-5">
        </div>
        <div>
            <button class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white px-3 py-1 rounded-md" @click="this.$router.go(-1)">
                <i class="fa fa-chevron-left mr-2 text-xl"></i>
                <span class="font-bold text-xl">Kembali</span>
            </button>
        </div>

        <div class="text-center w-full grow">
            <div class="h-5/6 w-9/12 mt-5 mr-2 inline-block align-top relative">
                <div class="w-full h-full bg-foreground-3-500 rounded-lg overflow-hidden">
                    <div class="h-1/4 w-full bg-no-repeat bg-center" style="background-image: url('https://i.pinimg.com/originals/34/25/ba/3425baae5208366016cecb54cc16da61.jpg');"></div>
                    <div class="h-3/4 w-full px-10 py-5 text-black font-bold text-left" v-if="section!=null">
                        <p class="mb-1 text-3xl">Tes 1</p>
                        <p class="mb-2 text-lg font-semibold" v-html="section.instruction"></p>
                        
                        <div class="flex p-2">
                            <div class="mr-2 text-xl">
                                <i class="fas fa-file-alt"></i> <br>
                                <i class="fas fa-clock"></i> <br>
                                <i class="fa fa-check"></i> <br>
                            </div>
                            <div class="mb-2 text-xl">
                                <p>{{section.question_num}} Pertanyaan</p>

                                <p v-if="section.duration!=-1">{{section.duration}} Menit</p>
                                <p v-else>Tidak ada batas waktu</p>
                                
                                <p v-if="section.option_num==5">Pilihan Ganda (A - E)</p>
                                <p v-else-if="section.option_num==4">Pilihan Ganda (A - D)</p>
                                <p v-else-if="section.option_num==3">Pilihan Ganda (A - C)</p>
                                <p v-else-if="section.option_num==2">Pilihan Ganda (Benar/Salah)</p>
                                <p v-else class="mb-6">Esai</p>
                            </div>
                        </div>

                        <div class="text-center">
                            <button class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white w-2/3 py-1 rounded-full" @click.prevent="doTest">
                                <i class="fa fa-play mr-2 text-xl"></i>
                                <span class="font-bold text-xl">Mulai</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="w-full h-screen overflow-hidden">
        <p class="text-2xl font-bold text-white ml-5 my-6">{{judulHalaman}}</p>
        <div class="overflow-auto no-scrollbar h-screen w-full relative px-10">
            <Skippable v-if="this.section!=null" :sectionList="this.section"/>
            <div class="w-1 h-28"></div>
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
            section: null,
            sectionId: null,
            testId: null,
            port: import.meta.env.VITE_BACKEND_URL
        }
    },
    methods: {
        doTest(){
            let age =  7 * 24 * 60 * 60 * 1000;
            this.$cookies.set('start_time', Date.now())
            if(this.sectionId==53)
                this.$router.push({path: '/kraepelin'})
            else if(this.testId==20)
                this.$router.push({path: '/gambar'})
            else if(this.testId==21)
                this.$router.push({path: '/hafalan'})
            else
                this.$router.push({path: '/test'})
                // this.$router.push({path: '/epps', query: {current_section: this.$route.query.current_section}})
        }
    },
    created(){
        this.$emit('updateJudul', this.judulHalaman)
    },
    mounted(){
        this.testId = this.$cookies.get('current_test')
        this.sectionId = this.$cookies.get('current_section')
        axios
        .get(this.port+'/section/'+this.sectionId)
        .then(({data}) => (
            this.section = data
        ))
    },
}
</script>

<style>

</style>