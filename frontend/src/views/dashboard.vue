<template>
    <div class="absolute top-0 z-0 w-full h-full flex text-white">
        <div class="w-9/12 h-auto min-h-screen pt-16 px-5">
            <h1 class="text-2xl font-bold mt-3">Belum Diselesaikan</h1>
            <div class="w-auto h-auto mt-2">
                <div class="h-56 w-48 mb-2 mr-2 inline-block align-top relative" v-for="i in 7" :key="i">
                    <div class="w-full h-24 bg-primary-500 px-2 py-1 hover:h-56 duration-500 group">
                        <div class="mb-1">
                            <i class="fas fa-file-alt mr-2"></i>
                            <span class="text-lg font-bold">Tes {{i}}</span>
                        </div>
                        <hr class="mb-1">
                        <div class="p-2 flex -mt-28 content opacity-0 relative group-hover:opacity-100 group-hover:mt-0 duration-700">
                            <div class="mr-2 inline-block">
                                <i class="fas fa-file-alt"></i> <br>
                                <i class="fas fa-clock"></i> <br>
                                <i class="fa fa-check"></i> <br>
                            </div>
                            <div>
                                <p>20 Questions</p>
                                <p>6 Minutes</p>
                                <p>Multiple Choices (A - E)</p>
                            </div>
                        </div>
                        <div class="text-center mt-2">
                            <button class="ring-2 ring-inset ring-white hover:bg-primary-800 hover:ring-primary-800 
                                            duration-200 px-3 py-2 rounded-full"
                                            @click="this.$router.push({path: '/preExam'})">Kerjakan Tes Ini</button>
                        </div>
                    </div>
                </div>

                <div class="h-56 w-48 mb-2 mr-2 inline-block align-top relative">
                    <div class="w-full h-24 bg-primary-600 px-2 py-1 hover:h-56 duration-500 group">
                        <div class="mb-1">
                            <i class="fas fa-file-alt mr-2"></i>
                            <span class="text-lg font-bold">Biodata</span>
                        </div>
                        <hr class="mb-1">
                        <div class="p-2 flex -mt-28 content opacity-0 relative group-hover:opacity-100 group-hover:mt-0 duration-700">
                            <p>Tekan tombol "Isi Biodata" untuk menuju ke form pengisian data diri</p>
                        </div>
                        <div class="text-center mt-2">
                            <button class="ring-2 ring-inset ring-white hover:bg-primary-800 hover:ring-primary-800 
                                            duration-200 px-3 py-2 rounded-full"
                                            @click="this.$router.push({path: '/preExam'})">Isi Biodata</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-3/12 h-auto min-h-screen flex flex-col bg-primary-600 pt-20 pb-5 px-5">
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
                <div class="w-full mr-2 h-auto bg-primary-500 inline-block mb-2 px-2 py-1" v-for="i in 3" :key="i">
                    <div class="flex items-center">
                        <i class="fas fa-file-alt mr-3"></i>
                        <div>
                            <p class="text-lg font-bold">Tes {{i+7}}</p>
                            <p class="text-gray-300 text-sm italic">Diselesaikan Pada 17 Januari 2022 20:20:24</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timestamp: '',
            tenggat: 'Senin, 17 Januari 2022 23:59:59',
            timerWaktu: null,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
            day: ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"],
        }
    },
    created() {
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
    }
}
</script>

<style>

</style>