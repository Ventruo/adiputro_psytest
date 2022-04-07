<template>
    <div class="flex justify-center mb-1">
        <img src="../../assets/logo.png" alt="" class="w-32 bg-primary-900 py-2 px-3 rounded-xl">
    </div>
    
    <hr v-if="print=='yes'" style="border-top: 2px solid black; margin-top: 10px;">
    <hr v-else style="border-top: 2px solid black;">

    <div>
        
    </div>
    <div class="flex mt-2">
        <div class="flex w-1/2">
            <div class="font-bold text-sm">
                <p>Nama :</p>
            </div>
            <div class="ml-2 text-sm">
                <p>{{this.nama}}</p>
            </div>
        </div>
        
        <div class="flex w-1/2 ml-3">
            <div class="font-bold text-sm">
                <p>E-Mail :</p>
            </div>
            <div class="ml-3 text-sm">
                <p>{{this.email}}</p>
            </div>
        </div>
    </div>
    
    <div class="grow text-sm mt-3" v-if="arrTabel!=null">
        <div v-if="print==='no'">
            <div class="flex gap-0.5 mb-2">
                <table class="table-fixed border-collapse border-2 border-black w-1/3" v-for="idx in 3" :key="idx">
                    <thead class="bg-primary-900 text-white">
                        <tr>
                            <th class="font-bold" colspan="3">{{arrTabel[idx-1].jenis}} ({{arrTabel[idx-1].sum_correct}} - {{arrTabel[idx-1].keterangan}})</th>
                        </tr>
                        <tr>
                            <th class="font-bold w-1/3">No.</th>
                            <th class="font-bold w-1/3">Jawab</th>
                            <th class="font-bold w-1/3">Hasil</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y-2 divide-black">
                        <tr class="text-center" v-for="i in arrTabel[idx-1].answers.length" :key="i">
                            <td class="border-black border-r-2 text-xs font-bold">{{this.arrTabel[idx-1].numbers[i-1]}}</td>
                            <td class="border-black border-r-2 text-xs">{{this.arrTabel[idx-1].answers[i-1]==1?"+":"-"}}</td>
                            <td class="border-black border-r-2 text-xs">{{this.arrTabel[idx-1].correct_data[i-1]}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <p class="font-bold">{{this.arrTabel[4].jenis}} ({{this.arrTabel[4].sum_correct}} - {{this.arrTabel[4].keterangan}})</p>
            <div class="flex gap-0.5">
                <table class="table-fixed border-collapse border-2 border-black w-1/3" v-for="idx in 3" :key="idx">
                    <thead class="bg-primary-900 text-white">
                        <tr>
                            <th class="font-bold w-1/3">No.</th>
                            <th class="font-bold w-1/3">Jawab</th>
                            <th class="font-bold w-1/3">Hasil</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y-2 divide-black">
                        <tr class="text-center" v-for="i in 11" :key="i">
                            <td class="border-black border-r-2 text-xs font-bold" v-if="this.arrTabel[4].answers[((idx-1)*11)+(i-1)]!=undefined">{{this.arrTabel[4].numbers[((idx-1)*11)+(i-1)]}}</td>
                            <td class="border-black border-r-2 text-xs" v-if="this.arrTabel[4].answers[((idx-1)*11)+(i-1)]!=undefined">{{this.arrTabel[4].answers[((idx-1)*11)+(i-1)]==1?"+":"-"}}</td>
                            <td class="border-black border-r-2 text-xs" v-if="this.arrTabel[4].answers[((idx-1)*11)+(i-1)]!=undefined">{{this.arrTabel[4].correct_data[((idx-1)*11)+(i-1)]}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>      

        <div v-if="print==='yes'">
            <div class="flex gap-0.5 mb-2">
                <table class="table-fixed border-collapse border-2 border-black w-1/3" v-for="idx in 3" :key="idx">
                    <thead class="bg-primary-900 text-white">
                        <tr>
                            <th class="font-bold" colspan="3">{{arrTabel[idx-1].jenis}} ({{arrTabel[idx-1].sum_correct}} - {{arrTabel[idx-1].keterangan}})</th>
                        </tr>
                        <tr>
                            <th class="font-bold w-1/3"><span class="relative bottom-2">No.</span></th>
                            <th class="font-bold w-1/3"><span class="relative bottom-2">Jawab</span></th>
                            <th class="font-bold w-1/3"><span class="relative bottom-2">Hasil</span></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y-2 divide-black">
                        <tr class="text-center" v-for="i in arrTabel[idx-1].answers.length" :key="i">
                            <td class="border-black border-r-2 text-xs font-bold">
                                <span class="relative bottom-2">{{this.arrTabel[idx-1].numbers[i-1]}}</span>
                            </td>
                            <td class="border-black border-r-2 text-xs">
                                <span class="relative bottom-2">{{this.arrTabel[idx-1].answers[i-1]==1?"+":"-"}}</span>
                            </td>
                            <td class="border-black border-r-2 text-xs">
                               <span class="relative bottom-2">{{this.arrTabel[idx-1].correct_data[i-1]}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <p class="font-bold mb-3">{{this.arrTabel[4].jenis}} ({{this.arrTabel[4].sum_correct}} - {{this.arrTabel[4].keterangan}})</p>
            <div class="flex gap-0.5">
                <table class="table-fixed border-collapse border-2 border-black w-1/3" v-for="idx in 3" :key="idx">
                    <thead class="bg-primary-900 text-white">
                        <tr>
                            <th class="font-bold w-1/3"><span class="relative bottom-2">No.</span></th>
                            <th class="font-bold w-1/3"><span class="relative bottom-2">Jawab</span></th>
                            <th class="font-bold w-1/3"><span class="relative bottom-2">Hasil</span></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y-2 divide-black">
                        <tr class="text-center" v-for="i in 11" :key="i">
                            <td class="border-black border-r-2 text-xs font-bold" v-if="this.arrTabel[4].answers[((idx-1)*11)+(i-1)]!=undefined">
                                <span class="relative bottom-2">{{this.arrTabel[4].numbers[((idx-1)*11)+(i-1)]}}</span>
                            </td>
                            <td class="border-black border-r-2 text-xs" v-if="this.arrTabel[4].answers[((idx-1)*11)+(i-1)]!=undefined">
                                <span class="relative bottom-2">{{this.arrTabel[4].answers[((idx-1)*11)+(i-1)]==1?"+":"-"}}</span>
                            </td>
                            <td class="border-black border-r-2 text-xs" v-if="this.arrTabel[4].answers[((idx-1)*11)+(i-1)]!=undefined">
                                <span class="relative bottom-2">{{this.arrTabel[4].correct_data[((idx-1)*11)+(i-1)]}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- <div class="text-xs mb-2">
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
                    <p class="font-bold">Adiputrogroup.com</p>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
    props: {
        "data": { type: Object, default: [], required: true },
        "nama": { type: String, default: "", required: true },
        "email": { type: String, default: "", required: true },
        // "biodata": { type: Object, default: [], required: true },
        "print": { type: String, default: 'no', required: true },
    },
    data() {
        return {
            arrTabel: null,
            bio: null
        }
    },
    mounted() {
        this.arrTabel = this.data
        // this.bio = this.biodata
        // console.log(this.bio)
        console.log(this.arrTabel)
    },
}
</script>

<style>

</style>