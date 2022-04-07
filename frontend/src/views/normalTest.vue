<template>
    <div class="h-full w-9/12 m-auto relative mt-3 text-black">
        <div class="flex justify-between mb-7">
            <h1 class="text-white text-3xl text-center font-bold mt-2">{{namaSection}}</h1>
            <div class="flex justify-center">
                <img src="../assets/logo.png" alt="" class="w-20">
            </div>
        </div>

        <div v-show="isStarted">
            <div class="flex justify-between items-center text-lg font-bold mb-5 relative">
                <p v-if="menit!=-99">Sisa Waktu : {{('00'+menit).slice(-2)}}:{{('00'+detik).slice(-2)}}</p>
                <p v-else></p>
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
                <div class="h-8 bg-foreground-4-100 ring-1 ring-inset ring-black rounded-lg overflow-x-hidden">
                    <div class="h-8 bg-primary-300 ring-1 ring-inset ring-black" id="progress" style="width: 0px;"></div>
                </div>    
                <div class="w-full text-center absolute top-0">
                    <p class="text-center py-1 text-white font-bold">Pertanyaan {{noSoal}}/{{jumSoal}}</p> 
                </div>
            </div>
            
            <div id="soal" class="mb-10 h-full font-semibold" v-if="pertanyaan!=null">
            <!-- <div id="soal" class="hidden" v-if="pertanyaan!=null"> -->
            <!-- <div id="soal" class="" v-if="pertanyaan!=null"> -->
                <ImageQuestion v-if="pertanyaan[noSoal-1]['instruction_type']==2" :label="'Pola Terpisah :'" />
                <TextQuestion v-else-if="pertanyaan[noSoal-1]['instruction_type']==1" :question="pertanyaan[noSoal-1]['instruction']" />
                
                <ImageAnswer ref="imageAnswer" v-if="pertanyaan[noSoal-1]['option_type']==2" :judul="'Pilihan Jawaban :'"  :jawaban = jawaban :noSoal = noSoal :numberOfChoices = 5 :choices = pilihanJawaban />
                <TextAnswer ref="textAnswer" v-else-if="pertanyaan[noSoal-1]['option_type']==1 && pertanyaan[noSoal-1]['option_a']=='-'" :jawaban = jawaban :noSoal = noSoal :jumlahJawaban = jumChoice />
                <mChoiceAnswer ref="mChoiceAnswer" v-else-if="pertanyaan[noSoal-1]['option_type']==1 && pertanyaan[noSoal-1]['option_a']!='-'" :jenis="jenis" :jawaban = jawaban :noSoal = noSoal :numberOfChoices = jumChoice :choices = pilihanJawaban />        
            </div>

            <div class="flex justify-between">
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
            namaSection: 'Tes 1',
            jenis: '',
            noSoal: 1,
            jumSoal: 5,
            jumChoice: 5,
            menit: 0,
            detik: 0,
            waktu: null,
            countdownTimer: null,
            countdown: 2,
            jawaban: [],
            jawabanFinal: [],
            pertanyaan: null,
            pilihanJawaban: null,
            section_id: this.$route.query.current_section,
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
            if(this.menit!=-99){
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
        },
        nextSoal(){
            console.log(this.jawaban)
            if (this.noSoal<this.jumSoal){
                this.noSoal++
                this.jumChoice = this.pertanyaan[this.noSoal-1]["option_num"]
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
            this.gantiPilihanJawaban()
        },
        prevSoal(){
            if (this.noSoal>1){
                this.noSoal--
                this.jumChoice = this.pertanyaan[this.noSoal-1]["option_num"]
                if(this.noSoal<this.jumSoal) $('#nextBtn').text('Selanjutnya')

                this.progress(false)
                
                if(this.pertanyaan[this.noSoal-1]['option_type']==1 && this.pertanyaan[this.noSoal-1]['option_a']=='-')
                    this.$refs.textAnswer.resetText(this.jawaban[this.noSoal-1])
            }
            this.gantiPilihanJawaban()
        },
        lompatSoal(idx){
            this.noSoal = idx
            const elements = document.getElementById("progress")
            var width = ((this.noSoal/this.jumSoal)*100)
            elements.style.width = width +'%'
            
            this.jumChoice = this.pertanyaan[this.noSoal-1]["option_num"]
            if (this.noSoal<this.jumSoal) $('#nextBtn').text('Selanjutnya')
            else $('#nextBtn').text('Submit')
            
            if(this.pertanyaan[this.noSoal-1]['option_type']==1 && this.pertanyaan[this.noSoal-1]['option_a']=='-')
                this.$refs.textAnswer.resetText(this.jawaban[this.noSoal-1])

            this.gantiPilihanJawaban()
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
        },
        submitJawaban(){
            for (let i = 0; i < this.jumSoal; i++) {
                this.jawabanFinal[i] = []
                this.jawabanFinal[i]["question_id"] = this.pertanyaan[i]['id']
                if(this.pertanyaan[this.noSoal-1]['option_type']==1 && this.pertanyaan[this.noSoal-1]['option_a']=='-')
                    this.jawabanFinal[i]["answer"] = this.jawaban[i] != undefined ? this.jawaban[i] : '';
                else if (this.jenis=="MMPI"){
                    let ans = this.jawaban[i]!=undefined ? this.jawaban[i].substring(3,4):''
                    this.jawabanFinal[i]["answer"] = ans=="+"?1:0
                }
                else if (this.jenis=="SDI"){
                    let ans = this.jawaban[i]!=undefined ? this.jawaban[i].split(" "):['']
                    this.jawabanFinal[i]["answer"] = ans[1]=="Ya"?0:1
                }
                else if(this.jumChoice==2){
                    this.jawabanFinal[i]["answer"] = this.jawaban[i]!=undefined ? this.jawaban[i].substring(3,4):''
                }
                else
                    this.jawabanFinal[i]["answer"] = this.jawaban[i]!=null ? this.jawaban[i].substring(0,1):'';
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
        },
        chooseWithKeyboard(pilihan){
            let komponen = null
            if(this.pertanyaan[this.noSoal-1]['option_type']==2){
                komponen = this.$refs.imageAnswer
            }else if(this.pertanyaan[this.noSoal-1]['option_type']==1 && this.pertanyaan[this.noSoal-1]['option_a']!='-'){
                komponen = this.$refs.mChoiceAnswer
            }
            
            if(komponen){
                if(pilihan=='a') komponen.keyChoose(pilihan)
                else if(pilihan=='b'&&this.jumChoice>=2) komponen.keyChoose(pilihan)
                else if(pilihan=='c'&&this.jumChoice>=3) komponen.keyChoose(pilihan)
                else if(pilihan=='d'&&this.jumChoice>=4) komponen.keyChoose(pilihan)
                else if(pilihan=='e'&&this.jumChoice==5) komponen.keyChoose(pilihan)
            }
        }
    },

    created () {
        
    },

    beforeDestroy() {
        clearInterval(this.waktu)
    },

    mounted(){
        let tes = this.$cookies.get('current_test')
        let nama_tes = ""
        axios
        .get(this.port+'/test/'+tes)
        .then(({data}) => {
            nama_tes = data.name.split(" ")
            nama_tes.splice(0,1)
            this.jenis = nama_tes.join(" ")
        })

        axios
        .get(this.port+'/question/all?section_id='+this.section_id)
        .then(({data}) => (
            this.pertanyaan = data,
            this.menit = this.pertanyaan[0]["section"]["duration"]==-1?-99:this.pertanyaan[0]["section"]["duration"],
            this.jumChoice = this.pertanyaan[0]["option_num"],
            this.jumSoal = this.pertanyaan.length,
            // this.jumSoal = 5,
            this.gantiPilihanJawaban(),
            this.jawaban = Array(225),
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
            this.section_id = this.$route.query.current_section;

            // console.log(this.test_id)
            // console.log(this.email)
            // console.log(this.exam_session)
            // console.log(this.section_id)
            // console.log(this.test_result_id)
        })

        let thi = this
        $('body').keydown(function(event) {
            if (event.keyCode==37)
                thi.prevSoal()
            else if (event.keyCode==39)
                thi.nextSoal()
            else if(event.keyCode==65) thi.chooseWithKeyboard('a')
            else if(event.keyCode==66) thi.chooseWithKeyboard('b')
            else if(event.keyCode==67) thi.chooseWithKeyboard('c')
            else if(event.keyCode==68) thi.chooseWithKeyboard('d')
            else if(event.keyCode==69) thi.chooseWithKeyboard('e')
            
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