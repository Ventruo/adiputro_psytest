<template>
    <div class="h-full w-9/12 m-auto text-white relative mt-3 overflow-hidden">
        <div class="flex justify-between text-lg font-bold mb-2 relative z-10">
            <p class="text-primary-900">Sisa Waktu : {{('00'+menit).slice(-2)}}:{{('00'+detik).slice(-2)}}</p>
            <div class="flex gap-2">
                <button class="bg-primary-800 hover:bg-blue-800 duration-200 rounded-full px-5 h-8 text-base" @click.prevent="prevSoal">Prev</button>
                <button id="nextBtn" class="bg-primary-800 hover:bg-blue-800 duration-200 rounded-full px-5 h-8 text-base" @click.prevent="nextSoal">Next</button>
            </div>
        </div>

        <div class="relative w-full mb-2">
            <div class="h-8 bg-primary-800 ring-2 ring-inset ring-primary-400 rounded-xl"></div>    
            <div class="h-8 bg-primary-600 rounded-xl absolute top-0" id="progress" style="width: 0px;"></div>
            <div class="w-full text-center absolute top-0">
                <p class="text-center py-1">Soal {{noSoal}}/{{jumSoal}}</p> 
            </div>
        </div>

        <div class="h-auto bg-primary-800 py-2 px-3 rounded-xl mb-2">
            <p class="text-xl font-bold mb-1">Petunjuk :</p>
            <p>
                Pilih salah satu pernyataan yang paling menggambarkan diri anda! 
            </p>
        </div>

        <div id="soal" class="" v-if="pertanyaan!=null">
        <!-- <div id="soal" class=""> -->
            <!-- <TextQuestion :question="pertanyaan[noSoal-1]['instruction']" /> -->
            <TextQuestion :question="'Halo'" />
            <div class="w-full text-center mt-5 bg-primary-800 rounded-xl py-2">
                <div class="inline-block w-full">
                    <div class="w-full mb-2" v-if="this.aksi=='x'">
                        <button  class="py-2 px-10 bg-primary-100 text-primary-900 rounded-full mr-3" @click.prevent="this.aksi='x'">X</button>
                        <button class="py-2 px-10 ring-2 ring inset ring-primary-100 rounded-full mr-3" @click.prevent="this.aksi='o'">O</button>
                    </div>
                    <div class="w-full mb-2" v-else>
                        <button  class="py-2 px-10 ring-2 ring inset ring-primary-100 rounded-full mr-3" @click.prevent="this.aksi='x'">X</button>
                        <button class="py-2 px-10 bg-primary-100 text-primary-900 rounded-full mr-3" @click.prevent="this.aksi='o'">O</button>
                    </div>
                </div>
            </div>
            <div class="w-full text-center mt-5 bg-primary-800 rounded-xl py-2">
                <div class="inline-block w-full">
                    <div class="w-full mb-2">
                        <AnswerButton :jenis="'ekspresi'" :jawaban = jawaban :noSoal = noSoal :label="'A. '+this.pertanyaan[noSoal-1]['option_a']" :aksi= aksi :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                        <AnswerButton :jenis="'ekspresi'" :jawaban = jawaban :noSoal = noSoal :label="'B. '+this.pertanyaan[noSoal-1]['option_b']" :aksi= aksi :warna="'ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                        <AnswerButton :jenis="'ekspresi'" :jawaban = jawaban :noSoal = noSoal :label="'C. '+this.pertanyaan[noSoal-1]['option_c']" :aksi= aksi :warna="'mt-2 ring-2 ring-inset ring-primary-100 hover:bg-primary-100 hover:text-primary-900'" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Transparent Overlay -->
        <!-- <div id="bg" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-primary-800 bg-opacity-90 z-40"></div> -->

        <!-- Countdown -->
        <!-- <div id="counterDiv" class="fixed inset-x-0 w-full h-full flex justify-center items-center top-0 text-white text-9xl font-bold z-50">
            <p id="counter">3</p>
        </div> -->
    </div>
</template>
<script>
import axios from 'axios'
import TextQuestion from '../components/views/textQuestion.vue'
import AnswerButton from '../components/answerButton.vue'

