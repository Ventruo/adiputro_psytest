<template>
    <div class="w-full h-full flex text-white">
        <div class="w-3/12 h-auto min-h-screen flex flex-col bg-foreground-4-200 pt-4 pb-5 px-5 rounded-r-3xl">
            <div class="text-center my-5">
                <img src="../assets/logo.png" alt="" class="w-32 inline-block">
            </div>
            <div>
                <p class="text-lg font-bold">Waktu Lokal : </p>
                <p class="mb-2">{{timestamp || 'Getting Current Time...'}}</p>

                <p class="text-lg font-bold">Tenggat Waktu : </p>
                <p>{{tenggat}}</p>
            </div>
            <h1 class="text-xl font-bold mt-3">Tes Selesai: </h1>
            <div class="w-auto mt-2 overflow-x-hidden overflow-y-auto no-scrollbar text-foreground-4-800 grow">
                <div class="w-full mr-2 h-auto bg-background-400 inline-block mb-2 px-2 py-1 rounded-lg" v-for="i in 3" :key="i">
                    <div class="flex items-center">
                        <i class="fas fa-file-alt mr-3 text-2xl"></i>
                        <div>
                            <p class="text-lg font-bold">Tes {{i+7}}</p>
                            <p class="text-foreground-4-300 font-bold text-sm">Diselesaikan Pada 21 Januari 2022 20:20:24</p>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="logout" type="button" class="w-full text-left text-xl font-bold mb-3">
                <i class="mr-5 fa fa-sign-out-alt"></i>
                <span>Logout</span>
            </button>
        </div>

        <div class="w-full h-screen overflow-hidden">
            <p class="text-2xl font-bold text-white ml-5 my-6">{{judulHalaman}}</p>
            <div class="overflow-auto no-scrollbar h-screen w-full relative px-10">
                <Skippable v-if="this.section!=null" :sectionList="this.section"/>
            <!-- <Continous v-if="this.section!=null" :sectionList="this.section"/> -->
                <div class="w-1 h-28"></div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import Continous from '../components/views/continousTest.vue'
import Skippable from '../components/views/skippableTest.vue'
import { useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'

export default {
    components: {
        axios, Continous, Skippable
    },
    data() {
        return {
            judulHalaman: 'Dashboard',
            timestamp: '',
            tenggat: 'Jumat, 21 Januari 2022 23:59:59',
            timerWaktu: null,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
            day: ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],
            section: null,
            port: import.meta.env.VITE_BACKEND_URL
        }
    },
    created() {
        this.timerWaktu = setInterval(() => {
            this.getNow()
            // console.log(this.$store.state.access_token);
        }, 1000)
    },
    methods: {
        getNow() {
            const today = new Date()
            const date = this.day[today.getDay()] + ", " + ('00'+today.getDate()).slice(-2) + " " + this.month[today.getMonth()] + " " + today.getFullYear()
            const time = ('00'+today.getHours()).slice(-2) + ":" + ('00'+today.getMinutes()).slice(-2) + ":" + ('00'+today.getSeconds()).slice(-2)
            const dateTime = date + ' ' + time
            this.timestamp = dateTime
        },

        async logout() {
            await axios.post("/auth/logout", {}, { withCredentials: true });

            axios.defaults.headers.common['Authorization'] = '';
            this.$cookies.remove('refresh_token')

            await this.$router.push('/login');
        }
    },
    mounted(){
        // console.log(this.$cookies.get('refresh_token'));
        // this.$store.commit('refresh_access_token', this.$cookies.get('refresh_token'));

        axios
        .get(this.port+'/section/all/1')
        .then(({data}) => (
            this.section = data
            // console.log(this.section)
        ))
    },
}
</script>

<style>

</style>