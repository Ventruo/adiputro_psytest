<template>
    <div class="relative bottom-28 w-full flex justify-center h-auto">
        <div class="w-5/6 h-full">
            <div class="flex">
                <label class="text-xl font-bold w-32">Test Name : </label>
                <select name="" id="" class="text-black text-lg rounded-xl py-1 px-2 w-10/12 outline-none shadow-xl appearance-none" >
                    <option value="" v-for="i in testList" :key="i">{{i}}</option>
                </select>
            </div>

            <h1 class="font-bold text-primary-900 text-4xl mt-5">Section</h1>
            <div class="overflow-auto w-full h-96 no-scrollbar mt-2">
                <table class="table-fixed border-collapse border border-primary-200 w-full">
                    <thead class="bg-primary-800">
                        <tr>
                            <th class="font-semibold w-1/12">Section Number</th>
                            <th class="font-semibold w-2/12">Instruction</th>
                            <th class="font-semibold w-1/12">Duration</th>
                            <th class="font-semibold w-1/12">Type</th>
                            <th class="font-semibold w-1/12">Option Number</th>
                            <th class="font-semibold w-2/12">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center even:bg-sky-100 odd:bg-sky-200 text-primary-900" v-for="i in 10" :key="i">
                            <td>{{i}}</td>
                            <td class="text-justify overflow-hidden overflow-ellipsis instruksi py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere cupiditate illo quae exercitationem excepturi quo esse rem consectetur nostrum? Et qui odit deleniti enim libero molestiae ullam voluptatem velit.</td>
                            <td>7 Minutes</td>
                            <td>
                                <span v-if="i%2==1">Essay</span>
                                <span v-else>Pilihan Ganda</span>
                            </td>
                            <td>
                                <span v-if="i%2==1">-</span>
                                <span v-else>{{Math.floor(Math.random()*4+2)}}</span>
                            </td>
                            <td>
                                <button class="bg-primary-600 text-white ring-2 ring-inset ring-primary-200 hover:bg-primary-800 
                                                duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                    @click.prevent="questionId=i"> 
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
                                duration-200 rounded-full px-10 py-2 mt-2 h-auto w-auto" 
                    @click="this.$router.push({path: '/addSoalImage'})">
                    <i class="fa fa-feather fa-lg mr-2"></i>   
                    <span>Add New Section</span>
                </button>
            </div>

            <div v-show="questionId!=0">
                <h1 class="font-bold text-primary-900 text-4xl mt-5">Question</h1>
                <div class="overflow-auto w-full h-full no-scrollbar mt-3">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800">
                            <tr>
                                <th class="font-semibold w-1/12">Question No.</th>
                                <th class="font-semibold w-2/12">Question</th>
                                <th class="font-semibold w-2/12">Option Choices</th>
                                <th class="font-semibold w-1/12">Answer Key</th>
                                <th class="font-semibold w-1/12">Question Type</th>
                                <th class="font-semibold w-1/12">Option Type</th>
                                <th class="font-semibold w-2/12">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center even:bg-sky-100 odd:bg-sky-200 text-primary-900" v-for="i in 10" :key="i">
                                <td>{{i}}</td>
                                <td class="text-justify overflow-hidden overflow-ellipsis instruksi py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere cupiditate illo quae exercitationem excepturi quo esse rem consectetur nostrum? Et qui odit deleniti enim libero molestiae ullam voluptatem velit.</td>
                                <td>A. Meja, B. Kursi, C. Lemari, D. Laci, E. Bantal</td>
                                <td>A</td>
                                <td>
                                    <span v-if="i%2==1">Text</span>
                                    <span v-else>Image</span>
                                </td>
                                <td>
                                    <span v-if="i%3==1">Multiple Choice</span>
                                    <span v-else-if="i%3==2">Image</span>
                                    <span v-else>Essay</span>
                                </td>
                                <td>
                                    <button class="bg-primary-600 text-white ring-2 ring-inset ring-primary-200 hover:bg-primary-800 
                                                    duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                        @click="this.$router.push({path: '/'})"> 
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
                                    duration-200 rounded-full px-10 py-2 mt-2 h-auto w-auto" 
                        @click="this.$router.push({path: '/addSoalImage'})">
                        <i class="fa fa-feather fa-lg mr-2"></i>   
                        <span>Add New Question</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testList: [
                'Tes Tintum',
                'Tes EPPS',
                'Tes 3',
                'Tes 4',
                'Tes 5',
            ],
            questionId: 0,
        }
    },
    created() {
        this.$emit('updateHeader', 'Test')
    },
    methods: {
        
    },
    mounted(){
        $('.menu').removeClass('bg-primary-200')
        $('.menu').removeClass('text-primary-900')
        $('.menu').addClass('hover:bg-primary-800')
        $('#menu-test').removeClass('hover:bg-primary-800')
        $('#menu-test').addClass('bg-primary-200')
        $('#menu-test').addClass('text-primary-900')
    }
}
</script>

<style>
    .instruksi{
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>