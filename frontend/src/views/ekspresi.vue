<template>
    <div class="h-full w-9/12 m-auto relative mt-3 overflow-hidden">
        <div class="flex justify-between mb-7">
            <h1 class="text-white text-3xl text-center font-bold mt-2">{{namaTes}}</h1>
            <div class="flex justify-center">
                <img src="../assets/logo.png" alt="" class="w-20">
            </div>
        </div>

        <div v-show="isStarted">
            <div class="flex justify-between items-center text-lg font-bold mb-5 relative">
                <p>Sisa Waktu : {{('00'+menit).slice(-2)}}:{{('00'+detik).slice(-2)}}</p>
                <button id="btnDaftarSoal" class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white duration-200 rounded-full px-5 py-1 font-bold">
                    <i class="fa fa-th-large mr-3" id="btnDaftarSoal2"></i>
                    <span id="btnDaftarSoal3">Daftar Soal</span>
                </button>
            </div>

            <div v-show="tampilDaftarSoal" class="relative z-10" id="daftarSoal">
                <div class="absolute bg-foreground-4-100 h-auto max-h-96 w-1/4 pl-3 py-2 overflow-auto no-scrollbar rounded-lg right-0 -top-14">
                    <div class="font-bold text-lg mb-2 text-white">
                        <i class="fa fa-th-large mr-3"></i>
                        <span>Daftar Soal</span>
                    </div>
                    <div v-for="i in jumSoal" :key="i" class="inline-block">
                        <button v-if="jawaban[i-1]!=null" id="btnNoSoal" class="bg-foreground-4-200 ring-2 ring-inset ring-gray-500 text-white hover:bg-foreground-4-200 duration-200 rounded-lg w-10 h-10 mr-3 mb-3 font-bold" @click.prevent="lompatSoal(i)">
                            {{i}}
                        </button>
                        <button v-else id="btnNoSoal" class="bg-background-400 hover:bg-background-300 duration-200 rounded-lg w-10 h-10 mr-3 mb-3 font-bold" @click.prevent="lompatSoal(i)">
                            {{i}}
                        </button>
                    </div>
                </div>
            </div>

            <div class="relative w-full mb-2">
                <div class="h-8 bg-foreground-4-100 ring-1 ring-inset ring-black rounded-xl overflow-x-hidden">
                    <div class="h-8 bg-foreground-3-300 ring-1 ring-inset ring-black" id="progress" style="width: 0px;"></div>
                </div>    
                <div class="w-full text-center absolute top-0">
                    <p class="text-center py-1 text-white font-bold">Pertanyaan {{noSoal}}/{{jumSoal}}</p> 
                </div>
            </div>

            <div class="rounded-lg bg-foreground-4-100 ring-1 ring-inset ring-stroke-100
                        p-3 my-5 h-16 flex justify-center items-center text-xl text-white font-bold">
                Pilih X sebelum memilih pernyataan yang paling jelek, Pilih O sebelum memilih pernyataan yang paling baik.
            </div>

            <div id="soal" class="" v-if="pertanyaan!=null">
            <!-- <div id="soal" class=""> -->
                <!-- <TextQuestion :question="pertanyaan[noSoal-1]['instruction']" /> -->
                <TextQuestion :question="'Halo'" :jenis="'ekspresi'"/>
                <div class="w-full text-center mt-5 py-2">
                    <div class="inline-block w-full">
                        <div class="w-full mb-2" v-if="this.aksi=='x'">
                            <button class="py-2 px-10 bg-foreground-4-100 text-white rounded-lg mr-3 font-bold text-xl" @click.prevent="this.aksi='x'">X</button>
                            <button class="py-2 px-10 bg-background-200 ring-2 ring-inset ring-stroke-100 rounded-lg mr-3 font-bold text-xl" @click.prevent="this.aksi='o'">O</button>
                        </div>
                        <div class="w-full mb-2" v-else>
                            <button class="py-2 px-10 bg-background-200 ring-2 ring-inset ring-stroke-100 rounded-lg mr-3 font-bold text-xl" @click.prevent="this.aksi='x'">X</button>
                            <button class="py-2 px-10 bg-foreground-4-100 text-white rounded-lg mr-3 font-bold text-xl" @click.prevent="this.aksi='o'">O</button>
                        </div>
                    </div>
                </div>
                <div class="w-full mt-3">
                    <div class="w-full flex gap-3">
                        <AnswerButton :jenis="'ekspresi'" :jawaban = jawaban :noSoal = noSoal :label="'A. '+this.pertanyaan[noSoal-1]['option_a']" :aksi= aksi />
                        <AnswerButton :jenis="'ekspresi'" :jawaban = jawaban :noSoal = noSoal :label="'B. '+this.pertanyaan[noSoal-1]['option_b']" :aksi= aksi />
                        <AnswerButton :jenis="'ekspresi'" :jawaban = jawaban :noSoal = noSoal :label="'C. '+this.pertanyaan[noSoal-1]['option_c']" :aksi= aksi />
                    </div>
                </div>

                <div class="flex justify-between mt-2">
                    <button class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white duration-200 rounded-full px-5 py-1 font-bold text-xl" @click.prevent="prevSoal">
                        <i class="fa fa-chevron-left mr-3"></i>
                        <span>Sebelumnya</span>
                    </button>
                    <button class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white duration-200 rounded-full px-5 py-1 font-bold text-xl" @click.prevent="nextSoal">
                        <span id="nextBtn">Selanjutnya</span>
                        <i class="fa fa-chevron-right ml-3"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Transparent Overlay -->
        <div id="bg" v-show="!isStarted" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-foreground-4-100 bg-opacity-60 z-40"></div>

        <!-- Countdown -->
        <div id="klikAnywhere" v-show="!isStarted" class="fixed inset-x-0 w-full h-full flex justify-center items-center top-0 text-white text-5xl font-bold z-50"
            @click.prevent="mulai">
            Klik dimanapun untuk memulai
        </div>
        <div id="spinner-modal" class="fixed top-0 left-0 w-screen h-screen flex items-center bg-foreground-3-500 bg-opacity-70 justify-center z-20" style="display: none">
            <i class="fas fa-spinner animate-spin fa-7x inline-block text-foreground-4-100"></i>
        </div>
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
            namaTes: 'Tes Ekspresi',
            judulHalaman: 'EPPS',
            noSoal: 1,
            jumSoal: 19,
            menit: 1,
            detik: 0,
            waktu: null,
            aksi: 'x',
            jawaban: [],
            jawabanFinal: [],
            pertanyaan: null,
            pilihanJawaban: null,
            section_id: null,
            test_id: null,
            email: null,
            exam_session: null,
            test_result_id: null,
            port: import.meta.env.VITE_BACKEND_URL,
            isStarted: false,
            tampilDaftarSoal: false,
        }
    },
    methods: {
         mulai(){
            this.isStarted = true
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
        },
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
        lompatSoal(idx){
            this.noSoal = idx
            const elements = document.getElementById("progress")
            var width = ((this.noSoal/this.jumSoal)*100)
            elements.style.width = width +'%'
            
            if (this.noSoal<this.jumSoal) $('#nextBtn').text('Selanjutnya')
            else $('#nextBtn').text('Submit')
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

            axios.post(this.port+'/section_result/create',{
                "test_result_id": this.test_result_id,
                "section_id": this.section_id,
                "exam_session": this.exam_session,
                "start_date": parseInt(this.$cookies.get("start_time")),
                "finish_date": Date.now()
            })
            .then((response) => {
                axios.post(this.port+'/question_result/createmultiple',formData)
                .then((response) => {
                    axios.post(this.port+'/test_result/calculateresult',{
                        test_id: this.test_id,
                        email: this.email
                    })
                    .then((response) => {
                        this.$cookies.remove('current_section')
                        this.$cookies.remove("start_time")
                        Swal.fire(
                            'Submitted!',
                            'Task Successfully Submitted.',
                            'success'
                        )
                        .then(function(){
                            window.location = '/section'
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
    },

    beforeDestroy() {
        // clearInterval(this.waktu)
        // clearInterval(this.countdownTimer)
    },

    mounted(){
        this.section_id = this.$cookies.get('current_section').id;
        // let tes = this.$cookies.get('current_test').id;

        axios
        .get(this.port+'/question/all?section_id='+this.section_id)
        .then(({data}) => (
            this.pertanyaan = data,
            this.menit = this.pertanyaan[0]["section"]["duration"],
            this.jawaban = Array(19),
            this.progress(true)
        ))

        axios
        .get(this.port+'/section/'+this.section_id)
        .then(({data}) => {
            let datas = this.$cookies.get("data_registrant")
            this.test_id = data.test_id
            let tests = datas.test;
            for (let i = 0; i < tests.length; i++) {
                if (tests[i][0]==this.test_id)
                    this.test_result_id = tests[i][1]
            }
            this.email = datas.email;
            this.exam_session = datas.exam_session;
        })
        
        let thi = this
        $('body').keydown(function(event) {
            if (event.keyCode==37||event.keyCode==65)
                thi.prevSoal()
            else if (event.keyCode==39||event.keyCode==68)
                thi.nextSoal()
                
            // if (!$('#daftarSoal').hasClass('hidden')) $('#daftarSoal').addClass("hidden")
            thi.tampilDaftarSoal = false
        });
        
        $('body').click(function(e) {
            var target = $(e.target)
            if(!target.is('#btnNoSoal') && !target.is('#btnDaftarSoal') && !target.is('#btnDaftarSoal2') && !target.is('#btnDaftarSoal3') && !target.is('#daftarSoal')) {
                // if (!$('#daftarSoal').hasClass('hidden')) $('#daftarSoal').addClass("hidden")
                thi.tampilDaftarSoal = false
            }else{
                // if ($('#daftarSoal').hasClass('hidden')) $('#daftarSoal').removeClass("hidden")
                thi.tampilDaftarSoal = true
            }
        });
    }
}
    
</script>

<style>

</style>