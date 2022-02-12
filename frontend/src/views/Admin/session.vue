<template>
    <div class="absolute top-20 w-full flex justify-center" style="height: 30rem;">
        <div class="w-5/6 h-full">
            <div class="overflow-auto w-full h-full no-scrollbar mt-5">
                <table class="table-fixed border-collapse border border-primary-200 w-full">
                    <thead class="bg-primary-800">
                        <tr>
                            <th class="font-semibold w-2/12">E-Mail</th>
                            <th class="font-semibold w-1/12">Start</th>
                            <th class="font-semibold w-1/12">Finish</th>
                            <th class="font-semibold w-1/12">Duration</th>
                            <th class="font-semibold w-1/12">Token</th>
                            <th class="font-semibold w-1/12">Status</th>
                            <th class="font-semibold w-2/12">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center even:bg-sky-100 odd:bg-sky-200 text-primary-900" v-for="i in 9" :key="i">
                            <td>Widean@wmail.com</td>
                            <td>12/02/2022 08:00</td>
                            <td>12/02/2022 23:59</td>
                            <td>419 Minutes</td>
                            <td>{{getToken(7)}}</td>
                            <td class="py-5 text-white">
                                <span v-if="i%2==1" class="bg-primary-700 ring-2 ring-inset ring-primary-400 rounded-full h-auto w-auto text-base px-10 py-2 mr-1">Active</span>
                                <span v-else class="bg-primary-600 ring-2 ring-inset ring-primary-400 rounded-full h-auto w-auto text-base px-6 py-2 mr-1">Non-Active</span>
                            </td>
                            <td>
                                <button class="bg-primary-600 text-white ring-2 ring-inset ring-primary-200 hover:bg-primary-800 
                                                duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                    @click="this.$router.push({path: '/sessionDetail'})"> 
                                    <i class="fa fa-info-circle mr-2"></i>
                                    <span>Detail</span>
                                </button>
                                <button class="bg-primary-600 text-white ring-2 ring-inset ring-primary-200 hover:bg-primary-800 
                                                duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                    @click="this.$router.push({path: '/'})"> 
                                    <i class="fa fa-refresh mr-2"></i>
                                    <span>Update</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex justify-end">
                <button class="bg-primary-700 text-white ring-2 ring-inset hover:bg-sky-100 hover:text-primary-900 
                                duration-200 rounded-full px-10 py-2 mt-5 h-auto w-auto" 
                    @click="this.$router.push({path: '/addSoalImage'})">
                    <i class="fa fa-calendar-alt fa-lg mr-2"></i>   
                    <span>Add New Session</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.$emit('updateHeader', 'Exam Session')
    },
    methods: {
        getToken(length) {
            var token = '';
            var validChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            for (let i = 0; i < length; i++ ) {
                token += validChar.charAt(Math.floor(Math.random()*36));
            }
            return token;
        }
    },
    mounted(){
        $('.menu').removeClass('bg-primary-200')
        $('.menu').removeClass('text-primary-900')
        $('.menu').addClass('hover:bg-primary-800')
        $('#menu-session').removeClass('hover:bg-primary-800')
        $('#menu-session').addClass('bg-primary-200')
        $('#menu-session').addClass('text-primary-900')
    }
}
</script>

<style>

</style>