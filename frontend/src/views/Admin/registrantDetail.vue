<template>
    <div class="w-9/12 h-full m-auto relative mt-3 flex flex-col flex-grow pb-3">
        <div class="w-full h-auto">
            <router-link :to="routerBiodata" class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-md text-md px-10 py-2 shadow-xl">
                <i class="fa fa-info-circle mr-2"></i>
                <span>Lihat Biodata</span>
            </router-link>
            <div class="flex my-5">
                <label class="text-xl font-bold w-32">Nama Tes : </label>
                <select name="" id="testCombobox" v-model="selectedTes" class="text-black text-lg rounded-xl py-1 px-2 w-10/12 outline-none shadow-xl cursor-pointer"
                    @change="selectChange($event)">
                    <option v-for="i in test" :key="i" v-bind:value="i.id">{{i.name}}</option>
                </select>
            </div>
            <div class="relative mb-3">
                <h1 class="text-3xl font-bold">Hasil Tes</h1>
                <div class="flex mb-3 mt-2" v-if="this.dataNow!=null">
                    <div class="w-6/12 flex text-lg">
                        <div class="text-right mr-5 text-gray-700">
                            <p>E-Mail :</p>
                            <p>Nama :</p>
                            <p>Jenis Tes :</p>
                        </div>
                        <div class="text-left">
                            <p>{{this.email}}</p>
                            <p>{{this.dataNow.nama}}</p>
                            <p>{{this.dataNow.tes}}</p>
                        </div>
                    </div>
                    <div class="w-6/12 flex text-lg">
                        <div class="text-right mr-5 text-gray-700">
                            <p>Tanggal Mulai :</p>
                            <p>Tanggal Selesai :</p>
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
                                <th class="w-1/12 py-2">No. Seksi</th>
                                <th class="w-2/12">Tipe Jawaban</th>
                                <th class="w-2/12">Mulai</th>
                                <th class="w-2/12">Selesai</th>
                                <th class="w-1/12">Skor</th>
                                <th class="w-3/12">Aksi</th>
                            </tr>
                        </thead>
                        <tbody v-if="this.sectionList!=null && this.sectionResult!=null">
                            <tr class="text-center odd:bg-foreground-4-50 even:bg-foreground-4-10" v-for="(i, idx) in this.sectionList" :key="idx">
                                <td>{{i.section_number}}</td>
                                <td>
                                    <span v-if="i.section_type==1">Esai</span>
                                    <span v-else>Pilihan Ganda</span>
                                </td>
                                <td>{{this.sectionResult[idx]==undefined? "-" : toDate(this.sectionResult[idx].start_date)}}</td>
                                <td>{{this.sectionResult[idx]==undefined? "-" : toDate(this.sectionResult[idx].finish_date)}}</td>
                                <td>{{this.sectionResult[idx]==undefined? "-" : this.sectionResult[idx].num_correct}}/{{i.question_num}}</td>
                                <td class="h-12">
                                    <button v-if="i.section_type==1 && this.sectionResult[idx]!=undefined" class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-md h-auto w-auto text-base px-5 py-1 mr-1" 
                                        @click="this.$router.push({path: '/admin/reviewEssay'})"> 
                                        <i class="fa fa-info-circle mr-2"></i>
                                        <span>Review</span>
                                    </button>
                                    <button v-if="this.sectionResult[idx]!=undefined" class="bg-foreground-4-100 text-white hover:bg-red-500 duration-200 rounded-md h-auto w-auto text-base px-5 py-1 mr-1" 
                                        @click.prevent="resetHasil(i.id)"> 
                                        <i class="fa-solid fa-circle-exclamation mr-2"></i>
                                        <span>Reset</span>
                                    </button>
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
                                        <select name="pendidikan" id="pendidikanCombobox" class="text-black text-lg rounded-xl py-1 px-2 outline-none shadow-xl mb-5 w-full cursor-pointer">
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
                                    <span>Cetak PDF</span>
                                    </button>
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-md text-md px-10 py-2 mr-2 shadow-xl"
                                    @click="makePDF('download')">
                                    <i class="fa fa-download mr-2"></i>
                                    <span>Unduh PDF</span>
                                    </button>
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-md text-md px-10 py-2 shadow-xl">
                                    <i class="fa fa-download mr-2"></i>
                                    <span>Unduh Excel</span>
                                    </button>
                </div>
            </div>


            <div class="w-full h-auto rounded-lg bg-foreground-3-300 ring-1 ring-inset ring-stroke-100 py-2 px-5 flex flex-col flex-grow mt-2">
                <h1 class="font-bold text-2xl mb-2">Laporan</h1>
                <div class="w-full h-full">
                    <div v-if="loaded==1">
                        <div class="w-1/2 h-[48rem] inline-block">
                            <div class="w-full h-full flex flex-col bg-white text-black relative">
                                <Tintum v-if="idTes==1" :data="dataRegistrant" :nama="this.nama" :print="'no'"/>
                                <!-- <Epps :data="dataRegistrant" :nama="this.nama" :print="'no'"/> -->
                                <!-- <Kecil :data="dataRegistrant" :nama="this.nama" :print="'no'"/> -->
                                <SDI v-if="idTes==3" :data="dataRegistrant" :nama="this.nama" :email="this.email" :print="'no'"/>
                                <MMPI v-if="idTes==4" :data="dataRegistrant" :nama="this.nama" :email="this.email" :print="'no'"/>
                                <div v-if="biodata!=null" class="flex flex-col h-full">
                                    <Kraepelin v-if="idTes==5" :data="this.dataRegistrant" :biodata="this.biodata" :print="'no'"/>
                                </div>
                            </div>
                        </div>
                        <div v-if="idTes==5" class="w-1/2 h-[48rem] inline-block">
                            <div class="w-full h-full flex flex-col bg-white text-black">
                                <!-- <EppsGraphics :data="dataRegistrant" :nama="this.nama" :id="'pChart'"/> -->
                                <div v-if="biodata!=null" class="flex flex-col h-full">
                                    <KraepelinGraphics :data="this.dataRegistrant" :biodata="this.biodata" :id="'pChart'" :print="'no'"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="w-10 h-96"></div>
                    <div class="absolute" v-if="fullLoaded==1">
                        <div v-for="report in dataFull" :key="report" class="printPdf">
                            <div v-if="report.result!==''" class="flex flex-col bg-white text-black mb-3 relative" :class="{'opacity-100': prints, 'opacity-0': prints==false}"
                                style="width: 595px; height: 835px; font-family: Arial, Helvetica, sans-serif" >
                                <!-- <Tintum v-if="report.test_id==1" :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                                <!-- <Epps :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                                <!-- <Kecil :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                                <div v-if="biodata!=null && report.test_id==5"  class="flex flex-col h-full">
                                    <Kraepelin :data="JSON.parse(report.result)" :biodata="this.biodata" :print="'yes'"/>
                                </div>
                                <SDI v-if="report.test_id==3" :data="JSON.parse(report.result)" :nama="this.nama" :email="this.email" :print="'yes'"/>
                                <MMPI v-if="report.test_id==4" :data="JSON.parse(report.result)" :nama="this.nama" :email="this.email" :print="'yes'"/>
                            </div>
                            <div v-if="report.test_id==5 && report.result!==''" class="flex flex-col bg-white text-black relative" :class="{'opacity-100': prints, 'opacity-0': prints==false}"
                                style="width: 595px; height: 835px; font-family: Arial, Helvetica, sans-serif" >
                                <!-- <EppsGraphics :data="dataRegistrant" :nama="this.nama" :id="'printChart'"/> -->
                                <div v-if="biodata!=null" class="flex flex-col h-full">
                                    <KraepelinGraphics :data="JSON.parse(report.result)" :biodata="this.biodata" :id="'printChart'" :print="'yes'"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-40"></div>
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

