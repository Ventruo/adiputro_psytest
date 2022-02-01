<template>
    <div class="bg-primary-800 rounded-xl">
        <div class="mb-3">
            <div class="flex">
                <p class="text-lg font-bold mb-2 mr-3 ml-3 mt-2">{{judul}}</p>
                <div v-if="jenis === 'add'" class="mt-2">
                    <input type="file" name="imgJawaban" id="" class="mb-2" @change="jawabanChange"> <br>
                </div>
            </div>
            <div class="text-center h-28">
                <img v-if="jenis === 'add'" :src="urlJawaban" class="inline-block h-full" alt="" id="imgJawaban">
                <img v-else src="../../assets/jawaban1.png" alt="" id="imgJawaban" class="inline-block h-full">
            </div>
        </div>

        <div class="w-full text-center">
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