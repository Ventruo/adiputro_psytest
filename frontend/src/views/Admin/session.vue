<template>
    <div>
        <div class="absolute top-20 w-full flex justify-center" style="height: 30rem;">
            <div class="w-5/6 h-full">
                <div class="overflow-auto w-full h-full no-scrollbar mt-5" v-if="this.exam_session!=null">
                    <table class="table-fixed border border-collapse border-stroke-100 w-full font-semibold">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="w-2/12 border border-stroke-100">E-Mail</th>
                                <th class="w-1/12 border border-stroke-100">Start</th>
                                <th class="w-1/12 border border-stroke-100">Finish</th>
                                <th class="w-1/12 border border-stroke-100">Duration</th>
                                <th class="w-2/12 border border-stroke-100">Token</th>
                                <th class="w-1/12 border border-stroke-100">Status</th>
                                <th class="w-1/12 border border-stroke-100">Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100">
                            <tr class="text-center" v-for="i in this.exam_session" :key="i">
                                <td class="border border-stroke-100">{{i.email}}</td>
                                <td class="border border-stroke-100">{{toDate(i.start_date)}}</td>
                                <td class="border border-stroke-100">{{toDate(i.finish_date)}}</td>
                                <td class="border border-stroke-100">{{i.duration}} Minutes</td>
                                <td class="border border-stroke-100">{{i.test_token}}</td>
                                <td class="py-5 border border-stroke-100">
                                    <span v-if="i%2==1">Active</span>
                                    <span v-else>Non-Active</span>
                                </td>
                                <td class="border border-stroke-100">
                                    <button class="bg-safe hover:bg-green-800 duration-200 rounded-full text-white
                                                    duration-200 rounded-full h-auto w-auto text-base px-5 py-1 mr-1" 
                                        @click="openModal"> 
                                        <i class="fa fa-refresh mr-2"></i>
                                        <span>Update</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else class="flex items-center justify-center w-full h-full">
                    <div class="bg-foreground-3-500 w-full py-5 rounded-xl text-center text-black text-2xl font-bold overflow-y-auto no-scrollbar py-5 px-5">
                        Belum ada data tersedia.
                    </div>
                </div>
                <div class="flex justify-end">
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200
                                    duration-200 rounded-full px-10 py-2 mt-5 h-auto w-auto"
                            id="btnCreateSession">
                        <i class="fa fa-calendar-alt fa-lg mr-2"></i>   
                        <span>Add New Session</span>
                    </button>
                </div>
                <div class="w-1 h-64 relative top-10"></div>
            </div>
        </div>

        <!-- Transparent Overlay -->
        <div id="bg" class="fixed top-0 left-0 w-screen h-screen bg-primary-1000 bg-opacity-80 hidden"></div>

        <!-- Create New Session Modal -->
        <div id="modalSession" class="fixed left-1/4 bg-primary-1000 h-3/5 w-1/2 text-primary-1000 rounded-lg hidden" style="top: 20%">
            <div class="bg-primary-300 h-12 rounded-t-lg px-5 py-2 flex items-center">
                <button id="closeNewSession" class="relative inline-block">
                    <i class="fa fa-times fa-lg"></i>
                </button>
                <p class="font-bold text-lg text-right inline-block relative" style="width: 96%">{{headerModal}}</p>
            </div>

            <div class="text-white p-5 h-5/6 relative">
                <label for="user_email">Email</label><br>
                <input type="text" name="email" id="user_email" placeholder="Registrant's Email"
                    class="rounded-lg py-2 px-3 w-full my-2 bg-primary-600 outline-none placeholder-gray-300 mb-5"><br>
                <!-- <label>Session Token</label><br>
                <div class="flex mb-5">
                    <input type="text" name="token" id="user_token" placeholder="Session Token"
                        class="rounded-lg py-2 px-3 w-8/12 my-2 bg-primary-600 outline-none placeholder-gray-300" readonly><br>
                    <button id="genToken" class="ml-3 w-4/12 rounded-lg px-5 my-2 bg-sky-300 text-primary-1000 hover:bg-primary-700 
                                            hover:text-white ring-2 ring-inset ring-sky-300 hover:ring-primary-200 duration-300"
                                            @click="generateToken">Generate Token</button>
                </div> -->

                <label>Test Date</label><br>
                <div class="flex gap-2">
                    <div class="w-1/2">
                        <label for="start">From :</label>
                        <input type="datetime-local" name="start_date" id="start"
                                class="ml-2 rounded-lg py-2 px-3 w-10/12 my-2 bg-primary-600 outline-none placeholder-gray-300">
                    </div>
                    <div class="w-1/2">
                        <label for="finish">To: </label>
                        <input type="datetime-local" name="finish_date" id="finish"
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
            headerModal: "Create A New Session",
            exam_session: null,
            port: import.meta.env.VITE_BACKEND_URL
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
        getToken(length) {
            var token = '';
            var validChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            for (let i = 0; i < length; i++ ) {
                token += validChar.charAt(Math.floor(Math.random()*36));
            }
            return token;
        },
        generateToken(){
            let token = this.getToken(5);
            $('#user_token').val(token)
        },
        openModal(){
            this.headerModal = "Update A Session";
            $('#modalSession').fadeIn("slow");
            $('#bg').fadeIn("slow");
        },
        createSession(){
            let email = $('#user_email').val()
            let start = $('#start').val()
            let finish = $('#finish').val()

            if(email==""||start==""||finish=="")
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
                var dateStart = new Date(start);
                var dateFinish = new Date(finish);
                var duration = (dateFinish.getTime()-dateStart.getTime())/(1000*60)

                axios.post(this.port+'/exam_session/create',{
                    "email": email,
                    "start_date": dateStart,
                    "finish_date": dateFinish,
                    "duration": duration
                })
                .then((response) => {
                    Swal.fire(
                        'Created!',
                        'Sesi Baru Berhasil Dibuat!',
                        'success'
                    )
                    .then(function(){
                        $('#modalSession').fadeOut("fast");
                        $('#bg').fadeOut("slow");
                    })
                }).catch( error => { 
                    console.log('error: ' + error) 
                });
            }
        }

    },
    mounted(){
        $('.menu').removeClass('bg-background-200')
        $('.menu').removeClass('text-black')
        $('#menu-session').addClass('bg-background-200')
        $('#menu-session').addClass('text-black')

        let this2 = this;
        $('#btnCreateSession').click(function(){
            this2.headerModal = "Create A New Session";
            $('#modalSession').fadeIn("slow");
            $('#bg').fadeIn("slow");
        });
        $('#closeNewSession').click(function(){
            $('#modalSession').fadeOut("fast");
            $('#bg').fadeOut("slow");
        });

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