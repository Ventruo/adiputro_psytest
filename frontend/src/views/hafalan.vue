<template>
    <div class="h-full w-9/12 m-auto relative mt-3 text-black">
        <div class="flex justify-between mb-7">
            <h1 class="text-white text-3xl text-center font-bold mt-2">{{namaSection}}</h1>
            <div class="flex justify-center">
                <img src="../assets/logo.png" alt="" class="w-20">
            </div>
        </div>
        <div v-show="state>0 && state<4" class="mb-2">
            <div class="mt-5 font-semibold text-lg flex gap-2">
                <div class="w-1/5 ring-2 ring-inset ring-black p-2 rounded-md" v-for="p in pedoman" :key="p">
                    <div class="flex justify-between" v-for="i in p" :key="i"><span>{{i[0]}}</span><span>{{i[1]}}</span></div>
                </div>
            </div>
        </div>
        <div v-show="state==1">
            <div class="rounded-lg bg-foreground-4-100 text-white ring-1 ring-inset ring-stroke-100
                        p-5 mt-5 mb-2 font-semibold text-lg">
                Terdapat 5 kotak di bagian atas, yaitu Kotak Rokok, Penerbangan, Juru Bayar, Nomor Telepon, dan Buku Gudang.
                disetiap kotak sudah terdapat nama anggota beserta kodenya. 
                Di setiap nomor soal sudah terdapat namanya apa. 
                Tugas Anda adalah mencari kodenya berapa. 
            </div>
            <div class="rounded-lg bg-foreground-4-100 text-white ring-1 ring-inset ring-stroke-100
                        p-5 mb-2 font-semibold text-lg text-center">
                        Kita ke contoh no. 1. di situ ada sabun, kodenya berapa? kodenya 2B. Cari tombol jawaban yang berisikan 2B, lalu tekan.
            </div>
            <div class="flex justify-center">
                <!-- <img src="https://media1.giphy.com/media/LXHJRRjnviw7e/giphy.gif" alt=""> -->
                <img src="../assets/gif_hafalan.gif" alt="" class="w-1/3">
            </div>
            <div class="flex justify-end">
                <button class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white duration-200 rounded-full px-5 py-2 font-bold text-xl" @click.prevent="mulai()">
                    <span id="nextBtn">Mulai</span>
                    <i class="fa fa-chevron-right ml-3"></i>
                </button>
            </div>
        </div>

        <div v-show="state==3">
            <div class="rounded-lg bg-foreground-4-100 text-white ring-1 ring-inset ring-stroke-100
                        p-5 mt-5 mb-2 font-semibold text-lg">
                        Cara mengerjakannya sama seperti tadi, hanya kotak yang di atas sekarang dihilangkan. Silahkan dikerjakan seingatnya saja.
            </div>
            <div class="flex justify-center">
                <img src="https://media1.giphy.com/media/LXHJRRjnviw7e/giphy.gif" alt="">
            </div>
            <div class="flex justify-end">
                <button class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white duration-200 rounded-full px-5 py-2 font-bold text-xl" @click.prevent="mulai2()">
                    <span id="nextBtn">Mulai</span>
                    <i class="fa fa-chevron-right ml-3"></i>
                </button>
            </div>
        </div>
            
        <div v-show="state==2 || state==4">
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
            
            <div id="soal" class="mb-10 h-full font-semibold" v-if="state==2 && pertanyaan1!=null && pilihanJawaban!=null && pilihanJawaban.length>0">
                <TextQuestion :question="pertanyaan1[noSoal-1]['instruction']" />
                <div class="flex gap-3 w-full">
                    <div v-for="(i,idx) in this.pilihanJawaban" :key="idx" class="w-full">
                        <AnswerButton :jenis="''" :jawaban = jawaban :noSoal = noSoal :label="this.pilihanJawaban[idx]" />
                    </div>
                </div>
            </div>

            <div id="soal" class="mb-10 h-full font-semibold" v-if="state==4 && pertanyaan2!=null && pilihanJawaban!=null && pilihanJawaban.length>0">
                <TextQuestion :question="pertanyaan2[noSoal-1]['instruction']" />
                <div class="flex gap-3 w-full mb-2">
                    <div v-for="idx in this.pilihanJawaban.length/2" :key="idx" class="w-full">
                        <AnswerButton :jenis="''" :jawaban = jawaban :noSoal = noSoal :label="this.pilihanJawaban[idx-1]" />
                    </div>
                </div>
                <div class="flex gap-3 w-full">
                    <div v-for="idx in this.pilihanJawaban.length/2" :key="idx" class="w-full">
                        <AnswerButton :jenis="''" :jawaban = jawaban :noSoal = noSoal :label="this.pilihanJawaban[idx-1+(this.pilihanJawaban.length/2)]" />
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
            @click.prevent="this.state = 1">
            Klik dimanapun untuk memulai
        </div>
        <div id="spinner-modal" class="fixed top-0 left-0 w-screen h-screen flex items-center bg-foreground-3-500 bg-opacity-70 justify-center z-20" style="display: none">
            <i class="fas fa-spinner animate-spin fa-7x inline-block text-foreground-4-100"></i>
        </div>
        <div class="w-2 h-10"></div>
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
            pertanyaan1: null,
            pertanyaan2: null,
            pilihanJawaban: null,
            section_id: null,
            test_id: null,
            email: null,
            exam_session: null,
            test_result_id: null,
            port: import.meta.env.VITE_BACKEND_URL,
            state: 0,
            tampilDaftarSoal: false,
            pedoman: []
        }
    },
    methods: {
        mulai(){
            this.jumSoal = this.pertanyaan1.length
            this.state = 2
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
                        this.state = 3
                    } 
                }, 1000)
            }
        },
        async mulai2(){
            this.menit = 20
            this.detik = 0
            this.jumSoal = this.pertanyaan2.length
            this.state = 4
            this.noSoal = 1
            this.gantiPilihanJawaban()
            document.getElementById("progress").style.width = ((1/this.jumSoal)*100)/5 +'%'
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
            }else{
                if (this.state==2){
                    clearInterval(this.waktu)
                    this.state = 3
                }else if (this.state==4){
                    this.submitJawaban()
                }
            }
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
                    this.pertanyaan1[this.noSoal-1]['option_a'],
                    this.pertanyaan1[this.noSoal-1]['option_b'],
                    this.pertanyaan1[this.noSoal-1]['option_c']
                ]
            } else if(this.state==4){
                let pilihans = this.pertanyaan2[this.noSoal-1]['option_a'].split(';')
                let res = []
                pilihans.forEach(pil => {
                    res.push(pil)
                });
                this.pilihanJawaban = res
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
            for (let i = 0; i < this.jumSoal; i++) {
                this.jawabanFinal[i] = []
                this.jawabanFinal[i]["question_id"] = this.pertanyaan2[i]['id']
                
                this.jawabanFinal[i]["answer"] = this.jawaban[i] != undefined ? this.jawaban[i] : '';

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
                        Swal.fire(
                            'Submitted!',
                            'Task Successfully Submitted.',
                            'success'
                        )
                        .then(function(){
                            window.location = '/section'
                        })
                    })
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
        },
        splitQuestion(questionList, state){
            let q1 = []
            let q2 = []
            questionList.forEach(question => {
                if(question.option_num==3)
                    q1.push(question)
                else
                    q2.push(question)
            });

            if(state == 1)
                this.pertanyaan1 = q1
            else
                this.pertanyaan2 = q2

            // console.log("Pertanyaan 1")
            // console.log(this.pertanyaan1)
            // console.log("Pertanyaan 2")
            // console.log(this.pertanyaan2)
        }
    },

    created () {
        
    },

    beforeDestroy() {
        clearInterval(this.waktu)
    },

    mounted(){
        this.pedoman = [
            [
                ["Escort","703"],
                ["Kansas","618"],
                ["Kresta","610"],
                ["Menara","721"],
                ["Pompa","624"]
            ],
            [
                ["Barat","MG"],
                ["Pusat","AJ"],
                ["Selatan","NX"],
                ["Timur","VK"],
                ["Utara","LP"]
            ],
            [
                ["Buku","9H"],
                ["Kain","6D"],
                ["Listrik","7C"],
                ["Sabun","2B"],
                ["Topi","3F"]
            ],
            [
                ["Adi","23"],
                ["Gatot","13"],
                ["Yani","17"],
                ["Surya","28"],
                ["Tan","19"]
            ],
            [
                ["Kawat","Q40"],
                ["Kunci","T54"],
                ["Paku","R42"],
                ["Pipa","E57"],
                ["Cat","Y36"]
            ]
        ]

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
        .then(({data}) => (
            this.splitQuestion(data,1),
            this.menit = 3,
            this.jawaban = []
        ))
        
        axios
        .get(this.port+'/question/all?section_id='+(parseInt(this.section_id)+1))
        .then(({data}) => (
            this.splitQuestion(data,2),
            this.menit = 3,
            this.jawaban = []
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