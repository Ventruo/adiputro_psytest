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

    <div id="soal" class="hidden">
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
                <button class="bg-blue-500 hover:bg-blue-700 duration-200 py-10 px-20 text-3xl font-bold rounded-xl mr-3 relative" @click.prevent="choose('A')">
                    <p>A</p>
                    <i v-if="jawaban[noSoal-1]==='A'" class="fa fa-check absolute right-2 bottom-2 pilihan"></i>
                </button>
                
                <button class="bg-gray-400 hover:bg-gray-600 duration-200 py-10 px-20 text-3xl font-bold rounded-xl mr-3 relative" @click.prevent="choose('B')">
                    <p>B</p>
                    <i v-if="jawaban[noSoal-1]==='B'" class="fa fa-check absolute right-2 bottom-2 pilihan"></i>
                </button>

                <button class="bg-yellow-500 hover:bg-yellow-700 duration-200 py-10 px-20 text-3xl font-bold rounded-xl mr-3 relative" @click.prevent="choose('C')">
                    <p>C</p>
                    <i v-if="jawaban[noSoal-1]==='C'" class="fa fa-check absolute right-2 bottom-2 pilihan"></i>
                </button>

                <button class="bg-green-500 hover:bg-green-700 duration-200 py-10 px-20 text-3xl font-bold rounded-xl mr-3 relative" @click.prevent="choose('D')">
                    <p>D</p>
                    <i v-if="jawaban[noSoal-1]==='D'" class="fa fa-check absolute right-2 bottom-2 pilihan"></i>
                </button>

                <button class="bg-red-500 hover:bg-red-700 duration-200 py-10 px-20 text-3xl font-bold rounded-xl relative" @click.prevent="choose('E')">
                    <p>E</p>
                    <i v-if="jawaban[noSoal-1]==='E'" class="fa fa-check absolute right-2 bottom-2 pilihan"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Transparent Overlay -->
    <div id="bg" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-primary-800 bg-opacity-90 z-40"></div>

    <!-- Countdown -->
    <div id="counterDiv" class="fixed inset-x-0 w-full h-full flex justify-center items-center top-0 text-white text-9xl font-bold z-50">
        <p id="counter">Ready???</p>
    </div>
</template>
<script>
export default {
    data () {
        return {
            noSoal: 1,
            menit: 6,
            detik: 0,
            waktu: null,
            countdownTimer: null,
            countdown: 4,
            jawaban: []
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
            this.jawaban[this.noSoal-1] = id
        },
    },

    created () {
        this.countdownTimer = setInterval(() => {
            var element = document.getElementById("counter")
            if(this.countdown<4 && this.countdown>0){
                element.innerHTML = this.countdown
            }else if(this.countdown==0){
                element.innerHTML = "GO!!!"
            }else if(this.countdown==-1){
                element.classList.add("hidden")
                document.getElementById("bg").classList.add("hidden")
                document.getElementById("counterDiv").classList.add("hidden")
                document.getElementById("bg").classList.remove("z-50")
                document.getElementById("soal").classList.remove("hidden")
                
                clearInterval(this.countdownTimer)
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
            }
            this.countdown--
        },1000)
    },

    beforeDestroy() {
        clearInterval(this.waktu)
        clearInterval(this.countdownTimer)
    },
}
    
</script>

<style>

</style>