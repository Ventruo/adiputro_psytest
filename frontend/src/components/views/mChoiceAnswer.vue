<template>
    <div class="w-full">
        <p class="text-lg font-bold mb-2">{{judul}}</p>
        <div class="flex gap-3 w-full" v-if="numberOfChoices==2">
            <AnswerButton ref="answerA" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[0]" />
            <AnswerButton ref="answerB" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[1]" />
        </div>
        <div class="md:flex gap-3 w-full" v-else-if="numberOfChoices<=5">
            <AnswerButton ref="answerA" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[0]" />
            <AnswerButton ref="answerB" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[1]" />
            <AnswerButton ref="answerC" v-if="numberOfChoices>2" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[2]" />
            <AnswerButton ref="answerD" v-if="numberOfChoices>3" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[3]" />
            <AnswerButton ref="answerE" v-if="numberOfChoices>4" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[4]" />
        </div>
        <div class="md:flex gap-3 w-full" v-else>
            <div v-for="(i,idx) in numberOfChoices" :key="idx" class="w-full">
                <AnswerButton :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[idx]" />
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