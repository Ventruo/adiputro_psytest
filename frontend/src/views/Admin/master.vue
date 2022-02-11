<template>
    <div class="h-auto relative top-16 flex overflow-hidden">
        <div class="h-auto min-h-screen fixed pt-2 w-1/6 text-white z-50">
            <div class="bg-primary-700 h-screen w-12 hover:w-full duration-300 group">
                <router-link to="/admin" id="menu-home">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer pl-3.5 pr-4 py-3 flex items-center">
                            <i class="w-1/12 mr-5 fa fa-house"></i>
                            <span class="ml-0.5 opacity-0 transition duration-300 group-hover:opacity-100">Home</span>
                        </div>
                    </div>
                </router-link>
                
                <router-link to="/admin/registrant" id="menu-registrant">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer px-4 py-3 flex items-center">
                            <i class="w-1/12 mr-5 fa fa-user"></i>
                            <span class="opacity-0 transition duration-300 group-hover:opacity-100">Registrant</span>
                        </div>
                    </div>
                </router-link>

                <router-link to="/admin" id="menu-test">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer px-4 py-3 flex items-center">
                            <i class="w-1/12 mr-5 fa fa-tasks"></i>
                            <span class="opacity-0 transition duration-300 group-hover:opacity-100">Test</span>
                        </div>
                    </div>
                </router-link>
                
                <router-link to="/admin" id="menu-session">
                    <div class="relative">
                        <div class="hover:bg-primary-800 cursor-pointer px-4 py-3 flex items-center">
                            <i class="w-1/12 mr-5 fas fa-calendar-alt"></i>
                            <span class="opacity-0 transition duration-300 group-hover:opacity-100">Session</span>
                        </div>
                    </div>
                </router-link>
                
                <!-- 
                    Test -> Section    -> Question
                                        -> Section_result   -> question_result 
                                                            -> review essay 
                    Registrant
                    Exam_session
                -->
            </div>
        </div>

        <div class="relative w-full h-auto min-h-screen pl-5 pr-6 left-7 text-white">
            <div class="bg-primary-600 w-full h-64 relative p-10 text-white flex justify-between">
                <h1 class="text-3xl font-bold">{{header}}</h1>
                <h1 class="text-3xl font-bold">{{timestamp||""}}</h1>
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