export default {
    components: {
        axios, TextQuestion, AnswerButton
    },
    data () {
        return {
            judulHalaman: 'EPPS',
            noSoal: 1,
            jumSoal: 19,
            menit: 1,
            detik: 0,
            waktu: null,
            aksi: 'x',
            // countdownTimer: null,
            // countdown: 2,
            jawaban: [],
            jawabanFinal: [],
            pertanyaan: null,
            pilihanJawaban: null,
            // section_id: this.$route.query.current_section,
            section_id: 45,
            // test_id: null,
            exam_session: 14
        }
    },
    methods: {
        nextSoal(){
            if (this.noSoal<this.jumSoal){
                this.noSoal++
                if(this.noSoal==this.jumSoal) $('#nextBtn').text('Submit')

                this.progress(true)
            }else{
                var isi = 0
                this.jawaban.forEach(e => { if (e != null) isi++; });
                // isi = this.jumSoal;
                if(isi!=19){
                    Swal.fire({
                        title: 'Ada Pertanyaan yang Belum Dijawab!',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Tetap Submit'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.submitJawaban()
                        }
                    });
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
                            this.submitJawaban()
                        }
                    });
                }
            }
        },
        prevSoal(){
            if (this.noSoal>1){
                this.noSoal--
                if(this.noSoal<this.jumSoal) $('#nextBtn').text('Next')
                
                this.progress(false)
            }
        },
        progress(maju){
            const elements = document.getElementById("progress")
            var interval = setInterval(frame, 50)
            var ctr = 0
            var tambahan = ((1/this.jumSoal)*100)/5
            function frame() {
                if(maju){
                    var width = parseFloat(elements.style.width.replace(/px/,""))+tambahan
                }else{
                    var width = parseFloat(elements.style.width.replace(/px/,""))-tambahan
                }

                if (ctr == 5) {
                    clearInterval(interval)
                } else {
                    elements.style.width = width +'%'
                }
                ctr++
            }
        },
        submitJawaban(){
            for (let i = 0; i < this.jumSoal; i++) {
                this.jawabanFinal[i] = []
                this.jawabanFinal[i]["question_id"] = this.pertanyaan[i]['id']
                if(this.jawaban[i]==undefined) this.jawabanFinal[i]["answer"] = ''
                else{
                    var temp = this.jawaban[i].split(',')
                    var salah = temp[0]==null ? '' : temp[0].substring(0,1)
                    var benar = temp[1]==null ? '' : temp[1].substring(0,1)
                    this.jawabanFinal[i]["answer"] = benar+"&"+salah
                    this.jawabanFinal[i]["answer"] = this.jawabanFinal[i]["answer"].toLowerCase()
                }
                this.jawabanFinal[i] = Object.assign({}, this.jawabanFinal[i]);
            }

            let formData = {
                exam_session: this.exam_session,
                section_id: this.section_id,
                data: this.jawabanFinal
            }

            axios.post('http://127.0.0.1:8888/api/section_result/create',{
                "test_result_id": 59,
                "section_id": this.section_id,
                "exam_session": this.exam_session,
                "start_date": "2022-01-28 15:00:00",
                "finish_date": "2022-01-28 18:00:00"
            })
            .then((response) => {
                axios.post('http://127.0.0.1:8888/api/question_result/createmultiple',formData)
                .then((response) => {
                    axios.post('http://127.0.0.1:8888/api/test_result/calculateresult',{
                        test_id: 7,
                        email: "ivan.christianto@x.com"
                    })
                    .then((response) => {
                        Swal.fire(
                            'Submitted!',
                            'Task Successfully Submitted.',
                            'success'
                        )
                        .then(function(){
                            window.location = '/dashboard'
                        })
                    })
                    // .catch( error => 
                    //     console.log('error: ' + error) 
                    // })
                })
            }).catch( error => { 
                console.log('error: ' + error) 
            });
        }
    },

    created () {
        this.$emit('updateJudul', this.judulHalaman)
        // this.countdownTimer = setInterval(() => {
        //     var element = document.getElementById("counter")
        //     if(this.countdown<4 && this.countdown>0){
        //         element.innerHTML = this.countdown
        //     }else if(this.countdown==0){
        //         element.innerHTML = "GO!!!"
        //     }else if(this.countdown==-1){
        //         element.classList.add("hidden")
        //         document.getElementById("bg").classList.add("hidden")
        //         document.getElementById("counterDiv").classList.add("hidden")
        //         document.getElementById("bg").classList.remove("z-50")
        //         document.getElementById("soal").classList.remove("hidden")
                
        //         clearInterval(this.countdownTimer)
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
                        
                        // Swal.fire({
                        //     title: 'Waktu Habis...',
                        //     icon: 'warning',
                        //     confirmButtonColor: '#3085d6',
                        //     confirmButtonText: 'Kembali ke Dashboard'
                        // }).then((result) => {
                        //     if (result.isConfirmed) {
                        //         this.submitJawaban()
                        //     }
                        // });
                    } 
                }, 1000)
        //     }
        //     this.countdown--
        // },1000)
    },

    beforeDestroy() {
        // clearInterval(this.waktu)
        // clearInterval(this.countdownTimer)
    },

    mounted(){
        axios
        .get('http://127.0.0.1:8888/api/question/all?section_id='+this.section_id)
        .then(({data}) => (
            this.pertanyaan = data,
            this.menit = this.pertanyaan[0]["section"]["duration"],
            this.jawaban = Array(19),
            this.progress(true)
        ))
        
        let thi = this
        $('body').keydown(function(event) {
            if (event.keyCode==37||event.keyCode==65)
                thi.prevSoal()
            else if (event.keyCode==39||event.keyCode==68)
                thi.nextSoal()
        });
    }
}
    
</script>

<style>

</style>