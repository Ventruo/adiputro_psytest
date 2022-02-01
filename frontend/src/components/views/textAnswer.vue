<template>
    <div class="w-full text-center mt-5">
        <input type="text" name="" id="answer" class="bg-primary-800 rounded-xl text-center rounded-xl px-5 py-2 w-full text-lg
        outline-none border-none placeholder-gray-400" placeholder="Jawab Di Sini" @change="ngisi">
    </div>
</template>

<script>
export default {
    props: {
        "jawaban": { type: Array, default: [], required: true },
        "noSoal": { type: Number, default: 1, required: true },
    },
    methods: {
        ngisi(){
            this.jawaban[this.noSoal-1] = $('#answer').val()
        },
        resetText(answer){
            $('#answer').val(answer)
        }
    }
}
</script>

<style>

</style>