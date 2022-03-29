<template>
    <div class="w-9/12 h-full m-auto relative mt-3 flex flex-col flex-grow pb-3">
        <div class="w-full h-auto">
            <div class="flex mb-5">
                <label class="text-xl font-bold w-32">Nama Tes : </label>
                <select name="" id="testCombobox" class="text-black text-lg rounded-xl py-1 px-2 w-10/12 outline-none shadow-xl"
                    @change="gantiTes($event)">
                    <option v-for="i in test" :key="i" v-bind:value="i.id">{{i.name}}</option>
                </select>
            </div>
            <div class="relative mb-3">
                <h1 class="text-3xl font-bold">Hasil Tes</h1>
                <div class="flex mb-3 mt-2" v-if="this.dataNow!=null">
                    <div class="w-6/12 flex text-lg">
                        <div class="text-right mr-5 text-gray-700">
                            <p>Email</p>
                            <p>Nama</p>
                            <p>Test</p>
                        </div>
                        <div class="text-left">
                            <p>{{this.email}}</p>
                            <p>{{this.dataNow.nama}}</p>
                            <p>{{this.dataNow.tes}}</p>
                        </div>
                    </div>
                    <div class="w-6/12 flex text-lg">
                        <div class="text-right mr-5 text-gray-700">
                            <p>Start Date</p>
                            <p>Finish Date</p>
                        </div>
                        <div class="text-left">
                            <p>{{this.dataNow.start}}</p>
                            <p>{{this.dataNow.finish}}</p>
                        </div>
                    </div>
                </div>

                <div class="overflow-auto w-full h-auto max-h-[30rem] no-scrollbar mt-5 rounded-lg shadow-xl mb-10">
                    <table class="table-fixed w-full font-semibold">
                        <thead class="bg-foreground-4-100 text-white sticky top-0">
                            <tr>
                                <th class="w-1/12 py-2">Section No.</th>
                                <th class="w-2/12">Answer Type</th>
                                <th class="w-2/12">Start</th>
                                <th class="w-2/12">Finish</th>
                                <th class="w-1/12">Correct</th>
                                <th class="w-2/12">Action</th>
                            </tr>
                        </thead>
                        <tbody v-if="this.sectionList!=null && this.sectionResult!=null">
                            <tr class="text-center odd:bg-foreground-4-50 even:bg-foreground-4-10" v-for="(i, idx) in this.sectionList" :key="idx">
                                <td>{{i.section_number}}</td>
                                <td>
                                    <span v-if="i.section_type==1">Essay</span>
                                    <span v-else>Multiple Choice</span>
                                </td>
                                <td>{{this.sectionResult[idx]==undefined? "-" : toDate(this.sectionResult[idx].finish_date)}}</td>
                                <td>{{this.sectionResult[idx]==undefined? "-" : toDate(this.sectionResult[idx].start_date)}}</td>
                                <td>{{this.sectionResult[idx]==undefined? "-" : this.sectionResult[idx].num_correct}}/{{i.question_num}}</td>
                                <td class="h-12">
                                    <button v-if="i.section_type==1" class="bg-safe text-white hover:bg-green-800 duration-200 rounded-md h-auto w-auto text-base px-5 py-1 mr-1" 
                                        @click="this.$router.push({path: '/admin/reviewEssay'})"> 
                                        <i class="fa fa-info-circle mr-2"></i>
                                        <span>Review Answer</span>
                                    </button>
                                    <span v-else>-</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center bg-foreground-4-50 text-xl">
                                <td colspan="6" class="py-5">Belum ada data tersedia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="overflow-auto w-full h-auto max-h-[30rem] no-scrollbar mt-5 rounded-lg shadow-xl mb-10" v-show="tesKraepelin">
                    <div class="bg-foreground-4-100 text-white text-2xl font-bold px-5 py-3">
                        Biodata
                    </div>

                    <form class="bg-foreground-4-50 px-5 py-3"
                        @submit.prevent="submitKraepelinData"
                        v-if="this.biodata!=null">
                        <div class="mb-5 mt-3 flex gap-10">
                            <div class="w-1/2">
                                <div class="flex gap-3">
                                    <div class="text-right">
                                        <p class="mb-8 mt-1">PENDIDIKAN TERAKHIR :</p>
                                        <p>JENIS KELAMIN :</p>
                                    </div>
                                    <div class="grow">
                                        <select name="pendidikan" id="pendidikanCombobox" class="text-black text-lg rounded-xl py-1 px-2 outline-none shadow-xl mb-5 w-full">
                                            <option value="smea" :selected="this.biodata[0].pendidikan=='smea'">SMEA</option>
                                            <option value="stm-smk" :selected="this.biodata[0].pendidikan=='stm-smk'">STM/SMK</option>
                                            <option value="sma" :selected="this.biodata[0].pendidikan=='sma'">SMA</option>
                                            <option value="sarjana muda" :selected="this.biodata[0].pendidikan=='sarjana muda'">SARJANA MUDA (D3)</option>
                                            <option value="sarjana" :selected="this.biodata[0].pendidikan=='sarjana'">SARJANA (S1)</option>
                                        </select>
                                        <select name="jk" id="jkCombobox" class="text-black text-lg rounded-xl py-1 px-2 outline-none shadow-xl cursor-pointer block w-full">
                                            <option value="L" :selected="this.biodata[0].jenis_kelamin=='L'">LAKI-LAKI</option>
                                            <option value="P" :selected="this.biodata[0].jenis_kelamin=='P'">PEREMPUAN</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="w-1/2">
                                <div class="flex gap-3">
                                    <div class="text-right">
                                        <p class="mb-8 mt-1">JURUSAN :</p>
                                    </div>
                                    <div class="grow">
                                        <select name="jurusan" id="jurusanCombobox" class="grow text-black text-lg rounded-xl py-1 px-2 outline-none shadow-xl cursor-pointer w-full">
                                            <option value="ipa" :selected="this.biodata[0].jurusan=='ipa'">IPA</option>
                                            <option value="ips" :selected="this.biodata[0].jurusan=='ips'">IPS</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-right">
                            <button type="submit" class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-full text-lg font-bold px-10 py-2">
                                Update
                            </button>
                        </div>
                    </form>
                </div>

                <div class="text-right mb-2">
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-md text-md px-10 py-2 mr-2 shadow-xl"
                                    @click="makePDF('print')">
                                    <i class="fa fa-print mr-2"></i>
                                    <span>Print PDF</span>
                                    </button>
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-md text-md px-10 py-2 mr-2 shadow-xl"
                                    @click="makePDF('download')">
                                    <i class="fa fa-download mr-2"></i>
                                    <span>Download PDF</span>
                                    </button>
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-md text-md px-10 py-2 shadow-xl">
                                    <i class="fa fa-download mr-2"></i>
                                    <span>Download Excel</span>
                                    </button>
                </div>
            </div>


            <div class="w-full rounded-lg bg-foreground-3-300 ring-1 ring-inset ring-stroke-100 py-2 px-5 flex flex-col flex-grow mt-2" style="height: 48rem;">
                <h1 class="font-bold text-2xl mb-2">Report</h1>
                <div class="flex gap-2 justify-center w-full h-full" v-if="loaded==1">
                    <div class="w-1/2 h-full flex flex-col bg-white py-2 px-3 text-black">
                        <!-- <Tintum :data="dataRegistrant" :nama="this.nama" :print="'no'"/> -->
                        <!-- <Epps :data="dataRegistrant" :nama="this.nama" :print="'no'"/> -->
                        <!-- <Kecil :data="dataRegistrant" :nama="this.nama" :print="'no'"/> -->
                        <div v-if="biodata!=null" class="flex flex-col h-full">
                            <Kraepelin :data="this.dataRegistrant" :biodata="this.biodata" :print="'no'"/>
                        </div>
                    </div>
                    <div class="w-1/2 h-full flex flex-col bg-white py-2 px-3 text-black">
                        <!-- <EppsGraphics :data="dataRegistrant" :nama="this.nama" :id="'pChart'"/> -->
                        <div v-if="biodata!=null" class="flex flex-col h-full">
                            <KraepelinGraphics :data="this.dataRegistrant" :biodata="this.biodata" :id="'pChart'"/>
                        </div>
                    </div>
                    <!-- <div class="absolute -z-20" id="pdf"> -->
                    <div class="absolute -z-20" id="pdf">
                        <div class="flex flex-col bg-white py-2 px-3 text-black mb-3" :class="{'opacity-100': prints, 'opacity-0': prints==false}"
                            style="width: 595px; height: 835px; font-family: Arial, Helvetica, sans-serif" >
                            <!-- <Tintum :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                            <!-- <Epps :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                            <!-- <Kecil :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                            <div v-if="biodata!=null" class="flex flex-col h-full">
                                <Kraepelin :data="this.dataRegistrant" :biodata="this.biodata" :print="'yes'"/>
                            </div>
                        </div>
                        <div class="flex flex-col bg-white py-2 px-3 text-black" :class="{'opacity-100': prints, 'opacity-0': prints==false}"
                            style="width: 595px; height: 835px; font-family: Arial, Helvetica, sans-serif" >
                            <!-- <EppsGraphics :data="dataRegistrant" :nama="this.nama" :id="'printChart'"/> -->
                            <div v-if="biodata!=null" class="flex flex-col h-full">
                                <KraepelinGraphics :data="this.dataRegistrant" :biodata="this.biodata" :id="'printChart'"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div id="spinner-modal" class="fixed top-0 left-0 w-screen h-screen flex items-center bg-foreground-3-500 bg-opacity-70 justify-center z-20" style="display: none">
            <i class="fas fa-spinner animate-spin fa-7x inline-block text-foreground-4-100"></i>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

