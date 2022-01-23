<template>
    <div class="absolute top-0 z-0 w-full h-full flex text-white">
        <div class="w-9/12 h-auto min-h-screen pt-16 px-5">
            <Skippable />
            <!-- <Continous /> -->
        </div>
        <div class="w-3/12 h-auto min-h-screen flex flex-col bg-primary-700 pt-20 pb-5 px-5">
            <div class="flex justify-between text-sm font-bold">
                <div class="text-right mb-2">
                    <p>Waktu Lokal : </p>
                    <p>Tenggat Waktu : </p>
                </div>
                <div>
                    <p>{{timestamp || 'Getting Current Time...'}}</p>
                    <p>{{tenggat}}</p>
                </div>
            </div>
            <hr>
            <h1 class="text-xl font-bold mt-3">Tes Yang Sudah Selesai</h1>
            <div class="w-auto mt-2 overflow-x-hidden overflow-y-auto no-scrollbar">
                <div class="w-full mr-2 h-auto bg-primary-600 inline-block mb-2 px-2 py-1 rounded-lg" v-for="i in 3" :key="i">
                    <div class="flex items-center">
                        <i class="fas fa-file-alt mr-3"></i>
                        <div>
                            <p class="text-lg font-bold">Tes {{i+7}}</p>
                            <p class="text-gray-300 text-sm italic">Diselesaikan Pada 21 Januari 2022 20:20:24</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Continous from '../components/views/continousTest.vue'
import Skippable from '../components/views/skippableTest.vue'

export default {
    components: {
        Continous, Skippable
    },
    data() {
        return {
            judulHalaman: 'Dashboard',
            timestamp: '',
            tenggat: 'Jumat, 21 Januari 2022 23:59:59',
            timerWaktu: null,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
            day: ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"],
        }
    },
    data() {
        return {
            judulHalaman: 'Dashboard',
            timestamp: '',
            tenggat: 'Jumat, 21 Januari 2022 23:59:59',
            timerWaktu: null,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
            day: ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"],
        }
    },
    created() {
        this.$emit('updateJudul', this.judulHalaman)
        this.timerWaktu = setInterval(() => {
            this.getNow()
        }, 1000)
    },
    methods: {
        getNow() {
            const today = new Date()
            const date = this.day[today.getDay()-1] + ", " + ('00'+today.getDate()).slice(-2) + " " + this.month[today.getMonth()] + " " + today.getFullYear()
            const time = ('00'+today.getHours()).slice(-2) + ":" + ('00'+today.getMinutes()).slice(-2) + ":" + ('00'+today.getSeconds()).slice(-2)
            const dateTime = date + ' ' + time
            this.timestamp = dateTime
        }
    },
}
</script>

<style>

</style>