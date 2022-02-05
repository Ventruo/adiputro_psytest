<template>
    <div class="w-full text-center mt-5">
        <div v-if="jumlahJawaban==1">
            <input type="text" name="" id="answer" class="bg-primary-800 rounded-xl text-center rounded-xl px-5 py-2 w-full text-lg
            outline-none border-none placeholder-gray-400" placeholder="Jawab Di Sini" @change="ngisi">
        </div>
        <div v-if="jumlahJawaban==2" class="flex gap-2 justify-center">
            <input type="text" name="" id="answer" class="bg-primary-800 rounded-xl text-center rounded-xl px-5 py-2 w-1/3 text-lg
            outline-none border-none placeholder-gray-400" placeholder="Jawab Di Sini" @change="ngisi">
            <input type="text" name="" id="answer2" class="bg-primary-800 rounded-xl text-center rounded-xl px-5 py-2 w-1/3 text-lg
            outline-none border-none placeholder-gray-400" placeholder="Jawab Di Sini" @change="ngisi">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        "jawaban": { type: Array, default: [], required: true },
        "noSoal": { type: Number, default: 1, required: true },
        "jumlahJawaban": { type: Number, default: 1, required: true },
    },
    methods: {
        ngisi(){
            if(this.jumlahJawaban>1)
                this.jawaban[this.noSoal-1] = $('#answer').val() + '&' + $('#answer2').val() 
            else
                this.jawaban[this.noSoal-1] = $('#answer').val()
        },
        resetText(answer){
            $('#answer').val(answer)
            $('#answer').focus()
        }
    }
}
</script>

<style>

</style>