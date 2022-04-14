<template>
    <div class="h-full w-9/12 m-auto relative mt-3 text-black">
        <div class="flex justify-between mb-7">
            <h1 class="text-white text-3xl text-center font-bold mt-2">{{namaSection}}</h1>
            <div class="flex justify-center">
                <img src="../assets/logo.png" alt="" class="w-20">
            </div>
        </div>
        <div v-show="state==1">
            <div class="text-lg font-bold flex justify-center">
                <p v-if="menit!=-99">Sisa Waktu : {{('00'+menit).slice(-2)}}:{{('00'+detik).slice(-2)}}</p>
            </div>
            <div class="rounded-lg bg-foreground-4-100 text-white ring-1 ring-inset ring-stroke-100
                        p-5 my-2 font-semibold text-lg">
                Disediakan waktu 3 menit untuk menghafalkan kata-kata.
                Pada persoalan berikutnya, terdapat sejumlah pertanyaan mengenai kata-kata yang anda hafalkan.
                Tugas anda adalah menjawab soal sesuai dengan yang anda hafalkan.
            </div>
            <div class="w-full ring-2 ring-inset ring-black py-3 rounded-md text-lg flex justify-center mb-3">
                <div class="flex gap-2">
                    <div class="font-semibold">
                        <p>Bunga</p>
                        <p>Perkakas</p>
                        <p>Burung</p>
                        <p>Kesenian</p>
                        <p>Binatang</p>
                    </div>
                    <div class="font-semibold">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div>
                        <p>Soka - Larat - Flamboyan - Yasmin - Dahlia</p>
                        <p>Wajan - Jarum - Kikir - Cangkul - Palu</p>
                        <p>Itik - Elang - Walet - Terkukur - Nuri</p>
                        <p>Quintet - Arca - Opera - Gamelan - Ukiran</p>
                        <p>Musang - Rusa - Beruang - Zebra - Harimau</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mb-5">
                <img src="http://24.media.tumblr.com/tumblr_lq6exy9MTt1qk78leo1_400.gif" alt="">
            </div>
            <!-- <div class="flex justify-end">
                <button class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white duration-200 rounded-full px-5 py-2 font-bold text-xl" @click.prevent="mulai()">
                    <span id="nextBtn">Mulai</span>
                    <i class="fa fa-chevron-right ml-3"></i>
                </button>
            </div> -->
        </div>
            
        <div v-show="state==2">
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
            
            <div id="soal" class="mb-10 h-full font-semibold" v-if="state==2 && pertanyaan!=null && pilihanJawaban!=null && pilihanJawaban.length>0">
                <TextQuestion :question="pertanyaan[noSoal-1]['instruction']" />
                <div class="flex gap-3 w-full">
                    <div v-for="(i,idx) in this.pilihanJawaban" :key="idx" class="w-full">
                        <AnswerButton :jenis="''" :jawaban = jawaban :noSoal = noSoal :label="this.pilihanJawaban[idx]" />
                    </div>
                </div>
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
        <div id="bg" v-show="state==0" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-foreground-4-100 bg-opacity-60 z-40"></div>

        <!-- Countdown -->
        <div id="klikAnywhere" v-show="state==0" class="fixed inset-x-0 w-full h-full flex justify-center items-center top-0 text-white text-5xl font-bold z-50"
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
            namaSection: 'Tes 1',
            jenis: '',
            noSoal: 1,
            jumSoal: 0,
            jumChoice: 0,
            menit: 0,
            detik: 0,
            waktu: null,
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
            state: 0,
            tampilDaftarSoal: false
        }
    },
    methods: {
        mulai(){
            // this.jumSoal = this.pertanyaan.length
            this.state = 1
            this.menit = 3
            this.detik = 0
            this.gantiPilihanJawaban()
            this.waktu = setInterval(() => {
                this.detik--
                if (this.detik<0){
                    this.detik = 59
                    this.menit--
                }
                
                if (this.menit<0){
                    this.menit = 3
                    this.detik = 0
                    this.state = 2
                    clearInterval(this.waktu)
                    this.mulai2()
                } 
            }, 1000)
        },
        mulai2(){
            this.noSoal = 1
            this.gantiPilihanJawaban()
            this.progress(true)
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
                        this.submitJawaban()
                    } 
                }, 1000)
            }
        },
        nextSoal(){
            // console.log(this.jawaban)
            if (this.noSoal<this.jumSoal){
                this.noSoal++
                if(this.noSoal==this.jumSoal) $('#nextBtn').text('Submit')

                this.progress(true)
            }
            // else{
            //     clearInterval(this.waktu)
            //     this.state = 3
            // }
            this.gantiPilihanJawaban()
        },
        prevSoal(){
            if (this.noSoal>1){
                this.noSoal--
                if(this.noSoal<this.jumSoal) $('#nextBtn').text('Selanjutnya')

                this.progress(false)
            }
            this.gantiPilihanJawaban()
        },
        lompatSoal(idx){
            this.noSoal = idx
            const elements = document.getElementById("progress")
            var width = ((this.noSoal/this.jumSoal)*100)
            elements.style.width = width +'%'
            
            if (this.noSoal<this.jumSoal) $('#nextBtn').text('Selanjutnya')
            else $('#nextBtn').text('Submit')

            this.gantiPilihanJawaban()
        },
        gantiPilihanJawaban(){
            this.pilihanJawaban = []
            if(this.state==2){
                this.pilihanJawaban = [
                    this.pertanyaan[this.noSoal-1]['option_a'],
                    this.pertanyaan[this.noSoal-1]['option_b'],
                    this.pertanyaan[this.noSoal-1]['option_c'],
                    this.pertanyaan[this.noSoal-1]['option_d'],
                    this.pertanyaan[this.noSoal-1]['option_e'],
                ]
            }
            this.jumChoice = this.pilihanJawaban.length
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
            // for (let i = 0; i < this.jumSoal; i++) {
            //     this.jawabanFinal[i] = []
            //     this.jawabanFinal[i]["question_id"] = this.pertanyaan[i]['id']
            //     if(this.pertanyaan[this.noSoal-1]['option_type']==1 && this.pertanyaan[this.noSoal-1]['option_a']=='-')
            //         this.jawabanFinal[i]["answer"] = this.jawaban[i] != undefined ? this.jawaban[i] : '';
            //     else if (this.jenis=="MMPI"){
            //         let ans = this.jawaban[i]!=undefined ? this.jawaban[i].substring(3,4):''
            //         this.jawabanFinal[i]["answer"] = ans=="+"?1:0
            //     }
            //     else if (this.jenis=="SDI"){
            //         let ans = this.jawaban[i]!=undefined ? this.jawaban[i].split(" "):['']
            //         this.jawabanFinal[i]["answer"] = ans[1]=="Ya"?1:0
            //     }
            //     else if(this.jumChoice==2){
            //         this.jawabanFinal[i]["answer"] = this.jawaban[i]!=undefined ? this.jawaban[i].substring(3,4):''
            //     }
            //     else
            //         this.jawabanFinal[i]["answer"] = this.jawaban[i]!=null ? this.jawaban[i].substring(0,1):'';
            //     this.jawabanFinal[i] = Object.assign({}, this.jawabanFinal[i]);
            // }

            // let formData = {
            //     exam_session: this.exam_session,
            //     section_id: this.section_id,
            //     data: this.jawabanFinal
            // }

            // axios.post(this.port+'/section_result/create',{
            //     "test_result_id": this.test_result_id,
            //     "section_id": this.section_id,
            //     "exam_session": this.exam_session,
            //     "start_date": parseInt(this.$cookies.get("start_time")),
            //     "finish_date": Date.now()
            // })
            // .then((response) => {
            //     axios.post(this.port+'/question_result/createmultiple',formData)
            //     .then((response) => {
            //         axios.post(this.port+'/test_result/calculateresult',{
            //             test_id: this.test_id,
            //             email: this.email
            //         })
            //         .then((response) => {
            //             this.$cookies.remove('current_section')
            //             Swal.fire(
            //                 'Submitted!',
            //                 'Task Successfully Submitted.',
            //                 'success'
            //             )
            //             .then(function(){
            //                 window.location = '/section'
            //             })
            //         })
            //     })
            // }).catch( error => { 
            //     console.log('error: ' + error) 
            // });
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
        this.section_id = this.$cookies.get('current_section');
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
        .then(({data}) => {
            this.pertanyaan = data
            this.menit = 3
            this.jawaban = []
            this.gantiPilihanJawaban()
            this.jumSoal = this.pertanyaan.length
        })

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
            if (event.keyCode==37)
                thi.prevSoal()
            else if (event.keyCode==39)
                thi.nextSoal()
            // else if(event.keyCode==65) thi.chooseWithKeyboard('a')
            // else if(event.keyCode==66) thi.chooseWithKeyboard('b')
            // else if(event.keyCode==67) thi.chooseWithKeyboard('c')
            // else if(event.keyCode==68) thi.chooseWithKeyboard('d')
            // else if(event.keyCode==69) thi.chooseWithKeyboard('e')
            
            thi.tampilDaftarSoal = false
        });
        
        $('body').click(function(e) {
            var target = $(e.target)
            if(!target.is('#btnNoSoal') && !target.is('#btnDaftarSoal') && !target.is('#btnDaftarSoal2') && !target.is('#btnDaftarSoal3') && !target.is('#daftarSoal')) {
                thi.tampilDaftarSoal = false
            }else{
                thi.tampilDaftarSoal = true
            }
        });
    }
}
    
</script>

<style>

</style>