<template>
    <div class="flex justify-between text-lg font-bold mb-2 relative z-10">
        <p>Sisa Waktu : {{('00'+menit).slice(-2)}}:{{('00'+detik).slice(-2)}}</p>
        <div class="flex gap-2">
            <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 h-8 w-20 text-base" @click.prevent="prevSoal">Prev</button>
            <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 h-8 w-20 text-base" @click.prevent="nextSoal">Next</button>
        </div>
    </div>

    <div class="relative w-full mb-2">
        <div class="h-8 bg-white rounded-xl"></div>    
        <div class="h-8 bg-green-600 rounded-xl absolute top-0" id="progress" style="width: 5%;"></div>
        <div class="w-full text-center absolute top-0">
            <p class="text-center text-black py-1">Soal {{noSoal}}/20</p> 
        </div>
    </div>

    <div class="h-auto bg-primary-500 py-2 px-3 rounded-xl mb-2">
        <p class="text-xl font-bold mb-1">Petunjuk :</p>
        <p>
            Pada gambar di bawah terdapat sebuah pola yang terpisah, pilihlah salah satu gambar dari 5 pilihan di bawah (a, b, c, d, atau e) yang apabila pola di atas digabungkan akan menghasilkan gambar tersebut! 
        </p>
    </div>

    <div class="mb-2">
        <p class="text-lg font-bold mb-2">Pola Terpisah :</p>
        <div class="text-center h-28">
            <img src="../assets/soal1.png" alt="" class="inline-block h-full">
        </div>
    </div>

    <div class="mb-3">
        <p class="text-lg font-bold mb-2">Pilihan Jawaban :</p>
        <div class="text-center h-32">
            <img src="../assets/jawaban1.png" alt="" class="inline-block h-full">
        </div>
    </div>

    <div class="w-full text-center">
        <div class="inline-block">
            <button class="bg-blue-500 hover:bg-blue-700 duration-200 py-10 px-20 text-3xl font-bold rounded-xl mr-3 relative" @click.prevent="choose('chooseA')">
                <p>A</p>
                <i class="fa fa-check absolute right-2 bottom-2 pilihan hidden" id="chooseA"></i>
            </button>
            
            <button class="bg-gray-400 hover:bg-gray-600 duration-200 py-10 px-20 text-3xl font-bold rounded-xl mr-3 relative" @click.prevent="choose('chooseB')">
                <p>B</p>
                <i class="fa fa-check absolute right-2 bottom-2 pilihan hidden" id="chooseB"></i>
            </button>

            <button class="bg-yellow-500 hover:bg-yellow-700 duration-200 py-10 px-20 text-3xl font-bold rounded-xl mr-3 relative" @click.prevent="choose('chooseC')">
                <p>C</p>
                <i class="fa fa-check absolute right-2 bottom-2 pilihan hidden" id="chooseC"></i>
            </button>

            <button class="bg-green-500 hover:bg-green-700 duration-200 py-10 px-20 text-3xl font-bold rounded-xl mr-3 relative" @click.prevent="choose('chooseD')">
                <p>D</p>
                <i class="fa fa-check absolute right-2 bottom-2 pilihan hidden" id="chooseD"></i>
            </button>

            <button class="bg-red-500 hover:bg-red-700 duration-200 py-10 px-20 text-3xl font-bold rounded-xl relative" @click.prevent="choose('chooseE')">
                <p>E</p>
                <i class="fa fa-check absolute right-2 bottom-2 pilihan hidden" id="chooseE"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            noSoal: 1,
            menit: 0,
            detik: 10,
            waktu: null
        }
    },
    methods: {
        nextSoal(){
            if (this.noSoal<20){
                this.noSoal++
                const elements = document.getElementById("progress")
                var interval = setInterval(frame, 50)
                var ctr = 0
                function frame() {
                    var width = parseInt(elements.style.width.replace(/px/,""))+1
                    if (ctr == 5) {
                        clearInterval(interval)
                    } else {
                        elements.style.width = width +'%'
                    }
                    ctr++
                }
            } 
        },
        prevSoal(){
            if (this.noSoal>1){
                this.noSoal--
                const elements = document.getElementById("progress")
                var interval = setInterval(frame, 50)
                var ctr = 0
                function frame() {
                    var width = parseInt(elements.style.width.replace(/px/,""))-1
                    if (ctr == 5) {
                        clearInterval(interval)
                    } else {
                        elements.style.width = width +'%'
                    }
                    ctr++
                }
            }
        },
        choose(id){
            document.getElementById(id).classList.toggle("hidden");

            var list = document.getElementsByClassName("pilihan");
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                if (!item.classList.contains('hidden') && item.id!=id) {
                    item.classList.add('hidden');
                }
            }
        },
    },

    created () {
        this.waktu = setInterval(() => {
            this.detik--
            if (this.detik<0){
                this.detik = 59
                this.menit--
            }
            
            if (this.menit<0){
                this.detik = 0
                this.menit = 0
                clearInterval(this.waktu)
            } 
        }, 1000)
    },

    beforeDestroy() {
        clearInterval(this.waktu)
    },
}
    
</script>

<style>

</style>