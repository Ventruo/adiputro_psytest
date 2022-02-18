<template>
    <div class="relative bottom-28 w-full flex justify-center h-auto">
        <div class="w-5/6 h-full">
            <div class="flex">
                <label class="text-xl font-bold w-32">Test Name : </label>
                <select name="" id="testCombobox" class="text-black text-lg rounded-xl py-1 px-2 w-10/12 outline-none shadow-xl appearance-none"
                    @change="gantiTes($event)">
                    <option v-for="i in test" :key="i" v-bind:value="i.id">{{i.name}}</option>
                </select>
            </div>

            <h1 class="font-bold text-primary-900 text-4xl mt-5">Section</h1>
            <div class="overflow-auto w-full h-96 no-scrollbar mt-2" v-if="this.sectionList!=null">
                <table class="table-fixed border-collapse border border-primary-200 w-full">
                    <thead class="bg-primary-800">
                        <tr>
                            <th class="font-semibold w-1/12">Section Number</th>
                            <th class="font-semibold w-2/12">Instruction</th>
                            <th class="font-semibold w-1/12">Duration</th>
                            <th class="font-semibold w-1/12">Question Type</th>
                            <th class="font-semibold w-1/12">Option Type</th>
                            <th class="font-semibold w-1/12">Option Number</th>
                            <th class="font-semibold w-2/12">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center even:bg-sky-100 odd:bg-sky-200 text-primary-900" v-for="i in this.sectionList" :key="i">
                            <td>{{i.section_number}}</td>
                            <td class="text-justify overflow-hidden overflow-ellipsis instruksi py-1">{{i.instruction}}</td>
                            <td>{{i.duration}} Minutes</td>
                            <td>
                                <span v-if="i%2==0">Teks</span>
                                <span v-else>Gambar</span>
                            </td>
                            <td>
                                <span v-if="i.type==1">Essay</span>
                                <span v-else-if="i.type==2">Pilihan Ganda</span>
                            </td>
                            <td>{{i.option_num}}</td>
                            <td>
                                <button class="bg-primary-600 text-white ring-2 ring-inset ring-primary-200 hover:bg-primary-800 
                                                duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                    @click.prevent="gantiSection(i.id)"> 
                                    <i class="fa fa-info-circle mr-2"></i>
                                    <span>Detail</span>
                                </button>
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
                                duration-200 rounded-full px-10 py-2 mt-2 h-auto w-auto" 
                    id="btnCreateSection">
                    <i class="fa fa-feather fa-lg mr-2"></i>   
                    <span>Add New Section</span>
                </button>
            </div>

            <div v-show="this.questionList!=null">
                <h1 class="font-bold text-primary-900 text-4xl mt-5">Question</h1>
                <div class="overflow-auto w-full h-96 no-scrollbar mt-3">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800">
                            <tr>
                                <th class="font-semibold w-1/12">Question No</th>
                                <th class="font-semibold w-3/12">Question</th>
                                <th class="font-semibold w-3/12">Option Choices</th>
                                <th class="font-semibold w-1/12">Answer Key</th>
                                <th class="font-semibold w-1/12">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center even:bg-sky-100 odd:bg-sky-200 text-primary-900" v-for="(i,idx) in this.questionList" :key="idx">
                                <td>{{idx+1}}</td>
                                <td class="text-justify overflow-hidden overflow-ellipsis instruksi py-1">{{i.instruction}}</td>
                                <td>{{optionToString(i)}}</td>
                                <td>{{i.answer}}</td>
                                <td>
                                    <button class="bg-primary-600 text-white ring-2 ring-inset ring-primary-200 hover:bg-primary-800 
                                                    duration-200 rounded-full h-auto w-auto text-base px-5 py-2 mr-1" 
                                        @click="this.$router.push({path: '/admin/question/update'})"> 
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
                        @click="this.$router.push({path: '/admin/question/add'})">
                        <i class="fa fa-feather fa-lg mr-2"></i>   
                        <span>Add New Question</span>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Transparent Overlay -->
        <div id="bg" class="fixed top-0 left-0 w-screen h-screen bg-primary-1000 bg-opacity-80 hidden"></div>

        <!-- Create New Session Modal -->
        <div id="modalSection" class="fixed left-1/3 bg-primary-1000 text-primary-1000 rounded-lg hidden" style="top: 15%; width: 40%; height: 70%;">
            <div class="bg-primary-300 h-12 rounded-t-lg px-5 py-2 flex items-center">
                <button id="closeNewSection" class="relative inline-block">
                    <i class="fa fa-times fa-lg"></i>
                </button>
                <p class="font-bold text-lg text-right inline-block relative" style="width: 96%">{{headerModal}}</p>
            </div>

            <div class="text-white p-5 h-5/6 relative">
                <label for="instruction">Instruction</label><br>
                <textarea name="instruction" id="instruction" placeholder="Section Instruction"
                    class="rounded-lg py-2 px-3 w-full h-1/3 my-2 bg-primary-600 outline-none placeholder-gray-300"></textarea><br>
                
                <div class="flex">
                    <div class="w-1/3">
                        <p class="mt-4 mb-3">Duration</p>
                        <p class="mb-3">Question Type</p>
                        <p class="mb-4">Answer Type</p>
                        <p class="hidden non-essay">Option Number</p>
                    </div>
                    <div>
                        <p class="mt-4 mb-3">:</p>
                        <p class="mb-3">:</p>
                        <p class="mb-4">:</p>
                        <p class="hidden non-essay">:</p>
                    </div>
                    <div class="grow ml-2">
                        <div>
                            <input type="number" name="duration" id="duration" placeholder="0-9"
                                class="rounded-lg py-2 px-3 w-9/12 my-2 bg-primary-600 outline-none placeholder-gray-300">
                            <label for="duration"> Minutes</label><br>
                        </div>
                        <div class="flex gap-2 mb-2">
                            <Radio :values="'question_text'" :names="'Question_Type'" :id="'question_text'" :label="'Text'"/>
                            <Radio :values="'question_Image'" :names="'Question_Type'" :id="'question_Image'" :label="'Image'"/>
                        </div>
                        <div class="flex gap-2">
                            <Radio :values="'answer_text'" :names="'Answer_Type'" :id="'answer_text'" :label="'Text'"/>
                            <Radio :values="'answer_multiple'" :names="'Answer_Type'" :id="'answer_multiple'" :label="'Multiple Choice'"/>
                            <Radio :values="'answer_image'" :names="'Answer_Type'" :id="'answer_image'" :label="'Image'"/>
                        </div>
                        <div class="flex hidden non-essay">
                            <input type="number" name="option_number" id="option_number" placeholder="2-5"
                                class="rounded-lg py-2 px-3 w-9/12 my-2 bg-primary-600 outline-none placeholder-gray-300">
                        </div>
                    </div>
                </div>
                

                <button id="submit_new_section" class="absolute bottom-0 right-0 mr-5 rounded-lg px-10 py-2 bg-sky-300 text-primary-1000 hover:text-white 
                                                        hover:bg-primary-700 duration-300 ring-2 ring-inset ring-sky-300 hover:ring-primary-200">Create</button>

            </div>
        </div>
    </div>
