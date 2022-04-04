<template>
    <div class="w-full text-center mt-5">
        <div v-if="jumlahJawaban==1">
            <input type="text" name="" id="answer" class="text-center text-white rounded-lg bg-foreground-4-100 ring-1 ring-inset ring-stroke-100
            px-5 py-2 w-full text-lg outline-none placeholder-gray-300" placeholder="Jawab Di Sini" @keyup="ngisi">
        </div>
        <div v-if="jumlahJawaban==2" class="flex gap-2 justify-center">
            <!-- <input type="text" name="" id="answer" class="text-center rounded-lg bg-background-200 ring-1 ring-inset ring-stroke-100
            px-5 py-2 w-full text-lg outline-none placeholder-stroke-100" placeholder="Jawaban pertama" @keyup="ngisi">
            <input type="text" name="" id="answer2" class="text-center rounded-lg bg-background-200 ring-1 ring-inset ring-stroke-100
            px-5 py-2 w-full text-lg outline-none placeholder-stroke-100" placeholder="Jawaban kedua" @keyup="ngisi"> -->
            
            <input type="text" name="" id="answer" class="text-center text-white rounded-lg bg-foreground-4-100 ring-1 ring-inset ring-black
            px-5 py-2 w-full text-lg outline-none placeholder-gray-300" placeholder="Jawaban pertama" @keyup="ngisi">
            <input type="text" name="" id="answer2" class="text-center text-white rounded-lg bg-foreground-4-100 ring-1 ring-inset ring-black
            px-5 py-2 w-full text-lg outline-none placeholder-gray-300" placeholder="Jawaban kedua" @keyup="ngisi">
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
            if(this.jumlahJawaban>1){
                if(answer!=null){
                    var temp = answer.split("&")
                    $('#answer').val(temp[0])
                    $('#answer2').val(temp[1])
                }else{
                    $('#answer').val("")
                    $('#answer2').val("")
                }
            }
            else
                $('#answer').val(answer)
            
            $('#answer').focus()
        }
    }
}
</script>

<style>

</style>