<template>
    <div class="rounded-lg bg-background-200 ring-1 ring-inset ring-stroke-100">
        <div class="mb-5">
            <div class="flex">
                <p class="text-lg font-bold my-2 mx-3">{{judul}}</p>
                <div v-if="jenis === 'add'" class="mt-2">
                    <input type="file" name="imgJawaban" id="" class="mb-2" @change="jawabanChange"> <br>
                </div>
            </div>
            <div class="text-center h-28 py-2">
                <img v-if="jenis === 'add'" :src="urlJawaban" class="inline-block h-full" alt="" id="imgJawaban">
                <img v-else src="../../assets/jawaban1.png" alt="" id="imgJawaban" class="inline-block h-full">
            </div>
        </div>
    </div>

    <div class="w-full text-center">
        <div class="flex gap-3 w-full">
            <AnswerButton :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[0]" />
            <AnswerButton :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[1]" />
            <AnswerButton v-if="numberOfChoices>2" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[2]" />
            <AnswerButton v-if="numberOfChoices>3" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[3]" />
            <AnswerButton v-if="numberOfChoices>4" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :label="choices[4]" />
        </div>
    </div>
</template>

<script>
import AnswerButton from '../answerButton.vue'
export default {
    components: {
        AnswerButton
    },
    emits: ["updateUrl"],
    props: {
        "judul": { type: String, default: '' },
        "jawaban": { type: Array, default: [], required: true },
        "noSoal": { type: Number, default: 1, required: true },
        "numberOfChoices": { type: Number, default: 4, required: true },
        "choices": { type: Array, required: true },
        "jenis": { type: String, default: "" },
        "urlJawaban": { type: String, default: "" },
    },
    data() {
        return{
            url: this.urlJawaban,
        }
    },
    methods: {
        choose(id){
            this.jawaban[this.noSoal-1] = id
        },
        jawabanChange(e){
            var input = e.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.url = e.target.result;
                }
                this.image=input.files[0];
                reader.readAsDataURL(input.files[0]);
                
                var updatedUrl = URL.createObjectURL(this.image);
                this.$emit('updateUrl', updatedUrl)
            }
        },
    }
}
</script>

<style>

</style>