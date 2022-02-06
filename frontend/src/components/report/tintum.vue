<template>
    <div class="flex justify-center mb-1">
        <img src="../../assets/logo.png" alt="" class="w-32 bg-primary-900 py-2 px-3 rounded-xl">
    </div>
    
    <hr style="border-top: 2px solid black;">

    <div class="flex relative">
        <div class="font-bold">
            <p>Nama</p>
            <p>Jenis Kelamin (L/P)</p>
            <p>Pendidikan</p>
        </div>
        <div class="ml-3">
            <p>: Hasil Tes Kedua</p>
            <p>: L</p>
            <p>: S1</p>
        </div>
    </div>

    <div v-if="data!=null" class="grow text-sm mt-3">
        <table class="table-fixed border-collapse border border-primary-200 w-full text-white mb-2">
            <thead class="bg-primary-900">
                <tr v-if="print==='yes'">
                    <th class="font-semibold w-3/12"><span class="relative bottom-2 font-bold">Persoalan</span></th>
                    <th class="font-semibold w-3/12"><span class="relative bottom-2 font-bold">Nilai</span></th>
                    <th class="font-semibold w-3/12"><span class="relative bottom-2 font-bold">Norma</span></th>
                    <th class="font-semibold w-3/12"><span class="relative bottom-2 font-bold">Tintum</span></th>
                </tr>
                <tr v-else-if="print==='no'">
                    <th class="font-semibold w-3/12">Persoalan</th>
                    <th class="font-semibold w-3/12">Nilai</th>
                    <th class="font-semibold w-3/12">Norma</th>
                    <th class="font-semibold w-3/12">Tintum</th>
                </tr>
            </thead>
            <tbody v-if="print==='yes'" class="bg-primary-500 divide-y divide-primary-400">
                <tr class="text-center" v-for="(report, idx) in data.data" :key="idx">
                    <td><span class="relative bottom-2">{{idx+1}}</span></td>
                    <td><span class="relative bottom-2">{{report.num_correct}}</span></td>
                    <td><span class="relative bottom-2">{{report.norm}}</span></td>
                    <td><span class="relative bottom-2">{{report.tintum}}</span></td>
                </tr>
            </tbody>
            <tbody v-else-if="print==='no'" class="bg-primary-500 divide-y divide-primary-400">
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
                <p>Total / 10 :</p>
                <p>IQ :</p>
            </div>
            <div>
                <p>{{data.norms_sum}}</p>
                <p>{{data.norms_sum/10}}</p>
                <p>{{data.iq}}</p>
            </div>
        </div>
    </div>
    <div class="text-xs mb-2">
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
    </div>
</template>

<script>
export default {
    props: {
        "data": { type: Array, default: [], required: true },
        "print": { type: String, default: 'no', required: true },
    },
}
</script>

<style>

</style>