import SDI from "../../components/report/SDI.vue"

import MMPI from "../../components/report/MMPI.vue"

export default {
    components: { 
        axios, Radio, Tintum, Epps, EppsGraphics, Kecil, Kraepelin, KraepelinGraphics, SDI, MMPI
    },
    data () {
        return {
            judulHalaman: 'Registrant Detail',
            dataRegistrant: [],
            dataFull: [],
            dataNow: null,
            biodata: null,
            test: null,
            idTes: null,
            testResult: null,
            sectionList: null,
            sectionResult: null,
            loaded: 0,
            fullLoaded: 0,
            tesKraepelin: false,
            keyData: null,
            email: this.$route.query.registrant,
            exam_session: null,
            port: import.meta.env.VITE_BACKEND_URL,
            prints: false,
            selectedTes: 1,
            nama: "Widean",
            routerBiodata: "",
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
            .get(this.port+'/test_result/getbyemail/'+this.$route.query.registrant)
            .then(({data}) => (
                this.checkTest(5, data),
                this.tesKraepelin = true
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
            this.selectedTes = this.test[0].id
            this.dataNow = {
                "nama": "abc",
                "tes": this.test[0].name,
                "start": this.toDate(this.testResult[0].start_date),
                "finish": this.toDate(this.testResult[0].finish_date)
            }

            this.idTes = this.test[0].id
            axios
            .get(this.port+'/kreapelin_data/getbyemail/'+this.$route.query.registrant)
            .then(({data}) => (
                this.biodata = null,
                this.$nextTick(() => {
                    this.biodata = data
                })
            ))

            axios
            .get(this.port+'/section/all/'+this.test[0].id)
            .then(({data}) => (
                this.sectionList = data,
                axios
                .get(`${this.port}/section_result/getbytest/${this.test[0].id}?email=${this.$route.query.registrant}`)
                .then(({data}) => {
                    this.processSectionResult(data)
                    if(this.test[0].id == 5) this.isKraepelin()
                    else{
                        axios
                        .get(this.port+'/test_result/getbyemail/'+this.$route.query.registrant)
                        .then(({data}) => {
                            this.dataFull = data
                            // this.dataFull.sort((a, b) => {
                            // let da = new Date(a.test_id),
                            //     db = new Date(b.test_id);
                            //     return db - da;
                            // });
                            this.fullLoaded = 1
                            this.checkTest(this.test[0].id,data)

                        })
                    }
                })
            ))
            
            axios
            .get(`${this.port}/exam_session/getbyemail/${this.$route.query.registrant}`)
            .then(({data}) => {
                this.exam_session = data.id
            })
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
                this.sectionResult = []
                this.sectionResult = arr
            }
        },
        selectChange(event){
            let id = event.target.value
            this.gantiTes(id)
        },
        gantiTes(id){
            this.idTes = id
            this.sectionResult = []
            this.loaded = 0
            this.tesKraepelin = false
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
                    else{
                        axios
                        .get(this.port+'/test_result/getbyemail/'+this.$route.query.registrant)
                        .then(({data}) => (
                            this.checkTest(id,data)
                        ))
                    }
                })
            ))
        },
        makePDF(jenis){
            this.prints = true
            this.$nextTick(() => {
                window.html2canvas = html2canvas;
                let email = this.email
                let this2 = this
                
                var doc = new jsPDF('p', 'mm', 'a4', true);
                var imgWidth = 210; 
                var pageHeight = 295;  
                var position = 0;
                let ctr = 0
                let temp = document.querySelectorAll('.printPdf')
                let fullReport = []
                for (let i = 0; i < this.dataFull.length; i++) {
                    if(this.dataFull[i].result!=""){
                        fullReport.push(temp[i])
                    }
                    
                }
                fullReport.forEach(report => {
                    // console.log(report)
                    html2canvas(report,{"scale": 2}).then(canvas => {
                        var imgHeight = canvas.height * imgWidth / canvas.width;
                        var heightLeft = imgHeight;
                        var imgData = canvas.toDataURL('image/jpeg');
                        
                        let moreThan1 = false
                        doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                        while (heightLeft >= 0) {
                            position += heightLeft - imgHeight - 4; // top padding for other pages
                            doc.addPage();
                            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                            heightLeft -= pageHeight;
                            moreThan1 = true
                        }

                        if (!moreThan1)
                            doc.addPage()
                        
                        ctr++
                        if(ctr == fullReport.length){
                            doc.deletePage(doc.internal.getNumberOfPages())
                            if(jenis=='print')
                                window.open(doc.output('bloburl'), '_blank');
                            else if(jenis=='download'){
                                doc.save(email+".pdf")
                            }
                        }
                    })
                });

                this2.prints = false;

            //     var doc = new jsPDF("p","pt","a4", "abc");
            //     var this2 = this
            //     doc.html(document.getElementById('pdf'), {
            //         callback: function(pdf) {
            //             if(jenis=='print')
            //                 window.open(doc.output('bloburl'), '_blank');
            //             else if(jenis=='download'){
            //                 //not firefox
            //                 // if(navigator.userAgent.indexOf("Firefox")==-1)
            //                     pdf.save(email+".pdf")
            //                 //firefox
            //                 // else {
            //                     // pdf.save(email+".pdf")
            //                 // }
            //             }
            //             this2.prints = false;
            //         }
            //     })
            })
        },
        checkTest(test, data){
            this.dataRegistrant = data
            // console.log(this.dataRegistrant)
            
            if(this.dataRegistrant!=null){
                let dataNow2 = null
                for (let i = 0; i < this.dataRegistrant.length; i++) {
                    const dat = this.dataRegistrant[i];
                    if (dat.test_id == test && dat.result != null && dat.result!='')
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
        },
        resetHasil(sec_id){
            Swal.fire({
                title: 'Yakin mereset hasil jawaban ini?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#spinner-modal').fadeIn("slow");
                    axios.post(this.port+'/question_result/resetQuestion',{
                        exam_session: this.exam_session,
                        section_id: sec_id
                    })
                    .then((response) => {
                        axios
                        .get(this.port+'/test_result/getbyemail/'+this.$route.query.registrant)
                        .then(({data}) => (
                            this.testResult = data,
                            this.dataInit(),
                            $('#spinner-modal').fadeOut("slow"),
                            Swal.fire({
                                title: 'Sukses mereset jawaban!',
                                icon: 'success',
                                confirmButtonColor: '#3085d6',
                                confirmButtonText: 'Tutup',
                            }),
                            this.gantiTes(this.selectedTes)
                        ))
                    })
                }
            });
        },
    },
    created(){
        this.$emit('updateHeader', this.judulHalaman)
    },
    mounted(){
        this.routerBiodata = "/admin/biodata?registrant="+this.$route.query.registrant
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