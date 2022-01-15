<template>
    <div class="mb-3">
        <p class="text-lg font-bold mb-2">Pilihan Jawaban :</p>
        <div class="text-center h-28">
            <img src="../../assets/jawaban1.png" alt="" class="inline-block h-full">
        </div>
    </div>

    <div class="w-full text-center">
        <div class="inline-block w-full">
            <div class="w-full mb-2">
                <!-- <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'A'" :warna="'bg-blue-500 hover:bg-blue-700'" />
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'B'" :warna="'bg-gray-400 hover:bg-gray-600'" /> -->
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'A'" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'B'" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
            </div>
            <div class="w-full mb-2">
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'C'" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'D'" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                <!-- <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'C'" :warna="'bg-yellow-500 hover:bg-yellow-700'" />
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'D'" :warna="'bg-green-500 hover:bg-green-700'" /> -->
            </div>
            <div class="w-full">
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'E'" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                <!-- <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="'E'" :warna="'bg-red-500 hover:bg-red-700'"/> -->
            </div>
        </div>
    </div>
</template>

<script>
import AnswerButton from '../answerButton.vue'
export default {
    components: {
        AnswerButton
    },
    props: {
        "jawaban": { type: Array, default: [], required: true },
        "noSoal": { type: Number, default: 1, required: true }
    },
    methods: {
        choose(id){
            this.jawaban[this.noSoal-1] = id
        },
    }
}
</script>

<style>

</style>