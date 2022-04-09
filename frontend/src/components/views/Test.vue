<template>
    <h1 class="text-black text-2xl font-bold mt-7">Tes Belum Diselesaikan</h1>
    <div class="w-auto h-auto mt-2">
        <div class="h-56 w-60 mb-2 mr-2 inline-block align-top relative overflow-hidden cursor-pointer" v-for="(tes, i) in this.testList" :key="i">
            <div class="w-full h-full bg-white ring-1 ring-inset ring-stroke-200 rounded-lg overflow-hidden" @click="this.$router.push({path: '/section', query: {current_test: tes[0]}})">
                <div class="h-1/3 w-full bg-no-repeat bg-center" style="background-image: url('https://i.pinimg.com/originals/34/25/ba/3425baae5208366016cecb54cc16da61.jpg');"></div>
                <div class="h-2/3 w-full px-5 py-2 text-black flex items-center justify-center">
                    <div class="text-3xl">
                        <i class="fas fa-file-alt mr-2"></i>
                        <span class="font-bold">Tes {{abjad[i]}}</span>
                    </div>
                    <!-- <div class="flex">
                        <div class="mr-2 inline-block">
                            <i class="fas fa-question-circle"></i> <br>
                            <i class="fas fa-clock"></i> <br>
                            <i class="fa fa-check"></i> <br>
                        </div>
                        <div>
                            <p>{{section.question_num}} Pertanyaan</p>

                            <p v-if="section.duration!=-1">{{section.duration}} Menit</p>
                            <p v-else>Tidak ada batas waktu</p>
                            
                            <p v-if="section.section_type==1" class="mb-6">Esai</p>
                            <p v-else-if="section.option_num==5">Pilihan Ganda (A - E)</p>
                            <p v-else-if="section.option_num==4">Pilihan Ganda (A - D)</p>
                            <p v-else-if="section.option_num==3">Pilihan Ganda (A - C)</p>
                            <p v-else-if="section.option_num==2">Pilihan Ganda (Benar/Salah)</p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            abjad: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        }
    },
    props: {
        "testList": { type: Array, default: [], required: true },
    },
}
</script>

<style>

</style>