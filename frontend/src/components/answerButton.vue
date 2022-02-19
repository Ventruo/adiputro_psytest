<template>
    <button id="label" :class="[warna]" class="duration-200 py-2 w-5/12 text-xl rounded-full mr-3 relative answer-btn" @click.prevent="choose(label)">
        <div v-if="jenis === 'add'" class="flex justify-center px-4">
            <p>{{label}}.</p>
            <input type="text" name="question" id="question" class="w-full ml-2 text-xl bg-transparent outline-none
                                                    placeholder-white border-none" placeholder="Answer">
            <i v-if="jawaban[noSoal-1]===label" class="fa fa-check absolute right-3 bottom-2.5 pilihan"></i>
        </div>
        <div v-else>
            <p>{{label}}</p>
            <i v-if="jawaban[noSoal-1]===label" class="fa fa-check absolute right-3 bottom-1/3 pilihan"></i>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        "jawaban": { type: Array, default: [], required: true },
        "noSoal": { type: Number, default: 1, required: true },
        "jenis": { type: String, default: '', required: true },
        "label": { default: "" },
        "warna": { default: "" },
    },
    methods: {
        choose(id){
            this.jawaban[this.noSoal-1] = id
        },
        eppsStyle(){
            $('.answer-btn').removeClass('w-5/12 mr-3 rounded-full text-xl')
            $('.answer-btn').addClass('w-1/2 text-left pl-5')
        }
    },
    created(){
        
    },
    mounted(){
        if(this.jenis=="epps") this.eppsStyle()
    }
}
</script>