<template>
    <div>
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
                                <th class="font-semibold w-1/12">Action</th>
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
                                        @click="openModal"> 
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
                            id="btnCreateSession">
                        <i class="fa fa-calendar-alt fa-lg mr-2"></i>   
                        <span>Add New Session</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Transparent Overlay -->
        <div id="bg" class="fixed top-0 left-0 w-screen h-screen bg-primary-1000 bg-opacity-80 hidden"></div>

        <!-- Create New Session Modal -->
        <div id="modalSession" class="fixed left-1/4 bg-primary-1000 h-3/5 w-1/2 text-primary-1000 rounded-lg hidden" style=" top: 20%">
            <div class="bg-primary-300 h-12 rounded-t-lg px-5 py-2 flex items-center">
                <button id="closeNewSession" class="relative inline-block">
                    <i class="fa fa-times fa-lg"></i>
                </button>
                <p class="font-bold text-lg text-right inline-block relative" style="width: 96%">{{headerModal}}</p>
            </div>

            <div class="text-white p-5 h-5/6 relative">
                <label for="user_email">Email</label><br>
                <input type="text" name="email" id="user_email" placeholder="Registrant's Email"
                    class="rounded-lg py-2 px-3 w-full my-2 bg-primary-600 outline-none placeholder-gray-300"><br>
                <label>Session Token</label><br>
                <div class="flex mb-5">
                    <input type="text" name="token" id="user_token" placeholder="Session Token"
                        class="rounded-lg py-2 px-3 w-8/12 my-2 bg-primary-600 outline-none placeholder-gray-300" readonly><br>
                    <button id="genToken" class="ml-3 w-4/12 rounded-lg px-5 my-2 bg-sky-300 text-primary-1000 hover:bg-primary-700 
                                            hover:text-white ring-2 ring-inset ring-sky-300 hover:ring-primary-200 duration-300"
                                            @click="generateToken">Generate Token</button>
                </div>

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
                                                        hover:bg-primary-700 duration-300 ring-2 ring-inset ring-sky-300 hover:ring-primary-200">Create</button>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headerModal: "Create A New Session"
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
        },
        generateToken(){
            let token = this.getToken(5);
            $('#user_token').val(token)
        },
        openModal(){
            this.headerModal = "Update A Session";
            $('#modalSession').fadeIn("slow");
            $('#bg').fadeIn("slow");
        }

    },
    mounted(){
        $('.menu').removeClass('bg-primary-200')
        $('.menu').removeClass('text-primary-900')
        $('.menu').addClass('hover:bg-primary-800')
        $('#menu-session').removeClass('hover:bg-primary-800')
        $('#menu-session').addClass('bg-primary-200')
        $('#menu-session').addClass('text-primary-900')

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
    }
}
</script>

<style>

</style>