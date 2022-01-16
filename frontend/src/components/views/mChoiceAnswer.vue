<template>
    <div class="w-full text-center mt-5">
        <div class="inline-block w-full">
            <div class="w-full mb-2">
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="choices[0]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="choices[1]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
            </div>
            <div class="w-full mb-2">
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="choices[2]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                <AnswerButton v-if="numberOfChoices>3" :jawaban = jawaban :noSoal = noSoal :label="choices[3]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
            </div>
            <div class="w-full" v-if="numberOfChoices>4">
                <AnswerButton :jawaban = jawaban :noSoal = noSoal :label="choices[4]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
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
        "noSoal": { type: Number, default: 1, required: true },
        "numberOfChoices": { type: Number, default: 4, required: true },
        "choices": { type: Array, required: true },
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