import Radio from '../../components/radiobutton.vue'

import Tintum from "../../components/report/tintum.vue"

import Epps from "../../components/report/epps.vue"
import EppsGraphics from "../../components/report/eppsGraphics.vue"

import Kecil from "../../components/report/kecilkecil.vue"

import Kraepelin from "../../components/report/kraepelin.vue"
import KraepelinGraphics from "../../components/report/kraepelinGraphics.vue"

export default {
    components: { 
        axios, Radio, Tintum, Epps, EppsGraphics, Kecil, Kraepelin, KraepelinGraphics
    },
    data () {
        return {
            judulHalaman: 'Registrant Detail',
            dataRegistrant: [],
            dataNow: null,
            biodata: null,
            test: null,
            testResult: null,
            sectionList: null,
            sectionResult: null,
            loaded: 0,
            tesKraepelin: false,
            keyData: null,
            email: this.$route.query.registrant,
            exam_session: null,
            port: import.meta.env.VITE_BACKEND_URL,
            prints: false
        }
    },
    methods:{
        toDate(timeString){
            const waktu = new Date(timeString)
            const date = ('00'+waktu.getDate()).slice(-2) + "/" + ('00'+(waktu.getMonth()+1)).slice(-2) + "/" + waktu.getFullYear()
            const time = ('00'+waktu.getHours()).slice(-2) + ":" + ('00'+waktu.getMinutes()).slice(-2)
            const dateTime = date + ' ' + time
            return dateTime
        },
        isKraepelin(){
            this.sectionList[0].question_num = 1350
            axios
            .get(this.port+'/kreapelin_data/getbyemail/'+this.$route.query.registrant)
            .then(({data}) => (
                this.biodata = null,
                this.$nextTick(() => {
                    this.biodata = data
                }),
                axios
                .get(this.port+'/test_result/getbyemail/'+this.$route.query.registrant)
                .then(({data}) => (
                    this.checkTest(5, data),
                    this.tesKraepelin = true
                ))
            ))
        },
        async dataInit(){
            for (let i = 0; i < this.testResult.length; i++) {
                // console.log(this.testResult[i].result)
                if(this.testResult[i].result != null && this.testResult[i].result != "")
                    this.testResult[i].result = JSON.parse(this.testResult[i].result)
            }

            this.test = []
            for (let i = 0; i < this.testResult.length; i++) {
                let data = await axios.get(this.port+'/test/'+this.testResult[i].test_id)
                this.test.push(data.data)
            }
            this.dataNow = {
                "nama": "abc",
                "tes": this.test[0].name,
                "start": this.toDate(this.testResult[0].start_date),
                "finish": this.toDate(this.testResult[0].finish_date)
            }

            axios
            .get(this.port+'/section/all/'+this.test[0].id)
            .then(({data}) => (
                this.sectionList = data,

                axios
                .get(`${this.port}/section_result/getbytest/${this.test[0].id}?email=${this.$route.query.registrant}`)
                .then(({data}) => {
                    this.processSectionResult(data)
                    if(this.test[0].id == 5) this.isKraepelin()
                })
            ))
            
        },
        processSectionResult(data){
            let arr = []
            if(data!=null){
                for (let i = 0; i < this.sectionList.length; i++) {
                    arr[i] = undefined
                    for (let j = 0; j < data.length; j++) {
                        // console.log(this.sectionList[i].id+" "+data[j].section_id + (this.sectionList[i].id == data[j].section_id))
                        // console.log(data[j].section_id)
                        if (this.sectionList[i].id == data[j].section_id){
                            arr[i] = data[j]
                            break;
                        }
                            
                    }
                }
                
                this.sectionResult = arr
            }
        },
        gantiTes(event){
            this.loaded = 0
            this.tesKraepelin = false
            let id = event.target.value
            for (let i = 0; i < this.test.length; i++) {
                if (this.test[i].id == id){
                    this.dataNow.tes = this.test[i].name
                    this.dataNow.start = this.toDate(this.testResult[i].start_date)
                    this.dataNow.finish = this.toDate(this.testResult[i].finish_date)
                }
            }

            axios
            .get(this.port+'/section/all/'+id)
            .then(({data}) => (
                this.sectionList = data,
                axios
                .get(`${this.port}/section_result/getbytest/${id}?email=${this.$route.query.registrant}`)
                .then(({data}) => {
                    this.processSectionResult(data)
                    if(id == 5) this.isKraepelin()
                })
            ))
        },
        makePDF(jenis){
            this.prints = true
            this.$nextTick(() => {
                window.html2canvas = html2canvas;
                var doc = new jsPDF("p","pt","a4");
                var email = this.email
                var this2 = this
                doc.html(document.getElementById('pdf'), {
                    callback: function(pdf) {
                        if(jenis=='print')
                            window.open(doc.output('bloburl'), '_blank');
                        else if(jenis=='download')
                            pdf.save(email+".pdf");

                        this2.prints = false;
                    }
                })
            })
        },
        checkTest(test, data){
            this.dataRegistrant = data
            console.log(this.dataRegistrant)
            
            if(this.dataRegistrant!=null){
                let dataNow2 = null
                for (let i = 0; i < this.dataRegistrant.length; i++) {
                    const dat = this.dataRegistrant[i];
                    if (dat.test_id == test && dat.result != null)
                        dataNow2 = JSON.parse(dat.result)
                }
                if (dataNow2!=null){
                    this.dataRegistrant = dataNow2
                    this.loaded = 1
                }
            }
        },
        submitKraepelinData(e){
            let pendidikan = e.target["pendidikan"].value
            let jurusan = e.target["jurusan"].value
            let jk = e.target["jk"].value

            $('#spinner-modal').fadeIn("slow");
            axios.post(this.port+'/kreapelin_data/update',{
                "section_result_id": this.sectionResult[0].id,
                "email": this.email,
                "pendidikan": pendidikan,
                "jurusan": jurusan,
                "jenis_kelamin": jk
            })
            .then((response) => {
                axios.post(this.port+'/test_result/calculateresult',{
                    test_id: 5,
                    email: this.email
                })
                .then((response) => {
                    $('#spinner-modal').fadeOut("slow"),
                    axios
                    .get(`${this.port}/section_result/getbytest/5?email=${this.email}`)
                    .then(({data}) => {
                        this.processSectionResult(data)
                        this.isKraepelin()
                    })
                })
            }).catch( error => { 
                console.log('error: ' + error) 
            });
        }
    },
    created(){
        this.$emit('updateHeader', this.judulHalaman)
    },
    mounted(){
        axios
        .get(this.port+'/test_result/getbyemail/'+this.$route.query.registrant)
        .then(({data}) => (
            this.testResult = data,
            this.dataInit()
        ))

        // axios
        // .get(this.port+'/exam_session/getbyemail/'+this.email)
        // .then(({data}) => (
        //     this.exam_session = data.id,
            // axios
            // .get('http://127.0.0.1:8888/api/test_result/'+this.exam_session)
            // .then(({data}) => (
            //     this.dataRegistrant = JSON.parse(data.result),
            //     this.loaded = 1,
            //     console.log(data)
            // ))
            
            // axios
            // .get(this.port+'/test_result/61')
            // .then(({data}) => (
            //     this.dataRegistrant["ruang_bidang"] = JSON.parse(data.result),
            //     this.loaded = this.loaded+1
            // )),
            // axios
            // .get(this.port+'/test_result/62')
            // .then(({data}) => (
            //     this.dataRegistrant["dpm"] = JSON.parse(data.result),
            //     this.loaded = this.loaded+1
            // )),
            // axios
            // .get(this.port+'/test_result/63')
            // .then(({data}) => (
            //     this.dataRegistrant["komponen"] = JSON.parse(data.result),
            //     this.loaded = this.loaded+1
            // )),
            // axios
            // .get(this.port+'/test_result/64')
            // .then(({data}) => (
            //     this.dataRegistrant["mekanik"] = JSON.parse(data.result),
            //     this.loaded = this.loaded+1
            // )),
            // axios
            // .get(this.port+'/test_result/65')
            // .then(({data}) => (
            //     this.dataRegistrant["penalaran_mekanik"] = JSON.parse(data.result),
            //     this.loaded = this.loaded+1
            // ))
        // ))
    }
    
}
</script>

<style>

</style>