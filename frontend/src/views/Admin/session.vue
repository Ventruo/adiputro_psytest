<template>
    <div>
        <div class="absolute top-20 w-full flex justify-center" style="height: 30rem;">
            <div class="w-5/6 h-full">
                <div class="flex justify-end">
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200
                                    duration-200 rounded-md px-10 py-2 mt-5 h-auto w-auto shadow-xl"
                            id="btnCreateSession" @click="openModalCreate">
                        <i class="fa fa-calendar-alt fa-lg mr-2"></i>   
                        <span>Buat Session Baru</span>
                    </button>
                </div>

                <div class="overflow-auto w-full h-auto max-h-[30rem] no-scrollbar mt-5 rounded-lg shadow-xl">
                    <table class="table-fixed w-full font-semibold">
                        <thead class="bg-foreground-4-100 text-white sticky top-0">
                            <tr>
                                <th class="w-2/12 py-3">E-Mail</th>
                                <th class="w-1/12">Start</th>
                                <th class="w-1/12">Finish</th>
                                <th class="w-1/12">Duration</th>
                                <th class="w-2/12">Token</th>
                                <th class="w-1/12">Status</th>
                                <th class="w-1/12">Action</th>
                            </tr>
                        </thead>
                        <tbody v-if="this.exam_session!=null && this.exam_session.length>0">
                            <tr class="text-center odd:bg-foreground-4-50 even:bg-foreground-4-10" v-for="i in this.exam_session" :key="i">
                                <td>{{i.email}}</td>
                                <td>{{toDate(i.start_date)}}</td>
                                <td>{{toDate(i.finish_date)}}</td>
                                <td>{{i.duration}} Minutes</td>
                                <td>{{i.test_token}}</td>
                                <td class="py-5">
                                    <span v-if="i.status%2==1">Active</span>
                                    <span v-else>Non-Active</span>
                                </td>
                                <td>
                                    <button class="bg-foreground-4-100 hover:bg-foreground-4-200 duration-200 rounded-md text-white
                                                    h-auto w-auto px-5 py-1 mr-1" 
                                        @click="openModal"> 
                                        <i class="fa fa-refresh mr-2"></i>
                                        <span>Update</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center bg-foreground-4-50 text-xl">
                                <td colspan="7" class="py-5">Belum ada data tersedia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="w-1 h-64 relative top-10"></div>
            </div>
        </div>

        <!-- Transparent Overlay -->
        <div id="bg" class="fixed top-0 left-0 w-screen h-screen bg-primary-1000 bg-opacity-60 hidden" @click="closeModal"></div>

        <!-- Create New Session Modal -->
        <div id="modalSession" class="fixed left-1/4 bg-foreground-4-200 h-3/5 w-1/2 text-primary-1000 rounded-lg hidden" style="top: 20%">
            <div class="bg-primary-300 h-12 rounded-t-lg px-5 py-2 flex items-center">
                <p class="font-bold text-lg inline-block relative" style="width: 96%">{{headerModal}}</p>
                <button id="closeNewSession" class="relative inline-block" @click="closeModal">
                    <i class="fa fa-times fa-lg"></i>
                </button>
            </div>

            <div class="text-white p-5 h-5/6 relative">
                <div class="flex">
                    <p class="w-2/12">Emails :</p>
                    <div class="grow h-auto">
                        <div class="bg-primary-600 py-1 px-3 rounded-full inline-block ml-2 mb-2" v-for="i in emails" :key="i">
                            <span>{{i}}</span>
                            <i class="fa fa-x text-sm ml-3 cursor-pointer" @click="hapusEmail(`${i}`)"></i>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-3 py-4">
                    <input name="email" id="user_email" placeholder="Registrant's Email" v-model="isiEmail"
                        class="rounded-lg py-2 px-3 w-full bg-primary-600 outline-none placeholder-gray-300"><br>
                    <button class="rounded-lg px-3 h-10 bg-sky-300 text-primary-1000 hover:bg-primary-600 hover:text-sky-200 duration-300"
                                    @click.prevent="tambahEmail">Tambahkan</button>
                </div>

                <label>Test Date</label><br>
                <div class="flex gap-2">
                    <div class="w-1/2">
                        <label for="start">From :</label>
                        <input type="datetime-local" name="start_date" id="start" v-model="start"
                                class="ml-2 rounded-lg py-2 px-3 w-10/12 my-2 bg-primary-600 outline-none placeholder-gray-300">
                    </div>
                    <div class="w-1/2">
                        <label for="finish">To: </label>
                        <input type="datetime-local" name="finish_date" id="finish" v-model="finish"
                                class="ml-2 rounded-lg py-2 px-3 w-10/12 my-2 bg-primary-600 outline-none placeholder-gray-300"><br>
                    </div>
                </div>

                <button id="submit_new_session" class="absolute bottom-0 right-0 mr-5 rounded-lg px-10 py-2 bg-sky-300 text-primary-1000 hover:text-white 
                                                        hover:bg-primary-700 duration-300 ring-2 ring-inset ring-sky-300 hover:ring-primary-200"
                                                @click.prevent="createSession">Create</button>

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
    data() {
        return {
            headerModal: "Buat Session Baru",
            exam_session: null,
            port: import.meta.env.VITE_BACKEND_URL,
            emails: [],
            start: null,
            finish: null,
            isiEmail: ""
        }
    },
    created() {
        this.$emit('updateHeader', 'Exam Session')
    },
    methods: {
        toDate(timeString){
            const waktu = new Date(timeString)
            const date = ('00'+waktu.getDate()).slice(-2) + "/" + ('00'+(waktu.getMonth()+1)).slice(-2) + "/" + waktu.getFullYear()
            const time = ('00'+waktu.getHours()).slice(-2) + ":" + ('00'+waktu.getMinutes()).slice(-2)
            const dateTime = date + ' ' + time
            return dateTime
        },
        // getToken(length) {
        //     var token = '';
        //     var validChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        //     for (let i = 0; i < length; i++ ) {
        //         token += validChar.charAt(Math.floor(Math.random()*36));
        //     }
        //     return token;
        // },
        openModal(){
            this.headerModal = "Update Session";
            $('#modalSession').fadeIn("slow");
            $('#bg').fadeIn("slow");
        },
        tambahEmail(){
            if(this.isiEmail!='' && !this.emails.includes(this.isiEmail) && this.emailFormatCheck(this.isiEmail)){
                this.emails.push(this.isiEmail)
                this.isiEmail = ""
            }
        },
        hapusEmail(email){
            var idx = this.emails.indexOf(email);
            if (idx !== -1) {
                this.emails.splice(idx, 1);
            }
        },
        emailFormatCheck(email){
            let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            let result = email.match(pattern)
            if(result==null)
                return false
            else
                return true
        },
        createSession(){
            if(this.emails.length==0||this.start==null||this.finish==null)
                Swal.fire({
                    title: 'Mohon Isi Semua Field!',
                    icon: 'warning',
                    confirmButtonText: 'Kembali'
                });
            else if(start>finish)
                Swal.fire({
                    title: 'Waktu Awal Melebihi Waktu Akhir!',
                    icon: 'warning',
                    confirmButtonText: 'Kembali'
                });
            else{
                var dateStart = new Date(this.start);
                var dateFinish = new Date(this.finish);
                var duration = (dateFinish.getTime()-dateStart.getTime())/(1000*60)

                axios.post(this.port+'/exam_session/create',{
                    "email": this.emails,
                    "start_date": dateStart,
                    "finish_date": dateFinish,
                    "duration": duration,
                    "tests": [5]
                })
                .then((response) => {
                    if (response.status==200){
                        Swal.fire(
                            'Created!',
                            'Sesi Baru Berhasil Dibuat!',
                            'success'
                        )
                        .then(function(){
                            $('#modalSession').fadeOut("fast")
                            $('#bg').fadeOut("slow")
                            this.emails = []
                            this.start = null
                            this.finish = null
                            // window.location = '/'
                        })
                    }else{
                        throw response
                    }
                }).catch( error => {
                    $('#spinner-modal').fadeOut("slow");
                    Swal.fire(
                        'Warning!',
                        error.response.data,
                        'warning'
                    )
                });
            }
        },
        openModalCreate(){
            this.headerModal = "Buat Session Baru";
            $('#modalSession').fadeIn("slow");
            $('#bg').fadeIn("slow");
        },
        closeModal(){
            $('#modalSession').fadeOut("fast");
            $('#bg').fadeOut("slow");
        }

    },
    mounted(){
        axios
        .get(this.port+'/exam_session/all')
        .then(({data}) => (
            this.exam_session = data
        ))
        
    }
}
</script>

<style>

</style>