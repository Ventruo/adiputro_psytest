<template>
    <button id="label" :class="[warna]" class="duration-200 py-2 w-5/12 text-xl font-bold rounded-full mr-3 relative" @click.prevent="choose(label)">
        <p>{{label}}</p>
        <i v-if="jawaban[noSoal-1]===label" class="fa fa-check absolute right-3 bottom-2.5 pilihan"></i>
        <!-- {{console.log(warna)}} -->
    </button>
</template>

<script>
export default {
    props: {
        "jawaban": { type: Array, default: [], required: true },
        "noSoal": { type: Number, default: 1, required: true },
        "label": { default: "" },
        "warna": { default: "" },
    },
    methods: {
        choose(id){
            this.jawaban[this.noSoal-1] = id
        },
    },
    created(){
        
    }
}
</script>