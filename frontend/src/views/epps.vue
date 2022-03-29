<template>
    <div class="h-full w-9/12 m-auto text-white relative mt-3 text-black">
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
                    <div class="font-bold text-white text-lg mb-2">
                        <i class="fa fa-th-large mr-3"></i>
                        <span>Daftar Soal</span>
                    </div>
                    <div v-for="i in 225" :key="i" class="inline-block">
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
                    <div class="h-8 bg-primary-300 ring-1 ring-inset ring-black" id="progress" style="width: 0px;"></div>
                </div>    
                <div class="w-full text-center absolute top-0">
                    <p class="text-center py-1 text-white font-bold">Halaman {{page}}/{{jumHalaman}}</p> 
                </div>
            </div>

            <div class="rounded-lg bg-background-200 ring-1 ring-inset ring-stroke-100
                        p-3 my-5 h-16 flex justify-center items-center text-xl font-bold">
                Pilih salah satu pernyataan yang paling menggambarkan diri anda!
            </div>

            <div class="h-full pt-2" v-if="pertanyaan!=null">
                <div class="flex items-center mb-2" v-for="i in 5" :key="i">
                    <div class="text-xl font-bold mr-5 mt-1 w-10 text-right">
                        <p>{{i+((page-1)*5)}}.</p>
                    </div>
                    <div class="flex gap-5 overflow-hidden grow">
                        <AnswerButton :jenis="'epps'" :jawaban = jawaban :noSoal = (i+((page-1)*5)) :label="'A. '+this.pertanyaan[(i-1)+((page-1)*5)]['option_a']"/>
                        <AnswerButton :jenis="'epps'" :jawaban = jawaban :noSoal = (i+((page-1)*5)) :label="'B. '+this.pertanyaan[(i-1)+((page-1)*5)]['option_b']"/>
                    </div>
                </div>
            </div>

            <div class="flex justify-between mt-10">
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
import AnswerButton from '../components/answerButton.vue'

export default {
    components: {
        axios, AnswerButton
    },
    data () {
        return {
            namaTes: 'Tes EPPS',
            judulHalaman: 'EPPS',
            page: 1,
            jumHalaman: 45,
            menit: 1,
            detik: 0,
            waktu: null,
            // countdownTimer: null,
            // countdown: 2,
            jawaban: [],
            jawabanFinal: [],
            pertanyaan: null,
            pilihanJawaban: null,
            // section_id: this.$route.query.current_section,
            section_id: 11,
            // test_id: null,
            exam_session: 9,
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
            if (this.page<this.jumHalaman){
                this.page++
                if(this.page==this.jumHalaman) $('#nextBtn').text('Submit')

                this.progress(true)
            }else{
                var isi = 0
                this.jawaban.forEach(e => { if (e != null) isi++; });
                // isi = this.jumSoal;
                if(isi!=225){
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
            if (this.page>1){
                this.page--
                if(this.page<this.jumHalaman) $('#nextBtn').text('Selanjutnya')
                
                this.progress(false)
            }
        },
        lompatSoal(idx){
            this.page = parseInt(((idx-1)/5)+1)
            const elements = document.getElementById("progress")
            var width = ((this.page/this.jumHalaman)*100)
            elements.style.width = width +'%'
            
            if (this.noSoal<this.jumSoal) $('#nextBtn').text('Selanjutnya')
            else $('#nextBtn').text('Submit')
        },
        progress(maju){
            const elements = document.getElementById("progress")
            var interval = setInterval(frame, 50)
            var ctr = 0
            var tambahan = ((1/this.jumHalaman)*100)/5
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
            for (let i = 0; i < 225; i++) {
                this.jawabanFinal[i] = []
                this.jawabanFinal[i]["question_id"] = this.pertanyaan[i]['id']
                this.jawabanFinal[i]["answer"] = this.jawaban[i]!=null ? this.jawaban[i].substring(0,1).toLowerCase():'';
                this.jawabanFinal[i] = Object.assign({}, this.jawabanFinal[i]);
            }
            console.log(this.jawabanFinal)

            let formData = {
                exam_session: this.exam_session,
                section_id: this.section_id,
                data: this.jawabanFinal
            }

            axios.post(this.port+'/section_result/create',{
                "test_result_id": 29,
                "section_id": 11,
                "exam_session": this.exam_session,
                "start_date": "2022-01-28 15:00:00",
                "finish_date": Date.now()
            })
            .then((response) => {
                axios.post(this.port+'/question_result/createmultiple',formData)
                .then((response) => {
                    axios.post(this.port+'/test_result/calculateresult',{
                        test_id: 2,
                        email: "saifullah@x.com"
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
    },

    beforeDestroy() {
        // clearInterval(this.waktu)
        // clearInterval(this.countdownTimer)
    },

    mounted(){
        axios
        .get(this.port+'/question/all?section_id='+this.section_id)
        .then(({data}) => (
            this.pertanyaan = data,
            // console.log(data),
            this.menit = this.pertanyaan[0]["section"]["duration"],
            // this.jumSoal = this.pertanyaan.length,
            this.jawaban = Array(225),
            this.progress(true)
        ))

        // axios
        // .get('http://127.0.0.1:8888/api/section/'+this.section_id)
        // .then(({data}) => (
        //     this.jumChoice = data.option_num,
        //     this.test_id = data.test_id
        // ))
        
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