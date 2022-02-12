<template>
    <div class="h-auto relative top-16 flex overflow-hidden">
        <div class="h-auto min-h-screen fixed pt-2 w-1/6 text-white z-50">
            <div class="bg-primary-700 h-screen w-12 hover:w-full duration-300 group">
                <router-link to="/admin">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer pl-3.5 pr-4 py-3 flex items-center menu" id="menu-home">
                            <i class="w-1/12 mr-5 fa fa-house"></i>
                            <span class="ml-0.5 opacity-0 transition duration-300 group-hover:opacity-100">Home</span>
                        </div>
                    </div>
                </router-link>
                
                <router-link to="/admin/registrant">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer px-4 py-3 flex items-center menu" id="menu-registrant">
                            <i class="w-1/12 mr-5 fa fa-user"></i>
                            <span class="opacity-0 transition duration-300 group-hover:opacity-100">Registrant</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/admin/test">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer px-4 py-3 flex items-center menu" id="menu-test">
                            <i class="w-1/12 mr-5 fa fa-tasks"></i>
                            <span class="opacity-0 transition duration-300 group-hover:opacity-100">Test</span>
                        </div>
                    </div>
                </router-link>
                
                <router-link to="/admin/session">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer px-4 py-3 flex items-center menu" id="menu-session">
                            <i class="w-1/12 mr-5 fas fa-calendar-alt"></i>
                            <span class="opacity-0 transition duration-300 group-hover:opacity-100">Session</span>
                        </div>
                    </div>
                </router-link>

                <div @click="logout">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer px-4 py-3 flex items-center">
                            <i class="w-1/12 mr-5 fas fa-sign-out-alt"></i>
                            <span class="opacity-0 transition duration-300 group-hover:opacity-100">Logout</span>
                        </div>
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

        <div class="relative w-full h-auto min-h-screen pl-5 pr-6 left-7 text-white">
            <div class="w-full absolute p-10 pr-20 text-white flex justify-between">
                <h1 class="text-4xl font-bold">{{header}}</h1>
                <h1 class="text-2xl font-bold">{{timestamp||""}}</h1>
            </div>
            <div class="overflow-hidden w-full h-72">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" class="h-full w-full">
                    <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" class="fill-primary-600"></path>
                </svg>
            </div>
            <router-view @updateHeader="updateHeader" />
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
            day: ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"],
        }
    },
    methods:{
        updateHeader(header){
            this.header = header
        },
        getNow() {
            const today = new Date()
            const date = this.day[today.getDay()-1] + ", " + ('00'+today.getDate()).slice(-2) + " " + this.month[today.getMonth()] + " " + today.getFullYear()
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