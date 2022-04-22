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
            <h1 class="text-xl font-bold mt-3">Persoalan Selesai: </h1>
            <div class="grow w-auto h-1 my-2 overflow-x-hidden overflow-y-auto no-scrollbar text-foreground-4-800">
                <div class="w-full mr-2 h-auto bg-background-400 inline-block mb-2 px-2 py-1 rounded-lg" v-for="i in hasil" :key="i">
                    <div class="flex items-center">
                        <i class="fas fa-file-alt mr-3 text-2xl"></i>
                        <div>
                            <p class="text-lg font-bold">Persoalan {{i.section_number}}</p>
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
                <Section v-if="this.sectionList!=null && this.now!=-99" :sectionList="this.sectionList" :now="this.now"/>
                <div class="w-1 h-28"></div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import Section from '../components/views/Sections.vue'

export default {
    components: {
        axios, Section
    },
    data() {
        return {
            judulHalaman: 'Dashboard',
            timestamp: '',
            tenggat: '',
            timerWaktu: null,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
            day: ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],
            sectionList: null,
            port: import.meta.env.VITE_BACKEND_URL,
            hasil: null,
            now: -99,
            id_tes: null
        }
    },
    created() {
        let adaTest = -1
        adaTest = this.$cookies.get('current_test')
        if(!adaTest)
            this.$router.push({path: '/dashboard'})

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
        async cekSelesai(result){
            if(this.id_tes==21){
                this.sectionList.pop()
            }
            if(result!=null){
                result.sort((a, b) => {
                    let da = a.section_id,
                        db = b.section_id;
                    return db - da;
                });
                this.now = result[0].section_id

                this.hasil = []
                for (let i = 0; i < this.sectionList.length ; i++) {
                    for (let j = 0; j < result.length; j++) {
                        if(this.sectionList[i].id==result[j].section_id){
                            let temp = this.sectionList[i]
                            this.hasil.push({
                                "section_number": temp.section_number,
                                "createdAt": result[j].finish_date,
                                "question_num": temp.question_num,
                                "section_type": temp.section_type,
                                "option_num": temp.option_num,
                            })
                        }
                    }
                }
                this.hasil.sort((a, b) => {
                    let da = new Date(a.createdAt),
                        db = new Date(b.createdAt);
                    return db - da;
                });
            }else{
                this.now = this.sectionList[0].id-1
            }
            if(this.now==this.sectionList[this.sectionList.length-1].id){
                //update test result
                let dataReg = this.$cookies.get('data_registrant')
                let res = -1
                dataReg.test.forEach(t => {
                    if(t[0]==this.id_tes){
                        res = t[1]
                    }
                });
                let data_result = null

                axios
                .get(this.port+`/test_result/${res}`)
                .then(({data}) => (
                    data_result = data,
                    axios.post(this.port+'/test_result/update',{
                        "updating_id": data_result.id,
                        "test_id": this.id_tes,
                        "exam_session": dataReg.exam_session,
                        "start_date": data_result.start_date,
                        "finish_date": Date.now(),
                        "status": 1,
                        "result": data_result.result
                    })
                    .then((response) => {
                        this.$cookies.remove('current_test')
                        window.location = '/dashboard'
                    }).catch( error => { 
                        console.log('error: ' + error) 
                    })
                )).catch( error => { 
                    console.log('error: ' + error) 
                })

                // console.log(data_result.id)
                // console.log(this.id_tes)
                // console.log(dataReg.exam_session)
                // console.log(data_result.start_date)
                // console.log(Date.now())
                // console.log("1")
                // console.log(data_result.result)
                
            }
            // console.log(this.hasil)
            // console.log(this.sectionList)
        }
    },
    mounted(){
        // console.log(this.$cookies.get('refresh_token'));
        // this.$store.commit('refresh_access_token', this.$cookies.get('refresh_token'));

        let email = this.$cookies.get('data_registrant').email
        axios
        .get(this.port+`/exam_session/getbyemail/${email}`)
        .then(({data}) => {
            this.tenggat = this.toDate(data.finish_date)
        })

        this.id_tes = this.$cookies.get('current_test')
        if(this.id_tes) this.id_tes = this.id_tes.id
        axios
        .get(this.port+`/section/all/${this.id_tes}`)
        .then(({data}) => (
            this.sectionList = data,
            // console.log(this.sectionList),
            axios
            .get(this.port+`/section_result/getbytest/${this.id_tes}?email=${this.$cookies.get('data_registrant').email}`)
            .then(({data}) => (
                this.cekSelesai(data)
            ))
        ))
    },
}
</script>

<style>

</style>