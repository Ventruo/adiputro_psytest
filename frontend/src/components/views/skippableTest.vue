<template>
    <h1 class="text-primary-900 text-2xl font-bold mt-3">Belum Diselesaikan</h1>
    <div class="w-auto h-auto mt-2">
        <div class="h-56 w-48 mb-2 mr-2 inline-block align-top relative overflow-hidden" v-for="(section, idx) in this.sectionList" :key="idx">
            <div class="w-full h-24 bg-primary-900 px-2 py-1 hover:h-56 duration-500 group">
                <div class="mb-1">
                    <i class="fas fa-file-alt mr-2"></i>
                    <span class="text-lg font-bold">Tes {{idx+1}}</span>
                </div>
                <hr class="mb-1">
                <div class="p-2 flex -mt-28 content opacity-0 relative group-hover:opacity-100 group-hover:mt-0 duration-700">
                    <div class="mr-2 inline-block">
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
                <div class="text-center mt-2">
                    <button class="ring-2 ring-inset ring-white hover:bg-primary-300 hover:text-primary-900 hover:ring-primary-300
                                    duration-300 px-3 py-2 rounded-full"
                                    @click="this.$router.push({path: '/preExam', query: {current_section: section.id}})">Kerjakan Tes Ini</button>
                </div>
            </div>
        </div>

        <div class="h-56 w-48 mb-2 mr-2 inline-block align-top relative overflow-hidden">
            <div class="w-full h-24 bg-primary-700 px-2 py-1 hover:h-56 duration-500 group">
                <div class="mb-1">
                    <i class="fas fa-file-alt mr-2"></i>
                    <span class="text-lg font-bold">Biodata</span>
                </div>
                <hr class="mb-1">
                <div class="p-2 flex -mt-28 content opacity-0 relative group-hover:opacity-100 group-hover:mt-0 duration-700">
                    <p>Tekan tombol "Isi Biodata" untuk menuju ke form pengisian data diri</p>
                </div>
                <div class="text-center mt-2">
                    <button class="ring-2 ring-inset ring-white hover:bg-primary-300 hover:text-primary-900 hover:ring-primary-300
                                    duration-200 px-3 py-2 rounded-full"
                                    @click="this.$router.push({path: '/biodata'})">Isi Biodata</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        "sectionList": { type: Array, default: [], required: true },
    },
}
</script>

<style>

</style>