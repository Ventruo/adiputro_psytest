<template>
    <div class="flex justify-between text-lg font-bold mb-2 relative z-10">
        <p>Sisa Waktu : {{('00'+menit).slice(-2)}}:{{('00'+detik).slice(-2)}}</p>
        <div class="flex gap-2">
            <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 h-8 w-20 text-base" @click.prevent="prevSoal">Prev</button>
            <button id="nextBtn" class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 h-8 w-20 text-base" @click.prevent="nextSoal">Next</button>
        </div>
    </div>

    <div class="relative w-full mb-2">
        <div class="h-8 bg-primary-600 ring-2 ring-inset ring-primary-400 rounded-xl"></div>    
        <div class="h-8 bg-primary-400 rounded-xl absolute top-0" id="progress" style="width: 0px;"></div>
        <div class="w-full text-center absolute top-0">
            <p class="text-center py-1">Soal {{noSoal}}/{{jumSoal}}</p> 
        </div>
    </div>

    <div class="h-auto bg-primary-500 py-2 px-3 rounded-xl mb-2">
        <p class="text-xl font-bold mb-1">Petunjuk :</p>
        <p>
            Pada gambar di bawah terdapat sebuah pola yang terpisah, pilihlah salah satu gambar dari 5 pilihan di bawah (a, b, c, d, atau e) yang apabila pola di atas digabungkan akan menghasilkan gambar tersebut! 
        </p>
    </div>

    <div id="soal" class="hidden">
        <!-- <ImageQuestion :label="'Pola Terpisah :'" /> -->
        <TextQuestion :question="'Nuri : Burung  = Sepat : ?'" />
        <!-- <ImageAnswer :jawaban = jawaban :noSoal = noSoal :numberOfChoices = 5 :choices = pilihanJawaban /> -->
        <mChoiceAnswer :jawaban = jawaban :noSoal = noSoal :numberOfChoices = 4 :choices = pilihanJawaban />
        <!-- <TextAnswer ref="textAnswer" :jawaban = jawaban :noSoal = noSoal /> -->
    </div>

    <!-- Transparent Overlay -->
    <div id="bg" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-primary-800 bg-opacity-90 z-40"></div>

    <!-- Countdown -->
    <div id="counterDiv" class="fixed inset-x-0 w-full h-full flex justify-center items-center top-0 text-white text-9xl font-bold z-50">
        <p id="counter">3</p>
    </div>
</template>
<script>
import ImageQuestion from '../components/views/imageQuestion.vue'
import ImageAnswer from '../components/views/imageAnswer.vue'
import TextQuestion from '../components/views/textQuestion.vue'
import TextAnswer from '../components/views/textAnswer.vue'
import mChoiceAnswer from '../components/views/mChoiceAnswer.vue'

export default {
    components: {
        ImageQuestion, ImageAnswer, TextQuestion, mChoiceAnswer, TextAnswer
    },
    data () {
        return {
            noSoal: 1,
            jumSoal: 5,
            menit: 6,
            detik: 0,
            waktu: null,
            countdownTimer: null,
            countdown: 2,
            jawaban: [],
            pilihanJawaban: [
                'A. Mangkuk', 'B. Ikan', 'C. Aquarium', 'D. Merah'
            ]
        }
    },
    methods: {
        nextSoal(){
            if (this.noSoal<this.jumSoal){
                this.noSoal++
                if(this.noSoal==this.jumSoal) $('#nextBtn').text('Finish')

                const elements = document.getElementById("progress")
                var interval = setInterval(frame, 50)
                var ctr = 0
                var tambahan = ((1/this.jumSoal)*100)/5
                function frame() {
                    var width = parseInt(elements.style.width.replace(/px/,""))+tambahan
                    if (ctr == 5) {
                        clearInterval(interval)
                    } else {
                        elements.style.width = width +'%'
                    }
                    ctr++
                }
                this.$refs.textAnswer.resetText(this.jawaban[this.noSoal-1])
            }else{
                Swal.fire({
                    title: 'Submit This Task?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Submitted!',
                            'Task Successfully Submitted.',
                            'success'
                        )
                        .then(function(){
                            window.location = '/'
                        })
                    }
                });
            }
        },
        prevSoal(){
            if (this.noSoal>1){
                this.noSoal--
                const elements = document.getElementById("progress")
                var interval = setInterval(frame, 50)
                var ctr = 0
                var tambahan = ((1/this.jumSoal)*100)/5
                function frame() {
                    var width = parseInt(elements.style.width.replace(/px/,""))-tambahan
                    if (ctr == 5) {
                        clearInterval(interval)
                    } else {
                        elements.style.width = width +'%'
                    }
                    ctr++
                }
                this.$refs.textAnswer.resetText(this.jawaban[this.noSoal-1])
            }
        }
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

    mounted(){
        const elements = document.getElementById("progress")
        var interval = setInterval(frame, 50)
        var ctr = 0
        var tambahan = ((1/this.jumSoal)*100)/5
        function frame() {
            var width = parseInt(elements.style.width.replace(/px/,""))+tambahan
            if (ctr == 5) {
                clearInterval(interval)
            } else {
                elements.style.width = width +'%'
            }
            ctr++
        }
    }
}
    
</script>

<style>

</style>