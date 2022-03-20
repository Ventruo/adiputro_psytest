<template>
    <div class="h-full w-9/12 m-auto relative mt-3 overflow-hidden">
        <div class="flex justify-between mb-7">
            <h1 class="text-white text-3xl text-center font-bold mt-2">{{namaTes}}</h1>
            <div class="flex justify-center">
                <img src="../assets/logo.png" alt="" class="w-20">
            </div>
        </div>
        <form v-if="this.dataKraepelin==null" class="bg-foreground-3-500 w-full h-full rounded-xl text-black overflow-y-auto no-scrollbar py-5 px-5"
            @submit.prevent="submitKraepelinData">
            <h1 class="text-3xl font-bold mb-2">Biodata</h1>
            <div class="mb-5 mt-3">
                <p class="mt-2">PENDIDIKAN TERAKHIR :</p>
                <div class="flex my-2">
                    <div class="w-1/5"><Radio :values="'smea'" :names="'pendidikan'" :id="'SMEA'" :label="'SMEA'"/></div>
                    <div class="w-1/5"><Radio :values="'smk'" :names="'pendidikan'" :id="'SMK'" :label="'STM/SMK'"/></div>
                    <div class="w-1/5"><Radio :values="'sma'" :names="'pendidikan'" :id="'SMA'" :label="'SMA'"/></div>
                    <div class="w-1/5"><Radio :values="'sarjana muda'" :names="'pendidikan'" :id="'SARJANA MUDA'" :label="'SARJANA MUDA (D3)'"/></div>
                    <div class="w-1/5"><Radio :values="'sarjana'" :names="'pendidikan'" :id="'SARJANA'" :label="'SARJANA (S1)'"/></div>
                </div>

                <p class="mt-4">JURUSAN :</p>
                <div class="flex my-2">
                    <div class="w-1/4"><Radio :values="'ipa'" :names="'jurusan'" :id="'ipa'" :label="'IPA'"/></div>
                    <div class="w-1/4"><Radio :values="'ips'" :names="'jurusan'" :id="'ips'" :label="'IPS'"/></div>
                </div>

                <p class="mt-4">JENIS KELAMIN :</p>
                <div class="flex my-2">
                    <div class="w-1/4"><Radio :values="'L'" :names="'jenis_kelamin'" :id="'laki'" :label="'LAKI-LAKI'"/></div>
                    <div class="w-1/4"><Radio :values="'P'" :names="'jenis_kelamin'" :id="'perempuan'" :label="'PEREMPUAN'"/></div>
                </div>
            </div>
            
            <div class="text-right">
                <button type="submit" class="bg-safe text-white hover:bg-green-800 duration-200 rounded-full text-lg font-bold px-10 py-2">
                    Submit dan mulai
                </button>
            </div>
        </form>
        <div v-else>
            <div class="rounded-lg bg-background-200 ring-1 ring-inset ring-stroke-100
                        p-5 my-5 flex justify-center items-center text-xl font-bold">
                Jawablah perkolom dari bawah ke atas, tuliskan anngka satuan dari penjumlahan 2 angka diantara kotak jawaban. 
                Untuk menjawab dapat menekan angka pada keyboard ataupun menekan tombol yang tersedia disebelah kanan.
            </div>
            <div class="flex justify-between text-lg font-bold mb-2 relative z-10">
                <p>Sisa Waktu : {{('00'+detik).slice(-2)}} Detik</p>
                
                <p class="text-center py-1">Kolom {{kolom}}/{{jumKolom}}</p> 
            </div>

            <div class="text-center font-bold mb-5" v-if="pertanyaan!=null">
                <p class="text-5xl mb-2" v-if="currentRow<28">{{pertanyaan[27-currentRow]}} + {{pertanyaan[28-currentRow]}} = ...</p>
                <p class="text-5xl mb-2" v-else>Kolom Berikutnya...</p>
                <p v-if="currentRow<27">Berikutnya: {{pertanyaan[26-currentRow]}} + {{pertanyaan[27-currentRow]}} = ...</p>
                <p v-else>Berikutnya: -</p>
            </div>
            <!-- <div class="h-full pt-2" v-if="pertanyaan!=null"> -->
            <div class="h-full pt-2 font-bold mt-10">
                <div class="flex gap-5 justify-center">
                    <!-- <div><p v-for="i in 10" :key="i" class="text-2xl mb-2">{{row1[i-1]}}</p></div>
                    <div class="mt-5 mr-5">
                        <input type="number" name="" :id="'baris'+(10-i)" v-for="i in 9" :key="i" @keyup="ngisi"
                                class="w-10 px-3 py-1 mb-2 block rounded-xl text-center outline-none 
                                bg-background-200 ring-1 ring-inset ring-stroke-100" disabled>
                    </div>

                    <div><p v-for="i in 10" :key="i" class="text-2xl mb-2">{{row2[i-1]}}</p></div>
                    <div class="mt-5 mr-5">
                        <input type="number" name="" :id="'baris'+(19-i)" v-for="i in 9" :key="i" @keyup="ngisi"
                                class="w-10 px-3 py-1 mb-2 block rounded-xl text-center outline-none 
                                bg-background-200 ring-1 ring-inset ring-stroke-100" disabled>
                    </div>

                    <div><p v-for="i in 10" :key="i" class="text-2xl mb-2">{{row3[i-1]}}</p></div>
                    <div class="mt-5 mr-5">
                        <input type="number" name="" :id="'baris'+(28-i)" v-for="i in 9" :key="i" @keyup="ngisi"
                                class="w-10 px-3 py-1 mb-2 block rounded-xl text-center outline-none 
                                bg-background-200 ring-1 ring-inset ring-stroke-100" disabled>
                    </div> -->
                    
                    <div>
                        <div v-for="i in 3" :key="i" class="mb-5">
                            <button v-for="j in 3" :key="j" class="px-10 py-1 bg-background-200 ring-1 ring-inset ring-stroke-100 text-xl mr-5 rounded-lg font-bold
                                                            hover:bg-background-300 duration-200" @click.prevent="jawabTombol">{{j+((i-1)*3)}}</button>
                        </div>
                        <div class="text-center">
                            <button class="px-10 py-1 bg-background-200 ring-1 ring-inset ring-stroke-100 text-xl mr-5 rounded-lg font-bold
                                        hover:bg-background-300 duration-200" @click.prevent="jawabTombol">0</button>
                        </div>
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
        <div id="spinner-modal" class="fixed top-0 left-0 w-screen h-screen flex items-center bg-foreground-3-500 bg-opacity-70 justify-center z-20" style="display: none">
            <i class="fas fa-spinner animate-spin fa-7x inline-block text-foreground-4-100"></i>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import AnswerButton from '../components/answerButton.vue'
