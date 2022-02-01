<template>
    <!-- <div class="h-full w-9/12 m-auto text-white relative">
        <div class="mt-5">
            <form action="" enctype="multipart/form-data">
                <div class="flex justify-between mb-3">
                    <div>
                        <label for="" class="mr-2 text-xl font-bold">Pola Terpisah :</label>
                        <input type="file" name="imgSoalPreview" id="" class="mb-2" @change="soalChange"> <br>
                        
                        <div class="h-auto w-[28rem] bg-primary-800 border-2 border-solid border-white mb-3 p-2 rounded-lg">
                            <p class="mb-2">Image Preview:</p>
                            <div class="w-full text-center">
                                <img id="imgSoalPreview" v-if="urlSoal" :src="urlSoal" class="inline-block">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="" class="mr-2 text-xl font-bold">Pilihan Pola :</label>
                        <input type="file" name="" id="" class="mb-2" @change="jawabanChange"> <br>

                        <div class="h-auto w-[28rem] bg-primary-800 border-2 border-solid border-white mb-3 p-2 rounded-lg">
                            <p class="mb-2">Image Preview:</p>
                            <div class="w-full text-center">
                                <img id="imgJawabanPreview" v-if="urlJawaban" :src="urlJawaban" class="inline-block">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex">
                    <p class="mr-2 mb-2 flex items-center text-xl font-bold mr-5">Kunci Jawaban :</p>
                    <div class="flex gap-5">
                        <Radiobutton :label="'A'" :names="'kunci'" />
                        <Radiobutton :label="'B'" :names="'kunci'" />
                        <Radiobutton :label="'C'" :names="'kunci'" />
                        <Radiobutton :label="'D'" :names="'kunci'" />
                        <Radiobutton :label="'E'" :names="'kunci'" />
                    </div>
                </div><br>

                <input type="hidden" name="asd" id="tes" value="123">
                <div class="text-right">
                    <button type="submit" class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 py-2 h-auto w-auto text-lg">Submit</button>
                </div>
            </form>
        </div>
    </div> -->
    <div class="h-full w-9/12 m-auto text-white relative mt-3">
        <div class="flex justify-between mb-2 text-primary-900">
            <h1 class="text-xl font-bold">Add New Question</h1>
            <p class="text-xl font-bold">Image Matching</p>
        </div>

        <div class="relative w-full mb-2">
            <div class="h-8 bg-primary-800 ring-2 ring-inset ring-primary-400 rounded-xl"></div>    
            <div class="h-8 bg-primary-500 rounded-xl absolute top-0" id="progress" style="width: 0px;"></div>
            <div class="w-full text-center absolute top-0">
                <p class="text-center py-1">Soal {{noSoal}}/{{noSoal}}</p> 
            </div>
        </div>

        <div class="h-auto bg-primary-800 py-2 px-3 rounded-xl mb-2" @click="a">
            <p class="text-xl font-bold mb-1">Petunjuk :</p>
            <p>
                Pada gambar di bawah terdapat sebuah pola yang terpisah, pilihlah salah satu gambar dari 5 pilihan di bawah (a, b, c, d, atau e) yang apabila pola di atas digabungkan akan menghasilkan gambar tersebut! 
            </p>
        </div>

        <div id="soal">
            <form action="" enctype="multipart/form-data">
                <ImageQuestion :label="'Pola Terpisah :'" :jenis="'add'" :urlSoal="urlSoal" @updateUrl="updateUrlSoal" />
                <!-- <TextQuestion :jenis="'add'" @updateQuestion="updateQuestion" /> -->
                <ImageAnswer :judul="'Pilihan Jawaban :'" :jenis="'add'" :urlJawaban="urlJawaban" :jawaban = jawaban 
                            :noSoal = noSoal :numberOfChoices = 5 :choices = pilihanJawaban @updateUrl="updateUrlJawaban" />
                <!-- <mChoiceAnswer :jenis="'add'" :jawaban = jawaban :noSoal = noSoal :numberOfChoices = 4 :choices = pilihanJawaban /> -->
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Radiobutton from '../components/radiobutton.vue'
import ImageQuestion from '../components/views/imageQuestion.vue'
import ImageAnswer from '../components/views/imageAnswer.vue'
import TextQuestion from '../components/views/textQuestion.vue'
import mChoiceAnswer from '../components/views/mChoiceAnswer.vue'
export default {
    components: {
        Radiobutton, ImageQuestion, ImageAnswer, TextQuestion, mChoiceAnswer, axios
    },
    data () {
        return {
            judulHalaman: 'Tambah Soal',
            noSoal: 21,
            jawaban: [],
            numberOfChoices: 5,
            pilihanJawaban: ['A','B','C','D','E'],
            urlSoal: null,
            urlJawaban: null,
            question: ''
        }
    },
    methods: {
        soalChange(e){
            var input = e.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.urlSoal = e.target.result;
                }
                this.image=input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        jawabanChange(e){
            var input = e.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.urlJawaban = e.target.result;
                }
                this.image=input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        updateUrlSoal(url){
            this.urlSoal = url
        },
        updateUrlJawaban(url){
            this.urlJawaban = url
        },
        updateQuestion(question){
            this.question = question
        },
        a(){
            alert(this.question)
        }
    },
    created(){
        this.$emit('updateJudul', this.judulHalaman)
    }
}
</script>

<style>

</style>