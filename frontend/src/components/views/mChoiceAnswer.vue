<template>
    <div class="w-full text-center mt-5 bg-primary-800 rounded-xl py-2">
        <p class="text-lg font-bold mb-2 text-left">{{judul}}</p>
        <div class="inline-block w-full">
            <div class="w-full mb-2">
                <AnswerButton ref="answerA" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[0]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                <AnswerButton ref="answerB" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[1]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
            </div>
            <div class="w-full mb-2">
                <AnswerButton ref="answerC" v-if="numberOfChoices>2" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[2]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                <AnswerButton ref="answerD" v-if="numberOfChoices>3" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[3]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
            </div>
            <div class="w-full" v-if="numberOfChoices>4">
                <AnswerButton ref="answerE" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[4]" :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
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
        "judul": { type: String, default: '' },
        "jenis": { type: String, default: '' },
        "jawaban": { type: Array, default: [], required: true },
        "noSoal": { type: Number, default: 1, required: true },
        "numberOfChoices": { type: Number, default: 4, required: true },
        "choices": { type: Array, required: true },
    },
    methods: {
        choose(id){
            this.jawaban[this.noSoal-1] = id
        },
        keyChoose(id){
            if(id=='a') this.$refs.answerA.choose(this.choices[0])
            else if(id=='b') this.$refs.answerA.choose(this.choices[1])
            else if(id=='c') this.$refs.answerA.choose(this.choices[2])
            else if(id=='d') this.$refs.answerA.choose(this.choices[3])
            else if(id=='e') this.$refs.answerA.choose(this.choices[4])
        }
    }
}
</script>

<style>

</style>