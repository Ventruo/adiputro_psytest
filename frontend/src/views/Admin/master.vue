<template>
    <div class="h-auto min-h-screen w-full text-white flex overflow-hidden">
        <div class="bg-foreground-4-200 rounded-r-3xl h-screen w-16 px-1 py-5 hover:w-1/6 hover:px-6 duration-300 flex flex-col group">
            <div class="my-2">
                <img src="../../assets/logo_only.png" alt="" class="w-8 m-auto mb-2">
                <img src="../../assets/text_only.png" alt="" class="w-24 m-auto opacity-0 transition group-hover:opacity-100">
            </div>
            <router-link to="/admin">
                <div class="relative">
                    <div class="hover:bg-background-200 hover:text-black font-bold rounded-xl cursor-pointer pl-3.5 pr-4 py-3 mb-2 flex items-center menu" id="menu-home">
                        <i class="w-1/12 mr-5 fa fa-house text-2xl"></i>
                        <span class="ml-0.5 opacity-0 transition group-hover:opacity-100">Home</span>
                    </div>
                </div>
            </router-link>
            
            <router-link to="/admin/registrant">
                <div class="relative">
                    <div class="hover:bg-background-200 hover:text-black font-bold rounded-xl cursor-pointer px-4 py-3 mb-2 flex items-center menu" id="menu-registrant">
                        <i class="w-1/12 mr-5 fa fa-user text-2xl"></i>
                        <span class="opacity-0 transition duration-300 group-hover:opacity-100">Registrant</span>
                    </div>
                </div>
            </router-link>

            <router-link to="/admin/test">
                <div class="relative">
                    <div class="hover:bg-background-200 hover:text-black font-bold rounded-xl cursor-pointer px-4 py-3 mb-2 flex items-center menu" id="menu-test">
                        <i class="w-1/12 mr-5 fa fa-tasks text-2xl"></i>
                        <span class="opacity-0 transition duration-300 group-hover:opacity-100">Test</span>
                    </div>
                </div>
            </router-link>
            
            <router-link to="/admin/session">
                <div class="relative">
                    <div class="hover:bg-background-200 hover:text-black font-bold rounded-xl cursor-pointer px-4 py-3 mb-2 flex items-center menu" id="menu-session">
                        <i class="w-1/12 mr-5 fas fa-calendar-alt text-2xl"></i>
                        <span class="opacity-0 transition duration-300 group-hover:opacity-100">Session</span>
                    </div>
                </div>
            </router-link>
            
            <router-link to="/admin/recruitment" class="grow">
                <div class="relative">
                    <div class="hover:bg-background-200 hover:text-black font-bold rounded-xl cursor-pointer px-4 py-3 mb-2 flex items-center menu" id="menu-recruitment">
                        <i class="w-1/12 mr-5 fas fa-users text-2xl relative right-1"></i>
                        <span class="opacity-0 transition duration-300 group-hover:opacity-100">Recruitment</span>
                    </div>
                </div>
            </router-link>

            <div @click="logout">
                <div class="relative">
                    <div class="hover:bg-background-200 hover:text-black font-bold rounded-xl cursor-pointer px-4 py-3 flex items-center">
                        <i class="w-1/12 mr-5 fas fa-sign-out-alt text-2xl"></i>
                        <span class="opacity-0 transition duration-300 group-hover:opacity-100">Logout</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 
            Test -> Section -> Question
            Registrant
            Exam_session -> Section_result   -> question_result -> sementara tidak perlu
                                                -> review essay
        -->

        <div class="relative w-full h-screen text-black">
            <p class="font-bold text-white text-3xl ml-5 mt-5 mb-6">Hi, Admin</p>
            <div class="overflow-auto no-scrollbar h-screen w-full relative">
                <div class="overflow-hidden absolute w-full h-72 -z-10">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="h-full w-full">
                        <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" class="fill-foreground-4-50"></path>
                    </svg>
                </div>
                <div class="w-full p-8 pr-10 flex justify-between">
                    <h1 class="text-4xl font-bold">{{header}}</h1>
                    <h1 class="text-2xl font-bold">{{timestamp||""}}</h1>
                </div>
                <router-view @updateHeader="updateHeader" class="relative"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            header: null,
            timerWaktu: null,
            timestamp: null,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
            day: ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],
        }
    },
    methods:{
        updateHeader(header){
            this.header = header
        },
        getNow() {
            const today = new Date()
            const date = this.day[today.getDay()] + ", " + ('00'+today.getDate()).slice(-2) + " " + this.month[today.getMonth()] + " " + today.getFullYear()
            const time = ('00'+today.getHours()).slice(-2) + ":" + ('00'+today.getMinutes()).slice(-2) + ":" + ('00'+today.getSeconds()).slice(-2)
            const dateTime = date + ' ' + time
            this.timestamp = dateTime
        },
        logout(){
            Swal.fire({
                title: 'Yakin Ingin Logout',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/'
                }
            });
        },
    },
    created() {
        this.$emit('updateJudul', 'Hi, Admin!')
        this.timerWaktu = setInterval(() => {
            this.getNow()
        }, 1000)
    },
    mounted(){
        $('#main-header').addClass('fixed')
        $('#main-header').addClass('w-full')
        $('#hidden-bottom').removeClass('hidden')
    }
}
</script>

<style>

</style>