<template>
    <div class="absolute top-32 w-full flex justify-center" style="height: 30rem;">
        <div class="overflow-auto w-5/6 h-full no-scrollbar mt-5" v-if="this.registrantList!=null">
            <table class="table-fixed border-collapse border border-primary-200 w-full">
                <thead class="bg-primary-800">
                    <tr>
                        <th class="font-semibold w-4/12">E-Mail</th>
                        <th class="font-semibold w-4/12">Status</th>
                        <th class="font-semibold w-4/12">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center even:bg-sky-100 odd:bg-sky-200" v-for="i in this.registrantList" :key="i">
                        <td class="text-primary-900">{{i.email}}</td>
                        <td class="py-5">
                            <span v-if="i.status==1" class="bg-primary-700 ring-2 ring-inset ring-primary-400 rounded-full h-auto w-auto text-base px-10 py-2 mr-1" > 
                                Available
                            </span>
                            
                            <span v-if="i.status==0" class="bg-primary-600 ring-2 ring-inset ring-primary-400 rounded-full h-auto w-64 text-base px-12 py-2 mr-1" > 
                                Deleted
                            </span>
                        </td>
                        <td>
                            <button class="bg-primary-600 text-white ring-2 ring-inset ring-primary-200 hover:bg-primary-800 
                                            duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                @click="this.$router.push({path: '/admin/registrantDetail'})"> 
                                <i class="fa fa-info-circle mr-2"></i>
                                <span>Detail</span>
                            </button>
                            <button class="bg-primary-600 ring-2 ring-inset ring-primary-200 hover:bg-primary-800
                                            duration-200 rounded-full h-auto w-auto text-base px-5 py-2" 
                                @click="this.$router.push({path: '/'})"> 
                                <i class="fa fa-trash-alt mr-2"></i>
                                <span>Delete</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
            registrantList: null
        }
    },
    created() {
        this.$emit('updateHeader', 'Registrant')
    },
    methods: {

    },
    mounted(){
        $('.menu').removeClass('bg-primary-200')
        $('.menu').removeClass('text-primary-900')
        $('.menu').addClass('hover:bg-primary-800')
        $('#menu-registrant').removeClass('hover:bg-primary-800')
        $('#menu-registrant').addClass('bg-primary-200')
        $('#menu-registrant').addClass('text-primary-900')

        axios
        .get('http://127.0.0.1:8888/api/registrant/all')
        .then(({data}) => (
            this.registrantList = data
        ))
        
    }
}
</script>

<style>

</style>