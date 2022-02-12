<template>
    <div class="w-9/12 h-full m-auto text-white relative bottom-44 mt-3 flex flex-col flex-grow pb-3">
        <div class="w-full h-auto">
            <div class="relative">
                
                <h1 class="text-3xl font-bold mb-3 text-white">Test Result</h1>
                <div class="w-5/12 flex text-xl mb-3 text-primary-900">
                    <div class="text-right mr-5">
                        <p class="text-white">Email :</p>
                        <p class="text-white">Nama :</p>
                        <p>Test :</p>
                        <p>Start Date :</p>
                        <p>Finish Date :</p>
                    </div>
                    <div class="text-left">
                        <p class="text-white">abc@gmail.com</p>
                        <p class="text-white">Widean Nagari</p>
                        <p>Test ABC</p>
                        <p>25 Januari 2022</p>
                        <p>25 Januari 2022</p>
                    </div>
                </div>

                <div class="overflow-auto w-full h-full no-scrollbar mt-2 mb-5">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800">
                            <tr>
                                <th class="font-semibold w-1/12">Section No.</th>
                                <th class="font-semibold w-1/12">Answer Type</th>
                                <th class="font-semibold w-2/12">Start</th>
                                <th class="font-semibold w-2/12">Finish</th>
                                <th class="font-semibold w-1/12">Correct</th>
                                <th class="font-semibold w-2/12">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center even:bg-sky-100 odd:bg-sky-200 text-primary-900" v-for="i in 10" :key="i">
                                <td>{{i}}</td>
                                <td>
                                    <span v-if="i==1">Essay</span>
                                    <span v-else>Multiple Choice</span>
                                </td>
                                <td>12/02/2022 08:05</td>
                                <td>12/02/2022 08:10</td>
                                <td>17/20</td>
                                <td class="h-12">
                                    <button v-if="i==1" class="bg-primary-600 text-white ring-2 ring-inset ring-primary-200 hover:bg-primary-800 
                                                    duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
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
                    <button class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                    hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full text-lg px-10 py-2 mr-2"
                                    @click="makePDF">
                                    <i class="fa fa-print mr-2"></i>
                                    <span>Print PDF</span>
                                    </button>
                    <button class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                    hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full text-lg px-10 py-2">
                                    <i class="fa fa-download mr-2"></i>
                                    <span>Download Excel</span>
                                    </button>
                </div>
            </div>
            <div class="w-full bg-primary-700 py-2 px-5 flex flex-col flex-grow" style="height: 48rem;">
                <h1 class="font-bold text-xl mb-2">Print Preview</h1>
                <div class="flex gap-2 justify-center w-full h-full">
                    <div class="w-1/2 h-full flex flex-col bg-white py-2 px-3 text-black">
                        <Tintum :data="data" :print="'no'"/>
                    </div>
                    <div class="hidden">
                        <div class="flex flex-col bg-white py-2 px-3 text-black" 
                            style="width: 595px; height: 835px; font-family: Arial, Helvetica, sans-serif" id="pdf">
                            <Tintum :data="data" :print="'yes'"/>
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
export default {
    components: { 
        axios, Tintum
    },
    data () {
        return {
            judulHalaman: 'Session Detail',
            data: null,
        }
    },
    methods:{
        makePDF(){
            window.html2canvas = html2canvas;
            var doc = new jsPDF("p","pt","a4",true);
            doc.html(document.getElementById('pdf'), {
                callback: function(pdf) {
                    pdf.save("mypdf.pdf");
                }
            })
        }
    },
    created(){
        this.$emit('updateHeader', this.judulHalaman)
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8888/api/test_result/3')
        .then(({data}) => (
            this.data = JSON.parse(data.result)
        ))
    }
    
}
</script>

<style>

</style>