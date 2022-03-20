<template>
    <div class="flex justify-center mb-1">
        <img src="../../assets/logo.png" alt="" class="w-32 bg-primary-900 py-2 px-3 rounded-xl">
    </div>
    
    <hr style="border-top: 2px solid black;">

    <div class="flex my-2">
        <div class="flex">
            <div class="font-bold text-sm">
                <p class="mb-2">Nama</p>
                <p class="mb-2">Jenis Kelamin (L/P)</p>
                <p>Pendidikan</p>
            </div>
            <div class="ml-2 text-sm">
                <p class="mb-2">: {{this.nama}}</p>
                <p class="mb-2">: L</p>
                <p>: S1</p>
            </div>
        </div>
    </div>

    <hr v-if="print=='yes'" style="border-top: 2px solid black; margin-top: 10px;">
    <hr v-else style="border-top: 2px solid black;">

    <div class="grow text-sm mt-3" v-if="arrData!=null">
        <div class="flex">
            <div class="font-bold text-sm">
                <p class="mb-2">Berhitung</p>
                <p class="mb-2">Ekspresi</p>
                <p class="mb-2">Penalaran</p>
                <p class="mb-2">Pemahaman</p>
                <p class="mb-2">Ruang Bidang</p>
                <p class="mb-2">DPM</p>
                <p class="mb-2">Komponen</p>
                <p class="mb-2">Merakit</p>
                <p class="mb-2">Penalaran Mekanik</p>
            </div>
            <div class="ml-2 text-sm">
                <p class="mb-2" v-for="i in 4" :key="i">-</p>
                <p class="mb-2" v-for="i in 5" :key="i">
                    : Benar ({{arrData[i-1].num_correct}})
                </p>
            </div>
            <div class="ml-2 text-sm">
                <p class="mb-2" v-for="i in 4" :key="i">-</p>
                <p class="mb-2" v-for="i in 5" :key="i">
                    Norma ({{arrData[i-1].norma}})
                </p>
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
        "data": { type: Object, default: [], required: true },
        "print": { type: String, default: 'no', required: true },
        "nama": { type: String, default: '', required: true },
    },
    data() {
        return {
            arrData: null
        }
    },
    mounted() {
        var temp = Object.entries(this.data)
        var ctr = 0
        var arrTemp = []
        temp.forEach(t => {
            if(t[1]==null){
                arrTemp[ctr] = {
                    "num_correct": '-',
                    "norma": '-'
                }
            }else{
                arrTemp[ctr] = {
                    "num_correct": t[1][0].num_correct,
                    "norma": t[1][0].norma
                }
            }
            ctr++
        });
        this.arrData = arrTemp
    },
}
</script>

<style>

</style>