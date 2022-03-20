<template>
    <div class="absolute top-32 w-full flex justify-center" style="height: 30rem;">
        <div class="overflow-auto w-5/6 h-full no-scrollbar mt-5" v-if="this.registrantList!=null">
            <p class="font-bold">Cari Nama Registrant : </p>
            <input type="text" name="token" id="userToken" class="w-1/2 ml-2 mb-3 bg-background-300 ring-1 ring inset ring-stroke-100 
                        placeholder-stroke mt-1 px-3 py-1.5 rounded-lg outline-none" placeholder="Cari registrant disini...">

            <table class="table-fixed border border-collapse border-stroke-100 w-full font-semibold">
                <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                    <tr>
                        <th class="w-4/12 border border-stroke-100">E-Mail</th>
                        <th class="w-4/12 border border-stroke-100">Status</th>
                        <th class="w-4/12 border border-stroke-100">Action</th>
                    </tr>
                </thead>
                <tbody class="bg-background-400 divide-y divide-stroke-100">
                    <tr class="text-center" v-for="i in this.registrantList" :key="i">
                        <td class="border border-stroke-100">{{i.email}}</td>
                        <td class="py-5 border border-stroke-100">
                            <span v-if="i.status==1"> 
                                Available
                            </span>
                            
                            <span v-if="i.status==0"> 
                                Deleted
                            </span>
                        </td>
                        <td class="text-white border border-stroke-100">
                            <button class="bg-safe hover:bg-green-800 duration-200 rounded-full h-auto w-1/3 px-5 py-1 mr-1" 
                                @click="this.$router.push({path: '/admin/registrantDetail', query: {registrant: i.email}})"> 
                                <i class="fa fa-info-circle mr-2"></i>
                                <span>Info</span>
                            </button>
                            <button class="bg-secondary hover:bg-red-800 duration-200 rounded-full h-auto w-1/3 py-1" 
                                @click="this.$router.push({path: '/'})"> 
                                <i class="fa fa-trash-alt mr-2"></i>
                                <span>Delete</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="w-1 h-64 relative top-10"></div>
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
            registrantList: null,
            port: import.meta.env.VITE_BACKEND_URL
        }
    },
    created() {
        this.$emit('updateHeader', 'Registrant')
    },
    methods: {

    },
    mounted(){
        $('.menu').removeClass('bg-background-200')
        $('.menu').removeClass('text-black')
        $('#menu-registrant').addClass('bg-background-200')
        $('#menu-registrant').addClass('text-black')

        axios
        .get(this.port+'/registrant/all')
        .then(({data}) => (
            this.registrantList = data
        ))
        
    }
}
</script>

<style>

</style>