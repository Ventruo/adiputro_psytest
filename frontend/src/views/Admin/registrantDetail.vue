<template>
    <div class="w-9/12 h-full m-auto relative mt-3 flex flex-col flex-grow pb-3">
        <div class="w-full h-auto">
            <div class="relative">
                <h1 class="text-3xl font-bold mb-3">Test Result</h1>
                <div class="w-5/12 flex text-xl mb-3">
                    <div class="text-right mr-5">
                        <p>Email :</p>
                        <p>Nama :</p>
                        <p>Test :</p>
                        <p>Start Date :</p>
                        <p>Finish Date :</p>
                    </div>
                    <div class="text-left">
                        <p>abc@gmail.com</p>
                        <p>Widean Nagari</p>
                        <p>Test ABC</p>
                        <p>25 Januari 2022</p>
                        <p>25 Januari 2022</p>
                    </div>
                </div>

                <div class="overflow-auto w-full h-full no-scrollbar mt-2 mb-5">
                    <table class="table-fixed border border-collapse border-stroke-100 w-full font-semibold">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="w-1/12 border border-stroke-100">Section No.</th>
                                <th class="w-2/12 border border-stroke-100">Answer Type</th>
                                <th class="w-2/12 border border-stroke-100">Start</th>
                                <th class="w-2/12 border border-stroke-100">Finish</th>
                                <th class="w-1/12 border border-stroke-100">Correct</th>
                                <th class="w-2/12 border border-stroke-100">Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100">
                            <tr class="text-center" v-for="i in 10" :key="i">
                                <td class="border border-stroke-100">{{i}}</td>
                                <td class="border border-stroke-100">
                                    <span v-if="i==1">Essay</span>
                                    <span v-else>Multiple Choice</span>
                                </td>
                                <td class="border border-stroke-100">12/02/2022 08:05</td>
                                <td class="border border-stroke-100">12/02/2022 08:10</td>
                                <td class="border border-stroke-100">17/20</td>
                                <td class="h-12 border border-stroke-100">
                                    <button v-if="i==1" class="bg-safe text-white hover:bg-green-800 duration-200 rounded-full h-auto w-auto text-base px-5 py-1 mr-1" 
                                        @click="this.$router.push({path: '/admin/reviewEssay'})"> 
                                        <i class="fa fa-info-circle mr-2"></i>
                                        <span>Review Answer</span>
                                    </button>
                                    <span v-else>-</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="text-right mb-2">
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-full text-lg px-10 py-2 mr-2"
                                    @click="makePDF">
                                    <i class="fa fa-print mr-2"></i>
                                    <span>Print PDF</span>
                                    </button>
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-full text-lg px-10 py-2">
                                    <i class="fa fa-download mr-2"></i>
                                    <span>Download Excel</span>
                                    </button>
                </div>
            </div>
            <div class="w-full rounded-lg bg-foreground-3-300 ring-1 ring-inset ring-stroke-100 py-2 px-5 flex flex-col flex-grow" style="height: 48rem;">
                <h1 class="font-bold text-xl mb-2">Print Preview</h1>
                <div class="flex gap-2 justify-center w-full h-full" v-if="loaded==1">
                    <div class="w-1/2 h-full flex flex-col bg-white py-2 px-3 text-black">
                        <!-- <Tintum :data="dataRegistrant" :nama="this.nama" :print="'no'"/> -->
                        <!-- <Epps :data="dataRegistrant" :nama="this.nama" :print="'no'"/> -->
                        <!-- <Kecil :data="dataRegistrant" :nama="this.nama" :print="'no'"/> -->
                        <Kraepelin :data="dataRegistrant" :nama="this.nama" :print="'no'"/>
                    </div>
                    <div class="w-1/2 h-full flex flex-col bg-white py-2 px-3 text-black">
                        <!-- <EppsGraphics :data="dataRegistrant" :nama="this.nama" :id="'pChart'"/> -->
                        <KraepelinGraphics :data="dataRegistrant" :nama="this.nama" :id="'pChart'"/>
                    </div>
                    <div class="absolute -z-20" id="pdf">
                        <div class="flex flex-col bg-white py-2 px-3 text-black" 
                            style="width: 595px; height: 835px; font-family: Arial, Helvetica, sans-serif" >
                            <!-- <Tintum :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                            <!-- <Epps :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                            <!-- <Kecil :data="dataRegistrant" :nama="this.nama" :print="'yes'"/> -->
                            <Kraepelin :data="dataRegistrant" :nama="this.nama" :print="'yes'"/>
                        </div>
                        <div class="flex flex-col bg-white py-2 px-3 text-black" 
                            style="width: 595px; height: 835px; font-family: Arial, Helvetica, sans-serif">
                            <!-- <EppsGraphics :data="dataRegistrant" :nama="this.nama" :id="'printChart'"/> -->
                            <KraepelinGraphics :data="dataRegistrant" :nama="this.nama" :id="'printChart'"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

import Tintum from "../../components/report/tintum.vue"

import Epps from "../../components/report/epps.vue"
import EppsGraphics from "../../components/report/eppsGraphics.vue"

import Kecil from "../../components/report/kecilkecil.vue"

import Kraepelin from "../../components/report/kraepelin.vue"
import KraepelinGraphics from "../../components/report/kraepelinGraphics.vue"

export default {
    components: { 
        axios, Tintum, Epps, EppsGraphics, Kecil, Kraepelin, KraepelinGraphics
    },
    data () {
        return {
            judulHalaman: 'Registrant Detail',
            dataRegistrant: [],
            loaded: 0,
            keyData: null,
            email: this.$route.query.registrant,
            exam_session: null,
            nama: 'Mr. X',
            port: import.meta.env.VITE_BACKEND_URL
        }
    },
    methods:{
        makePDF(){
            window.html2canvas = html2canvas;
            var doc = new jsPDF("p","pt","a4");
            doc.html(document.getElementById('pdf'), {
                callback: function(pdf) {
                    pdf.save("Mr. X.pdf");
                }
            })
        }
    },
    created(){
        this.$emit('updateHeader', this.judulHalaman)
    },
    mounted(){
        axios
        .get(this.port+'/test_result/27')
        .then(({data}) => (
            this.dataRegistrant = JSON.parse(data.result),
            this.loaded = 1
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