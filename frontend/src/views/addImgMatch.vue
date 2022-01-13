<template>
    <div class="mt-5">
        <div class="flex justify-between mb-5">
            <h1 class="text-3xl font-bold">Add New Question</h1>
            <p class="text-3xl font-bold">Image Matching</p>
        </div>
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
</template>

<script>
import Radiobutton from '../components/radiobutton.vue'
export default {
    components: {
        Radiobutton
    },
    data () {
        return {
            urlSoal: null,
            urlJawaban: null
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
    },
}
</script>

<style>

</style>