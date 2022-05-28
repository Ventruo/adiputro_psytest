<template>
    <p class="text-lg font-bold text-left">{{judul}}</p>
    <!-- <div class="rounded-lg bg-background-200 ring-1 ring-inset ring-stroke-100 p-3 my-5 h-56 flex justify-center items-center kolom-soal"> -->
    <div v-if="this.cerita!==''" class="rounded-lg bg-foreground-4-100 ring-1 ring-inset ring-black p-3 my-2 flex justify-center items-center text-white">
        <p class="text-lg md:text-xl text-center">{{cerita}}</p>
    </div>
    <div class="rounded-lg bg-foreground-4-100 ring-1 ring-inset ring-black p-3 my-5 h-56 flex justify-center items-center text-white kolom-soal">
        <!-- <div v-if="jenis === 'add'">
            <textarea name="question" id="question" cols="100" rows="5"
                            class="w-full rounded-xl text-center text-xl bg-transparent outline-none resize-none overflow-x-hidden no-scrollbar
                            border-none placeholder-gray-400" placeholder="Enter Question Here"
                            @change="update"></textarea>
        </div> -->
        <p class="text-lg md:text-xl text-center">{{question}}</p>
    </div>
</template>

<script>
export default {
    props: {
        "question": { type: String, default: "" },
        "cerita": { type: String, default: "" },
        "judul": { type: String, default: '' },
        "jenis": { type: String, default: '' },
    },
    emits: ["updateQuestion"],
    methods: {
        update(){
            this.$emit('updateQuestion', $('#question').val())
        },
        ekspresiStyle(){
            $('.kolom-soal').removeClass('h-56')
            $('.kolom-soal').addClass('h-32')
        },
    },
    mounted(){
        if(this.jenis=="ekspresi") this.ekspresiStyle()
    }
}
</script>