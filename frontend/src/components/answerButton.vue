<template>
    <button id="label" class="duration-200 py-2 w-full h-40 text-xl rounded-lg bg-background-200 hover:bg-background-300 font-semibold 
                ring-1 ring-inset ring-stroke-100 relative answer-btn" @click.prevent="choose(label)">
        <div v-if="jenis === 'add'" class="flex justify-center px-4">
            <p>{{label}}.</p>
            <input type="text" name="question" id="question" class="w-full ml-2 text-xl bg-transparent outline-none
                                                    placeholder-white border-none" placeholder="Answer">
            <i v-if="jawaban[noSoal-1]===label" class="fa fa-check absolute right-3 bottom-2.5 pilihan"></i>
        </div>
        <div v-else-if="jenis === 'ekspresi'">
            <p>{{label}}</p>
            <i v-if="jawaban[noSoal-1]!=null && jawaban[noSoal-1].split(',')[0]===label+'x'" class="fa fa-x absolute right-3 bottom-1/3 pilihan"></i>
            <i v-else-if="jawaban[noSoal-1]!=null && jawaban[noSoal-1].split(',')[1]===label+'o'" class="far fa-circle absolute right-3 bottom-1/3 pilihan"></i>
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
        "aksi": { type: String, default: 'x' },
        "label": { default: "" },
        "warna": { default: "" },
    },
    methods: {
        choose(id){
            if (this.jenis=="ekspresi"){
                if(this.jawaban[this.noSoal-1]==null){
                    if(this.aksi=='x') this.jawaban[this.noSoal-1] = id+'x,'
                    else if(this.aksi=='o') this.jawaban[this.noSoal-1] = ','+id+'o'
                }else{
                    var temp = this.jawaban[this.noSoal-1].split(',')
                    if(this.aksi=='x' && temp[1]!=id+'o') this.jawaban[this.noSoal-1] = id+'x,'+temp[1]
                    else if(this.aksi=='o' && temp[0]!=id+'x') this.jawaban[this.noSoal-1] = temp[0]+','+id+'o'
                }
            }else this.jawaban[this.noSoal-1] = id
        },
        eppsStyle(){
            $('.answer-btn').removeClass('w-5/12 mr-3 rounded-full text-lg')
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