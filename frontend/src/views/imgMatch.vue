<template>
    <div class="h-full w-9/12 m-auto text-white relative mt-3">
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
                Pada gambar di bawah terdapat sebuah pola yang terpisah, pilihlah salah satu gambar dari 5 pilihan di bawah (a, b, c, d, atau e) yang apabila pola di atas digabungkan akan menghasilkan gambar tersebut! 
            </p>
        </div>

        <div id="soal" class="hidden" v-if="pertanyaan!=null">
            <ImageQuestion v-if="pertanyaan[noSoal-1]['instruction_type']==2" :label="'Pola Terpisah :'" />
            <TextQuestion v-else-if="pertanyaan[noSoal-1]['instruction_type']==1" :question="pertanyaan[noSoal-1]['instruction']" />
            
            <ImageAnswer v-if="pertanyaan[noSoal-1]['option_type']==2" :judul="'Pilihan Jawaban :'"  :jawaban = jawaban :noSoal = noSoal :numberOfChoices = 5 :choices = pilihanJawaban />
            <TextAnswer ref="textAnswer" v-else-if="pertanyaan[noSoal-1]['option_type']==1 && pertanyaan[noSoal-1]['option_a']=='-'" :jawaban = jawaban :noSoal = noSoal :jumlahJawaban = jumChoice />
            <mChoiceAnswer v-else-if="pertanyaan[noSoal-1]['option_type']==1 && pertanyaan[noSoal-1]['option_a']!='-'" :jenis="''" :jawaban = jawaban :noSoal = noSoal :numberOfChoices = jumChoice :choices = pilihanJawaban />        
        </div>

        <!-- Transparent Overlay -->
        <div id="bg" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-primary-800 bg-opacity-90 z-40"></div>

        <!-- Countdown -->
        <div id="counterDiv" class="fixed inset-x-0 w-full h-full flex justify-center items-center top-0 text-white text-9xl font-bold z-50">
            <p id="counter">3</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import ImageQuestion from '../components/views/imageQuestion.vue'
import ImageAnswer from '../components/views/imageAnswer.vue'
import TextQuestion from '../components/views/textQuestion.vue'
import TextAnswer from '../components/views/textAnswer.vue'
import mChoiceAnswer from '../components/views/mChoiceAnswer.vue'

export default {
    components: {
        axios,ImageQuestion, ImageAnswer, TextQuestion, mChoiceAnswer, TextAnswer
    },
    data () {
        return {
            judulHalaman: 'Image Matching',
            noSoal: 1,
            jumSoal: 5,
            jumChoice: 5,
            menit: 0,
            detik: 10,
            waktu: null,
            countdownTimer: null,
            countdown: 2,
            jawaban: [],
            jawabanFinal: [],
            pertanyaan: null,
            pilihanJawaban: null,
            section_id: this.$route.query.current_section,
            test_id: null,
            exam_session: 3
        }
    },
    methods: {
        nextSoal(){
            if (this.noSoal<this.jumSoal){
                this.noSoal++
                if(this.noSoal==this.jumSoal) $('#nextBtn').text('Submit')

                this.progress(true)

                if(this.pertanyaan[this.noSoal-1]['option_type']==1 && this.pertanyaan[this.noSoal-1]['option_a']=='-')
                    this.$refs.textAnswer.resetText(this.jawaban[this.noSoal-1])
            }else{
                var isi = 0
                this.jawaban.forEach(e => { if (e != null) isi++; });
                // isi = this.jumSoal;
                if(isi!=this.jumSoal){
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
            // this.gantiPilihanJawaban()
        },
        prevSoal(){
            if (this.noSoal>1){
                this.noSoal--
                if(this.noSoal<this.jumSoal) $('#nextBtn').text('Next')

                this.progress(false)
                
                if(this.pertanyaan[this.noSoal-1]['option_type']==1 && this.pertanyaan[this.noSoal-1]['option_a']=='-')
                    this.$refs.textAnswer.resetText(this.jawaban[this.noSoal-1])
            }
            // this.gantiPilihanJawaban()
        },
        gantiPilihanJawaban(){
            this.pilihanJawaban = [
                'A. '+this.pertanyaan[this.noSoal-1]['option_a'],
                'B. '+this.pertanyaan[this.noSoal-1]['option_b'],
                'C. '+this.pertanyaan[this.noSoal-1]['option_c'],
                'D. '+this.pertanyaan[this.noSoal-1]['option_d'],
                'E. '+this.pertanyaan[this.noSoal-1]['option_e'],
            ]
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
            this.jawaban = Array(225)
        },
        submitJawaban(){
            for (let i = 0; i < this.jumSoal; i++) {
                this.jawabanFinal[i] = []
                this.jawabanFinal[i]["question_id"] = this.pertanyaan[i]['id']
                if(this.pertanyaan[this.noSoal-1]['option_type']==1 && this.pertanyaan[this.noSoal-1]['option_a']=='-')
                    this.jawabanFinal[i]["answer"] = this.jawaban[i];
                else if(this.jumChoice==2)
                    this.jawabanFinal[i]["answer"] = this.jawaban[i]!=null ? this.jawaban[i].substring(3,4):'';
                else
                    this.jawabanFinal[i]["answer"] = this.jawaban[i]!=null ? this.jawaban[i].substring(0,1):'';
                this.jawabanFinal[i] = Object.assign({}, this.jawabanFinal[i]);
            }

            let formData = {
                exam_session: this.exam_session,
                section_id: this.section_id,
                data: this.jawabanFinal
            }

            axios.post('http://127.0.0.1:8888/api/section_result/create',{
                "test_result_id": 3,
                "section_id": this.section_id,
                "exam_session": this.exam_session,
                "start_date": "2022-01-28 15:00:00",
                "finish_date": "2022-01-28 18:00:00"
            })
            .then((response) => {
                axios.post('http://127.0.0.1:8888/api/question_result/createmultiple',formData)
                .then((response) => {
                    axios.post('http://127.0.0.1:8888/api/test_result/calculateresult',{
                        test_id: this.test_id,
                        email: "coba@coba.com"
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
                        
                        Swal.fire({
                            title: 'Waktu Habis...',
                            icon: 'warning',
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Kembali ke Dashboard'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                this.submitJawaban()
                            }
                        });
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
        axios
        .get('http://127.0.0.1:8888/api/question/all?section_id='+this.section_id)
        .then(({data}) => (
            this.pertanyaan = data,
            // this.menit = this.pertanyaan[0]["section"]["duration"],
            this.jumSoal = this.pertanyaan.length,
            this.gantiPilihanJawaban(),
            this.progress(true)
        ))

        axios
        .get('http://127.0.0.1:8888/api/section/'+this.section_id)
        .then(({data}) => (
            this.jumChoice = data.option_num,
            this.test_id = data.test_id
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