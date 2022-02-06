<template>
    <div class="w-9/12 h-full m-auto text-white relative mt-3 flex flex-col flex-grow pb-3">
        <h1 class="text-3xl font-bold mb-3 text-primary-900">Test Result</h1>
        <div class="w-full h-auto">
            <div class="relative">
                <div class="w-5/12 flex text-xl mb-3 text-primary-900">
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
                <div class="absolute right-0 bottom-0">
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
import Tintum from "../components/report/tintum.vue"
export default {
    components: { 
        axios, Tintum
    },
    data () {
        return {
            judulHalaman: 'Test Result',
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
        this.$emit('updateJudul', this.judulHalaman)
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