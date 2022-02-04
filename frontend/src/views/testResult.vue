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
                                    hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full text-lg px-10 py-2 mr-2">
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
                    <div class="w-1/2 h-full flex flex-col bg-white py-2 px-3 text-black" id="pdf">
                        <div class="flex justify-center mb-1">
                            <img src="../assets/logo.png" alt="" class="w-32 bg-primary-900 py-2 px-3 rounded-xl">
                        </div>
                        
                        <hr style="border-top: 2px solid black;">

                        <div class="flex relative">
                            <div class="font-bold">
                                <p>Nama</p>
                                <p>Jenis Kelamin (L/P)</p>
                                <p>Pendidikan</p>
                            </div>
                            <div class="ml-3">
                                <p>: Achmad Sawaludin</p>
                                <p>: L</p>
                                <p>: S1</p>
                            </div>
                        </div>

                        <div v-if="data!=null" class="grow text-sm mt-2">
                            <table class="table-fixed border-collapse border border-primary-200 w-full text-white mb-2">
                                <thead class="bg-primary-900">
                                    <tr>
                                        <th class="font-semibold w-3/12">Persoalan</th>
                                        <th class="font-semibold w-3/12">Nilai</th>
                                        <th class="font-semibold w-3/12">Norma</th>
                                        <th class="font-semibold w-3/12">Tintum</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-primary-500 divide-y divide-primary-400">
                                    <tr class="text-center" v-for="(report, idx) in data.data" :key="idx">
                                        <td>{{idx+1}}</td>
                                        <td>{{report.num_correct}}</td>
                                        <td>{{report.norm}}</td>
                                        <td>{{report.tintum}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div class="flex justify-end mr-2">
                                <div class="text-right mr-2 font-bold">
                                    <p>Total :</p>
                                    <p>Total/10 :</p>
                                    <p>IQ :</p>
                                </div>
                                <div>
                                    <p>{{data.norms_sum}}</p>
                                    <p>{{data.norms_sum/10}}</p>
                                    <p>{{data.iq}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-xs">
                            <div class="w-full">
                                <p class="font-bold">PT. Adiputro Wirasejati</p>
                                <div class="flex justify-between relative w-full">
                                    <div>
                                        <div>
                                            <p>Jl. Raya Balearjosari no. 35</p>
                                            <p>Malang, Jawa Timur - Indonesia 65126</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div class="flex gap-2">
                                                <p class="font-bold">T</p>
                                                <p>+62 (0) 341 491 139</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex gap-2">
                                                <p class="font-bold">F</p>
                                                <p>+62 (0) 341 491 904</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-end">
                                        <p class="font-bold">Adiputroproup.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="w-1/2 h-full flex flex-col bg-white py-2 px-3 text-black" id="pdf">
                        <div class="flex justify-center">
                            <img src="../assets/logo.png" alt="" class="w-1/4">
                        </div>
                        
                        <hr style="border-top: 2px solid black;">

                        <div class="flex relative">
                            <div class="font-bold">
                                <p>Nama</p>
                                <p>Jenis Kelamin (L/P)</p>
                                <p>Pendidikan</p>
                            </div>
                            <div class="ml-3">
                                <p>: Widean Nagari</p>
                                <p>: L</p>
                                <p>: SMA</p>
                            </div>
                            <div class="absolute right-0 bottom-0">
                                <div class="flex">
                                    <div class="font-bold mr-2">
                                        <p>M</p>
                                        <p>AW</p>
                                    </div>
                                    <div class="mr-2">
                                        <p>=</p>
                                        <p>=</p>
                                    </div>
                                    <div>
                                        <p>??</p>
                                        <p>??</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grow text-sm mt-2">
                            <table class="table-fixed border-collapse border border-primary-200 w-full text-white mb-2">
                                <thead class="bg-primary-900 divide-y divide-primary-200">
                                    <tr>
                                        <th class="font-semibold w-1/12">Faktor</th>
                                        <th class="font-semibold w-1/12">r</th>
                                        <th class="font-semibold w-1/12">c</th>
                                        <th class="font-semibold w-1/12">RS</th>
                                        <th class="font-semibold w-1/12">%</th>
                                        <th class="font-semibold w-3/12">Kategori</th>
                                        <th class="font-semibold w-1/12">Ket</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-primary-500 divide-y divide-primary-500">
                                    <tr class="text-center">
                                        <td>ach</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>def</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>ord</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>exh</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>aut</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table-fixed border-collapse border border-primary-200 w-full text-white mb-2">
                                <thead>
                                    <tr>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-3/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                    </tr>
                                </thead>
                                <tbody class="bg-primary-500 divide-y divide-primary-500">
                                    <tr class="text-center">
                                        <td>aff</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>int</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>suc</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>dom</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>aba</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table-fixed border-collapse border border-primary-200 w-full text-white">
                                <thead>
                                    <tr>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-3/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                    </tr>
                                </thead>
                                <tbody class="bg-primary-500 divide-y divide-primary-500">
                                    <tr class="text-center">
                                        <td>nur</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>cgh</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>end</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>het</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                    <tr class="text-center">
                                        <td>agg</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>kategori</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table-fixed w-full">
                                <thead>
                                    <tr>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                        <th class="font-semibold w-3/12"></th>
                                        <th class="font-semibold w-1/12"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td class="font-bold">[total harus 210]</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="flex">
                                <p class="mr-5 font-bold">con</p>
                                <p class="mr-2">??</p>
                                <p class="mr-2">??</p>
                                <p class="mr-2">??</p>
                            </div>
                        </div>
                        <div class="text-xs">
                            <div class="w-full">
                                <p class="font-bold">PT. Adiputro Wirasejati</p>
                                <div class="flex justify-between relative w-full">
                                    <div>
                                        <div>
                                            <p>Jl. Raya Balearjosari no. 35</p>
                                            <p>Malang, Jawa Timur - Indonesia 65126</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div class="flex gap-2">
                                                <p class="font-bold">T</p>
                                                <p>+62 (0) 341 491 139</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex gap-2">
                                                <p class="font-bold">F</p>
                                                <p>+62 (0) 341 491 904</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-end">
                                        <p class="font-bold">Adiputroproup.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-1/2 h-full flex flex-col bg-white py-2 px-3 text-black" id="pdf">
                        <div class="flex justify-center">
                            <img src="../assets/logo.png" alt="" class="w-1/4">
                        </div>
                        
                        <hr style="border-top: 2px solid black;">

                        <div class="flex relative">
                            <div class="font-bold">
                                <p>Nama</p>
                                <p>Jenis Kelamin (L/P)</p>
                                <p>Pendidikan</p>
                            </div>
                            <div class="ml-3">
                                <p>: Widean Nagari</p>
                                <p>: L</p>
                                <p>: SMA</p>
                            </div>
                            <div class="absolute right-0 bottom-0">
                                <div class="flex">
                                    <div class="font-bold mr-2">
                                        <p>M</p>
                                        <p>AW</p>
                                    </div>
                                    <div class="mr-2">
                                        <p>=</p>
                                        <p>=</p>
                                    </div>
                                    <div>
                                        <p>??</p>
                                        <p>??</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grow text-sm mt-2">
                            <h1 class="text-center font-bold text-xl">Grafik Precentile</h1>
                        </div>
                        <div class="text-xs">
                            <div class="w-full">
                                <p class="font-bold">PT. Adiputro Wirasejati</p>
                                <div class="flex justify-between relative w-full">
                                    <div>
                                        <div>
                                            <p>Jl. Raya Balearjosari no. 35</p>
                                            <p>Malang, Jawa Timur - Indonesia 65126</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div class="flex gap-2">
                                                <p class="font-bold">T</p>
                                                <p>+62 (0) 341 491 139</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex gap-2">
                                                <p class="font-bold">F</p>
                                                <p>+62 (0) 341 491 904</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-end">
                                        <p class="font-bold">Adiputroproup.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    components: { 
        axios 
    },
    data () {
        return {
            judulHalaman: 'Test Result',
            data: null,
        }
    },
    created(){
        this.$emit('updateJudul', this.judulHalaman)
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8888/api/test_result/2')
        .then(({data}) => (
            this.data = JSON.parse(data.result)
        ))
    }
    
}
</script>

<style>

</style>