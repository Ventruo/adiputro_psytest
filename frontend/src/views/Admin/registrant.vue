<template>
    <div class="absolute w-full flex justify-center h-full">
        <div class="w-5/6 h-full">
            <p class="font-bold text-xl">Cari Nama Registrant : </p>
            <input type="text" name="token" id="userToken" class="w-1/2 ml-0.5 mb-3 bg-background-100 ring-1 inset ring-stroke-100 
                        placeholder-stroke mt-1 px-3 py-1.5 rounded-md outline-none" placeholder="Cari registrant disini...">
            <div class="overflow-auto w-full h-auto max-h-[30rem] no-scrollbar mt-5 rounded-lg shadow-xl" v-if="this.registrantList!=null">
                <table class="table-fixed w-full font-semibold">
                    <thead class="bg-foreground-4-100 text-white">
                        <tr>
                            <th class="w-4/12 py-3">E-Mail</th>
                            <th class="w-4/12">Status</th>
                            <th class="w-4/12">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center odd:bg-foreground-4-50 even:bg-foreground-4-10" v-for="i in this.registrantList" :key="i">
                            <td>{{i.email}}</td>
                            <td class="py-5">
                                <span v-if="i.status==1"> 
                                    Available
                                </span>
                                
                                <span v-if="i.status==0"> 
                                    Deleted
                                </span>
                            </td>
                            <td class="text-white">
                                <button class="bg-safe hover:bg-green-800 duration-200 rounded-md h-auto w-1/3 px-5 py-1 mr-1" 
                                    @click="this.$router.push({path: '/admin/registrantDetail', query: {registrant: i.email}})"> 
                                    <i class="fa fa-info-circle mr-2"></i>
                                    <span>Info</span>
                                </button>
                                <button class="bg-secondary hover:bg-red-800 duration-200 rounded-md h-auto w-1/3 py-1" 
                                    @click="this.$router.push({path: '/'})"> 
                                    <i class="fa fa-trash-alt mr-2"></i>
                                    <span>Delete</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="flex items-center justify-center w-full mx-20">
                <div class="bg-foreground-3-500 w-full py-5 rounded-xl text-center text-black text-2xl font-bold overflow-y-auto no-scrollbar py-5 px-5">
                    Belum ada data tersedia.
                </div>
            </div>
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
    methods: {

    },
    created() {
        this.$emit('updateHeader', 'Registrant')
    },
    mounted(){
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