import Radio from '../components/radiobutton.vue'

export default {
    components: {
        axios, AnswerButton, Radio
    },
    data () {
        return {
            namaTes: 'Tes Kraepelin',
            judulHalaman: 'EPPS',
            kolom: 1,
            jumKolom: 50,
            detik: 15,
            waktu: null,
            row1: [],
            row2: [],
            row3: [],
            currentRow: 1,
            timer: null,
            jawaban: [],
            jawabanFinal: [],
            pertanyaanFull: null,
            pertanyaan: null,
            pilihanJawaban: null,
            section_id: 53,
            exam_session: 9,
            section_result_id: 26,
            dataKraepelin: null
        }
    },
    methods: {
        submitKraepelinData(e){
            let pendidikan = ""
            for (let i = 0; i < 5; i++) {
                if (e.target[i].checked) pendidikan = e.target[i].value
            }
            let jurusan = e.target[5].checked!=false ? e.target[5].value : e.target[6].value
            let jk = e.target[7].checked!=false ? e.target[7].value : e.target[8].value
            
            $('#spinner-modal').fadeIn("slow");
            axios.post('http://127.0.0.1:8888/api/kreapelin_data/create',{
                "section_result_id": this.section_result_id,
                "pendidikan": pendidikan,
                "jurusan": jurusan,
                "jenis_kelamin": jk
            })
            .then((response) => {
                $('#spinner-modal').fadeOut("slow"),
                this.dataKraepelin = response.data,
                console.log(this.dataKraepelin)
            }).catch( error => { 
                console.log('error: ' + error) 
            });
        },
        nextSoal(value){
            if(value!=="" && this.currentRow<28){
                this.jawaban[this.kolom-1][this.currentRow-1] = value
                // $('#baris'+this.currentRow).prop('disabled', true)
                this.currentRow += 1
                // $('#baris'+this.currentRow).prop('disabled', false)
                // $('#baris'+this.currentRow).focus()
            }
            // if(this.currentRow>=28) this.reset()

            // $('#answer').focus()
            // if (this.kolom<this.jumKolom){
            //     this.kolom++
            //     if(this.kolom==this.jumKolom) $('#nextBtn').text('Submit')

            //     // this.progress(true)
            // }else{
            //     var isi = 0
            //     this.jawaban.forEach(e => { if (e != null) isi++; });
            //     // isi = this.jumSoal;
            //     if(isi!=225){
            //         Swal.fire({
            //             title: 'Ada Pertanyaan yang Belum Dijawab!',
            //             icon: 'warning',
            //             showCancelButton: true,
            //             confirmButtonColor: '#3085d6',
            //             cancelButtonColor: '#d33',
            //             confirmButtonText: 'Tetap Submit'
            //         }).then((result) => {
            //             if (result.isConfirmed) {
            //                 this.submitJawaban()
            //             }
            //         });
            //     }else{
            //         Swal.fire({
            //             title: 'Submit This Task?',
            //             icon: 'warning',
            //             showCancelButton: true,
            //             confirmButtonColor: '#3085d6',
            //             cancelButtonColor: '#d33',
            //             confirmButtonText: 'Yes'
            //         }).then((result) => {
            //             if (result.isConfirmed) {
            //                 this.submitJawaban()
            //             }
            //         });
            //     }
            // }
        },
        ngisi(event){
            var isi = event.target.value
            event.target.value = isi.substring(0,1)
            this.nextSoal(event.target.value)
        },
        reset(){
            for (let i = this.jawaban[this.kolom-1].length; i < 27; i++) {
                this.jawaban[this.kolom-1][i]=-1
            }
            this.jawaban.push([])
            this.kolom++
            this.currentRow = 1
            // this.pertanyaan = this.pertanyaanFull.slice(((this.kolom-1)*28),(this.kolom*28))
            this.pertanyaan = this.pertanyaanFull[this.kolom-1]
            // this.row1 = this.pertanyaan.slice(-10)
            // this.row2 = this.pertanyaan.slice(9,19)
            // this.row3 = this.pertanyaan.slice(0,10)
            // $('#baris'+this.currentRow).prop('disabled', false)
            // $('#baris'+this.currentRow).focus()

            // for (let i = 1; i <= 28; i++) {
            //     $('#baris'+i).val('')
            // }
            console.log(this.jawaban)
        },
        jawabTombol(event){
            // $('#baris'+this.currentRow).val(event.target.innerText)
            this.nextSoal(parseInt(event.target.innerText))
        },
        // progress(maju){
        //     const elements = document.getElementById("progress")
        //     var interval = setInterval(frame, 50)
        //     var ctr = 0
        //     var tambahan = ((1/this.jumKolom)*100)/5
        //     function frame() {
        //         if(maju){
        //             var width = parseFloat(elements.style.width.replace(/px/,""))+tambahan
        //         }else{
        //             var width = parseFloat(elements.style.width.replace(/px/,""))-tambahan
        //         }

        //         if (ctr == 5) {
        //             clearInterval(interval)
        //         } else {
        //             elements.style.width = width +'%'
        //         }
        //         ctr++
        //     }
        // },
        submitJawaban(){
            for (let i = 0; i < 225; i++) {
                this.jawabanFinal[i] = []
                this.jawabanFinal[i]["question_id"] = this.pertanyaan[i]['id']
                this.jawabanFinal[i]["answer"] = this.jawaban[i]!=null ? this.jawaban[i].substring(0,1).toLowerCase():'';
                this.jawabanFinal[i] = Object.assign({}, this.jawabanFinal[i]);
            }

            let formData = {
                exam_session: this.exam_session,
                section_id: this.section_id,
                data: this.jawabanFinal
            }

            axios.post('http://127.0.0.1:8888/api/section_result/create',{
                "test_result_id": 29,
                "section_id": 11,
                "exam_session": this.exam_session,
                "start_date": "2022-01-28 15:00:00",
                "finish_date": "2022-01-28 18:00:00"
            })
            .then((response) => {
                axios.post('http://127.0.0.1:8888/api/question_result/createmultiple',formData)
                .then((response) => {
                    axios.post('http://127.0.0.1:8888/api/test_result/calculateresult',{
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
                    if (this.pertanyaanFull && this.dataKraepelin){
                        this.detik--
                        if (this.detik<0){
                            this.detik = 15
                            this.reset()
                    //         console.log(this.jawaban)
                            // clearInterval(this.waktu)
                            
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
            this.pertanyaanFull = [],
            data.forEach(d => {
                this.pertanyaanFull.push(d.instruction.split(','))
            }),
            this.pertanyaan = this.pertanyaanFull[this.kolom-1],
            this.jawaban.push([])
        ))

        axios
        .get('http://127.0.0.1:8888/api/kreapelin_data/?section_result_id='+this.section_result_id)
        .then(({data}) => (
            this.dataKraepelin = data
        ))

        // this.pertanyaanFull = [2,7,7,9,7,4,6,6,9,2, 2,1,1,8,2,2,6,5,9,2, 9,8,6,4,7,2,9,4, 1,2,3,4,5,6,7,8,9,0, 1,2,3,4,5,6,7,8,9,0, 1,2,3,4,5,6,7,8]
        // this.pertanyaan = this.pertanyaanFull.slice(0,28)
        // this.row1 = this.pertanyaan.slice(-10)
        // this.row2 = this.pertanyaan.slice(9,19)
        // this.row3 = this.pertanyaan.slice(0,10)
        // $('#baris'+this.currentRow).prop('disabled', false)
        // $('#baris'+this.currentRow).focus()

        let thi = this
        $('body').keydown(function(event) {
            if (event.keyCode==48) thi.nextSoal(0)
            else if (event.keyCode==49) thi.nextSoal(1)
            else if (event.keyCode==50) thi.nextSoal(2)
            else if (event.keyCode==51) thi.nextSoal(3)
            else if (event.keyCode==52) thi.nextSoal(4)
            else if (event.keyCode==53) thi.nextSoal(5)
            else if (event.keyCode==54) thi.nextSoal(6)
            else if (event.keyCode==55) thi.nextSoal(7)
            else if (event.keyCode==56) thi.nextSoal(8)
            else if (event.keyCode==57) thi.nextSoal(9)
        });
    }
}
    
</script>

<style>

</style>