</template>
<script>
import Radio from '../../components/radiobutton.vue'
import axios from 'axios'
export default {
    components: {
        Radio,
        axios
    },
    data() {
        return {
            testList: [],
            sectionList: null,
            questionList: null,
            test: null,
            questionId: 0,
            headerModal: "Create A New Section"
        }
    },
    created() {
        this.$emit('updateHeader', 'Test')
    },
    methods: {
        openModal(){
            this.headerModal = "Update A Section";
            $('#modalSection').fadeIn("slow");
            $('#bg').fadeIn("slow");
        },
        dataInit(){
            for (let i = 0; i < this.test.length; i++) {
                this.testList[i] = this.test[i].name
            }

            axios
            .get('http://127.0.0.1:8888/api/section/all/'+this.test[0].id)
            .then(({data}) => (
                this.sectionList = data
            ))
        },
        gantiTes(event){
            this.questionList = null
            axios
            .get('http://127.0.0.1:8888/api/section/all/'+event.target.value)
            .then(({data}) => (
                this.sectionList = data
            ))
        },
        gantiSection(id){
            axios
            .get('http://127.0.0.1:8888/api/question/all?section_id='+id)
            .then(({data}) => (
                this.questionList = data
            ))
        },
        optionToString(question){
            var hasil = "-"
            if(question.option_a!="-") hasil = "A. "+question.option_a
            if(question.option_b!="-") hasil += ", B. "+question.option_b
            if(question.option_c!="-") hasil += ", C. "+question.option_c
            if(question.option_d!="-") hasil += ", D. "+question.option_d
            if(question.option_e!="-") hasil += ", E. "+question.option_e

            return hasil
        }
    },
    mounted(){
        $('.menu').removeClass('bg-primary-200')
        $('.menu').removeClass('text-primary-900')
        $('.menu').addClass('hover:bg-primary-800')
        $('#menu-test').removeClass('hover:bg-primary-800')
        $('#menu-test').addClass('bg-primary-200')
        $('#menu-test').addClass('text-primary-900')

        $('#answer_multiple').on("click", function() { $('.non-essay').removeClass('hidden'); });
        $('#answer_image').on("click", function() { $('.non-essay').removeClass('hidden'); });
        $('#answer_text').on("click", function() { $('.non-essay').addClass('hidden'); });

        let this2 = this;
        $('#btnCreateSection').click(function(){
            this2.headerModal = "Create A New Section";
            $('#modalSection').fadeIn("slow");
            $('#bg').fadeIn("slow");
        });
        $('#closeNewSection').click(function(){
            $('#modalSection').fadeOut("fast");
            $('#bg').fadeOut("slow");
        });

        axios
        .get('http://127.0.0.1:8888/api/test/all')
        .then(({data}) => (
            this.test = data,
            this.dataInit()
        ))
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