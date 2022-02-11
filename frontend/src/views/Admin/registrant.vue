<template>
    <div class="absolute top-32 w-full flex justify-center" style="height: 30rem;">
        <div class="overflow-auto w-5/6 h-full no-scrollbar mt-5">
            <table class="table-fixed border-collapse border border-primary-200 w-full">
                <thead class="bg-primary-800 divide-y divide-primary-200">
                    <tr>
                        <th class="font-semibold w-4/12">E-Mail</th>
                        <th class="font-semibold w-4/12">Status</th>
                        <th class="font-semibold w-4/12">Action</th>
                    </tr>
                </thead>
                <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                    <tr class="text-center" v-for="i in 9" :key="i">
                        <td>Widean@wmail.com</td>
                        <td class="py-5">
                            <span class="bg-green-600 ring-2 ring-inset ring-primary-400 rounded-full h-auto w-auto text-base px-10 py-2 mr-1" > 
                                Available
                            </span>
                        </td>
                        <td>
                            <button class="bg-green-800 ring-2 ring-inset ring-primary-200 hover:bg-primary-200 hover:text-primary-900 
                                            duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                @click="this.$router.push({path: '/'})"> 
                                <i class="fa fa-info-circle mr-2"></i>
                                <span>Details</span>
                            </button>
                            <button class="bg-red-600 ring-2 ring-inset ring-primary-200 hover:bg-primary-200 hover:text-primary-900 
                                            duration-200 rounded-full h-auto w-auto text-base px-5 py-2" 
                                @click="this.$router.push({path: '/'})"> 
                                <i class="fa fa-trash-alt mr-2"></i>
                                <span>Delete</span>
                            </button>
                        </td>
                    </tr>
                    <tr class="text-center">
                        <td>Widean@wmail.com</td>
                        <td class="py-5">
                            <span class="bg-red-600 ring-2 ring-inset ring-primary-400 rounded-full h-auto w-64 text-base px-12 py-2 mr-1" > 
                                Deleted
                            </span>
                        </td>
                        <td>
                            <button class="bg-green-800 ring-2 ring-inset ring-primary-200 hover:bg-primary-200 hover:text-primary-900 
                                            duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                @click="this.$router.push({path: '/'})"> 
                                <i class="fa fa-info-circle mr-2"></i>
                                <span>Details</span>
                            </button>
                            <button class="bg-red-600 ring-2 ring-inset ring-primary-200 hover:bg-primary-200 hover:text-primary-900 
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
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.$emit('updateHeader', 'Registrant')
    },
    methods: {

    },
}
</script>

<style>

</style>