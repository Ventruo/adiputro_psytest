<template>
    <div class="w-full h-full flex text-white">
        <div class="w-3/12 min-h-screen flex flex-col bg-foreground-4-200 pt-4 pb-5 px-5 rounded-r-3xl">
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
            <div class="grow w-auto h-1 my-2 overflow-x-hidden overflow-y-auto no-scrollbar text-foreground-4-800">
                <div class="w-full mr-2 h-auto bg-background-400 inline-block mb-2 px-2 py-1 rounded-lg" v-for="i in hasil" :key="i">
                    <div class="flex items-center">
                        <i class="fas fa-file-alt mr-3 text-2xl"></i>
                        <div>
                            <p class="text-lg font-bold">Tes {{i.section_number}}</p>
                            <p class="text-foreground-4-300 font-bold text-sm">Diselesaikan Pada {{toDate(i.createdAt)}}</p>
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
            port: import.meta.env.VITE_BACKEND_URL,
            hasil: null,
        }
    },
    created() {
        this.timerWaktu = setInterval(() => {
            this.getNow()
            // console.log(this.$store.state.access_token);
        }, 1000)
    },
    methods: {
        toDate(timeString){
            const waktu = new Date(timeString)
            const date = this.day[waktu.getDay()] + ", " + ('00'+waktu.getDate()).slice(-2) + " " + this.month[waktu.getMonth()] + " " + waktu.getFullYear()
            const time = ('00'+waktu.getHours()).slice(-2) + ":" + ('00'+waktu.getMinutes()).slice(-2) + ":" + ('00'+waktu.getSeconds()).slice(-2)
            const dateTime = date + ' ' + time
            return dateTime
        },
        getNow() {
            const today = new Date()
            this.timestamp = this.toDate(today)
        },

        logout() {
            Swal.fire({
                title: 'Yakin Ingin Logout?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.post("/auth/logout", {}, { withCredentials: true });

                    axios.defaults.headers.common['Authorization'] = '';
                    this.$cookies.remove('refresh_token')
                    this.$cookies.remove('data_registrant')

                    window.location="/"
                }
            });
        },
        cekSelesai(hasil){
            if(hasil!=null){
                this.hasil = []
                for (let i = this.section.length-1; i >= 0 ; i--) {
                    for (let j = 0; j < hasil.length; j++) {
                        if(this.section[i].id==hasil[j].section_id){
                            let temp = this.section.splice(i,1)
                            this.hasil.push({
                                "section_number": temp[0].section_number,
                                "createdAt": temp[0].createdAt,
                                "question_num": temp[0].question_num,
                                "section_type": temp[0].section_type,
                                "option_num": temp[0].option_num,
                            })
                        }
                    }
                }
                this.hasil.sort((a, b) => {
                    let da = new Date(a.createdAt),
                        db = new Date(b.createdAt);
                    return db - da;
                });
            }

        }
    },
    mounted(){
        // console.log(this.$cookies.get('refresh_token'));
        // this.$store.commit('refresh_access_token', this.$cookies.get('refresh_token'));

        let tes = this.$cookies.get('data_registrant').test
        // console.log(this.$cookies.get('data_registrant'))
        
        let ada = false
        tes.forEach(t => {
            if (t[0]==1)
                ada = true
        });
        if(ada){
            axios
            .get(this.port+'/section/all/1')
            .then(({data}) => (
                this.$cookies.set('current_test', '1'),
                this.section = data,
                axios
                .get(this.port+'/section_result/getbytest/1?email='+this.$cookies.get('data_registrant').email)
                .then(({data}) => (
                    this.cekSelesai(data)
                ))
            ))
        }
    },
}
</script>

<style>

</style>