<template>
    <div class="w-full flex justify-center h-auto">
        <div class="w-5/6 h-full">
            <div class="flex">
                <label class="text-xl font-bold w-32">Nama Tes : </label>
                <select name="" id="testCombobox" class="text-black text-lg rounded-xl py-1 px-2 w-10/12 outline-none shadow-xl appearance-none"
                    @change="gantiTes($event)">
                    <option v-for="i in test" :key="i" v-bind:value="i.id">{{i.name}}</option>
                </select>
            </div>

            <h1 class="font-bold text-4xl mt-5">Section</h1>

            <div class="flex justify-end">
                <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200
                                duration-200 rounded-md px-10 py-2 mt-2 h-auto w-auto shadow-xl" 
                    id="btnCreateSection" @click="openModalCreate">
                    <i class="fa fa-feather fa-lg mr-2"></i>   
                    <span>Buat Section Baru</span>
                </button>
            </div>
            <div class="overflow-auto w-full h-auto max-h-[30rem] no-scrollbar mt-5 rounded-lg shadow-xl">
                <table class="table-fixed w-full font-semibold">
                    <thead class="bg-foreground-4-100 text-white sticky top-0">
                        <tr>
                            <th class="w-1/12 py-3">Section No</th>
                            <th class="w-2/12">Instruction</th>
                            <th class="w-1/12">Duration</th>
                            <th class="w-1/12">Question Type</th>
                            <th class="w-1/12">Option Type</th>
                            <th class="w-1/12">Option Number</th>
                            <th class="w-2/12">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.sectionList!=null && this.sectionList.length>0">
                        <tr class="text-center odd:bg-foreground-4-50 even:bg-foreground-4-10" v-for="i in this.sectionList" :key="i">
                            <td>{{i.section_number}}</td>
                            <td class="text-justify overflow-hidden overflow-ellipsis instruksi py-1">{{i.instruction}}</td>
                            <td>{{i.duration}} Minutes</td>
                            <td>
                                <span v-if="i.question_type==1">Teks</span>
                                <span v-else-if="i.question_type==2">Gambar</span>
                            </td>
                            <td>
                                <span v-if="i.section_type==1">Essay</span>
                                <span v-else-if="i.section_type==2">Pilihan Ganda</span>
                            </td>
                            <td>{{i.option_num}}</td>
                            <td class="text-white">
                                <button class="bg-safe hover:bg-green-800 duration-200 rounded-md h-auto w-auto px-5 py-1 mr-1" 
                                    @click.prevent="gantiSection(i.id)"> 
                                    <i class="fa fa-info-circle mr-2"></i>
                                    <span>Detail</span>
                                </button>
                                <button class="bg-secondary hover:bg-red-800 duration-200 rounded-md h-auto w-auto px-5 py-1 mr-1" 
                                    @click="openModal"> 
                                    <i class="fa fa-refresh mr-2"></i>
                                    <span>Update</span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr class="text-center bg-foreground-4-50 text-xl">
                            <td colspan="7" class="py-5">Belum ada data tersedia</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h1 class="font-bold text-4xl mt-10">Question</h1>

                <div class="flex justify-end">
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200
                                duration-200 rounded-md px-10 py-2 mt-2 h-auto w-auto shadow-xl" 
                        @click="this.$router.push({path: '/admin/question/add'})">
                        <i class="fa fa-feather fa-lg mr-2"></i>   
                        <span>Add New Question</span>
                    </button>
                </div>

                <div class="overflow-auto w-full h-auto max-h-[30rem] no-scrollbar mt-5 rounded-lg shadow-xl">
                    <table class="table-fixed w-full font-semibold">
                        <thead class="bg-foreground-4-100 text-white sticky top-0">
                            <tr>
                                <th class="w-1/12 py-3">No</th>
                                <th class="w-3/12">Question</th>
                                <th class="w-3/12">Option Choices</th>
                                <th class="w-1/12">Answer Key</th>
                                <th class="w-1/12">Action</th>
                            </tr>
                        </thead>
                        <tbody v-if="this.questionList!=null && this.questionList.length>0">
                            <tr class="text-center odd:bg-foreground-4-50 even:bg-foreground-4-10" v-for="(i,idx) in this.questionList" :key="idx">
                                <td>{{idx+1}}</td>
                                <td class="text-justify h-14 overflow-hidden overflow-ellipsis instruksi py-1">{{i.instruction}}</td>
                                <td>{{optionToString(i)}}</td>
                                <td>{{i.answer}}</td>
                                <td>
                                    <button class="bg-safe hover:bg-green-800 duration-200 rounded-md text-white
                                                    h-auto w-auto text-base px-5 py-1 mr-1" 
                                        @click="this.$router.push({path: '/admin/question/update'})"> 
                                        <i class="fa fa-refresh mr-2"></i>
                                        <span>Update</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        
                        <tbody v-else>
                            <tr class="text-center bg-foreground-4-50 text-xl">
                                <td colspan="5" class="py-5">Belum ada data tersedia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="w-1 h-64 relative top-10"></div>
        </div>
        
        <!-- Transparent Overlay -->
        <div id="bg" class="fixed top-0 left-0 w-screen h-screen bg-primary-1000 bg-opacity-80 hidden" @click="closeModal"></div>

        <!-- Create New Session Modal -->
        <div id="modalSection" class="fixed left-1/3 bg-primary-1000 text-primary-1000 rounded-lg hidden" style="top: 15%; width: 40%; height: 70%;">
            <div class="bg-primary-300 h-12 rounded-t-lg px-5 py-2 flex items-center">
                <button id="closeNewSection" class="relative inline-block" @click="closeModal">
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
                            <Radio :values="'answer_text'" :names="'Answer_Type'" :id="'answer_text'" :label="'Text'" @change="non_essay=false"/>
                            <Radio :values="'answer_multiple'" :names="'Answer_Type'" :id="'answer_multiple'" :label="'Multiple Choice'" @change="non_essay=true"/>
                            <Radio :values="'answer_image'" :names="'Answer_Type'" :id="'answer_image'" :label="'Image'" @change="non_essay=true"/>
                        </div>
                        <div class="flex non-essay" v-show="non_essay">
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
        Radio, axios
    },
    data() {
        return {
            testList: [],
            sectionList: null,
            questionList: null,
            test: null,
            questionId: 0,
            non_essay: true,
            headerModal: "Create A New Section",
            port: import.meta.env.VITE_BACKEND_URL
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
        openModalCreate(){
            this.headerModal = "Create A New Section";
            $('#modalSection').fadeIn("slow");
            $('#bg').fadeIn("slow");
        },
        closeModal(){
            $('#modalSection').fadeOut("fast");
            $('#bg').fadeOut("slow");
        },
        dataInit(){
            for (let i = 0; i < this.test.length; i++) {
                this.testList[i] = this.test[i].name
            }

            axios
            .get(this.port+'/section/all/'+this.test[0].id)
            .then(({data}) => (
                this.sectionList = data,
                // console.log(this.sectionList[0].id)
                
                axios
                .get(this.port+'/question/all?section_id='+this.sectionList[0].id)
                .then(({data}) => (
                    this.questionList = data
                ))
            ))
        },
        gantiTes(event){
            this.questionList = null
            axios
            .get(this.port+'/section/all/'+event.target.value)
            .then(({data}) => (
                this.sectionList = data,
                axios
                .get(this.port+'/question/all?section_id='+this.sectionList[0].id)
                .then(({data}) => (
                    this.questionList = data
                ))
            ))
        },
        gantiSection(id){
            axios
            .get(this.port+'/question/all?section_id='+id)
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
        axios
        .get(this.port+'/test/all')
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