<template>
    <div>
        <div class="absolute top-20 w-full flex justify-center" style="height: 30rem;">
            <div class="w-5/6 h-full">
                <div class="overflow-auto w-full h-full no-scrollbar mt-5" v-if="this.recruitment!=null">
                    <table class="table-fixed border border-collapse border-stroke-100 w-full font-semibold">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="w-3/12 border border-stroke-100">QR Barcode</th>
                                <th class="w-2/12 border border-stroke-100">Lowongan</th>
                                <th class="w-1/12 border border-stroke-100">Pelamar</th>
                                <th class="w-2/12 border border-stroke-100">Dibuat Pada</th>
                                <th class="w-1/12 border border-stroke-100">Status</th>
                                <th class="w-2/12 border border-stroke-100">Action</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100">
                            <!-- <tr class="text-center" v-for="i in this.recruitment" :key="i"> -->
                            <tr class="text-center" v-for="i in 10" :key="i">
                                <td class="border border-stroke-100">barkot {{i}}</td>
                                <td class="border border-stroke-100">Lowongan {{i}}, Lowongan {{i+1}}</td>
                                <td class="border border-stroke-100">{{Math.floor(Math.random()*10)}}</td>
                                <td class="border border-stroke-100">16/03/2022 11:43</td>
                                <td class="border border-stroke-100">Open</td>
                                <td class="border border-stroke-100 py-2">
                                    <button class="bg-safe hover:bg-green-500 duration-200 rounded-full text-white
                                                    duration-200 rounded-full h-auto w-auto text-base px-5 py-1 mr-1" 
                                        @click="detailRecruitment(1)"> 
                                        <i class="fa fa-info-circle mr-2"></i>
                                        <span>Detail</span>
                                    </button>
                                    <button class="bg-safe hover:bg-green-800 duration-200 rounded-full text-white
                                                    duration-200 rounded-full h-auto w-auto text-base px-5 py-1 mr-1" 
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
                    <button class="bg-foreground-4-100 text-white hover:bg-foreground-4-200
                                    duration-200 rounded-full px-10 py-2 mt-5 h-auto w-auto"
                            id="btnCreateRecruitment">
                        <i class="fa fa-calendar-alt fa-lg mr-2"></i>   
                        <span>Buat Rekrutmen Baru</span>
                    </button>
                </div>

                <div v-show="this.applicant!=null">
                    <h1 class="font-bold text-4xl mt-5">Pelamar Kerja</h1>
                    <div class="overflow-auto w-full h-96 no-scrollbar mt-3">
                        <table class="table-fixed border border-collapse border-stroke-100 w-full font-semibold">
                            <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                                <tr>
                                    <th class="w-2/12 border border-stroke-100">Email</th>
                                    <th class="w-2/12 border border-stroke-100">Nama</th>
                                    <th class="w-2/12 border border-stroke-100">Jenis Kelamin</th>
                                    <th class="w-2/12 border border-stroke-100">Melamar Pada</th>
                                    <th class="w-1/12 border border-stroke-100">Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-background-400 divide-y divide-stroke-100">
                                <!-- <tr class="text-center" v-for="(i,idx) in this.questionList" :key="idx"> -->
                                <tr class="text-center" v-for="i in this.applicant" :key="i">
                                    <td class="border border-stroke-100">{{i.email}}</td>
                                    <td class="border border-stroke-100">{{i.nama}}</td>
                                    <td class="border border-stroke-100">{{i.jenis_kelamin=='L' ? "Laki-Laki" : "Perempuan"}}</td>                                
                                    <td class="border border-stroke-100">{{toDate(i.createdAt)}}</td>
                                    <td class="border border-stroke-100 py-2">
                                        <button class="bg-safe hover:bg-green-800 duration-200 rounded-full text-white
                                                        duration-200 rounded-full h-auto w-auto text-base px-5 py-1 mr-1" 
                                            @click="this.$router.push({path: '/admin/applicant', query: {email: i.email}})"> 
                                            <i class="fa fa-info-circle mr-2"></i>
                                            <span>Detail</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w-1 h-64 relative top-10"></div>
            </div>
        </div>

        <!-- Transparent Overlay -->
        <div id="bg" class="fixed top-0 left-0 w-screen h-screen bg-primary-1000 bg-opacity-80 hidden"></div>

        <!-- Create New Recruitment Modal -->
        <div id="modalRecruitment" class="fixed left-1/3 bg-primary-1000 h-3/5 w-1/3 text-primary-1000 rounded-lg hidden" style="top: 20%">
            <div class="bg-primary-300 h-12 rounded-t-lg px-5 py-2 flex items-center">
                <button id="closeNewRecruitment" class="relative inline-block">
                    <i class="fa fa-times fa-lg"></i>
                </button>
                <p class="font-bold text-lg text-right inline-block relative" style="width: 96%">{{headerModal}}</p>
            </div>

            <div class="text-white p-5 h-5/6 relative">
                <div class="flex">
                    <p class="w-5/12">Lowongan Yang Ditawarkan :</p>
                    <div class="grow h-auto">
                        <div class="bg-primary-600 py-1 px-3 rounded-full inline-block ml-2 mb-2" v-for="i in lowongan" :key="i">
                            <span>{{i}}</span>
                            <i class="fa fa-x text-sm ml-3 cursor-pointer" @click="hapusLowongan(`${i}`)"></i>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-3 py-4">
                    <input type="text" name="lowongan" id="lowongan" placeholder="Lowongan"
                        class="rounded-lg py-2 px-3 w-full bg-primary-600 outline-none placeholder-gray-300"><br>
                    <button class="rounded-lg px-3 h-10 bg-sky-300 text-primary-1000 hover:bg-primary-600 hover:text-sky-200 duration-300"
                                    @click.prevent="tambahLowongan">Tambahkan</button>
                </div>

                <div class="flex gap-3">
                    <p class="w-2/12">QR Code :</p>
                    <div class="h-40 w-40 bg-white">

                    </div>
                    <div class="flex items-end">
                        <button class="rounded-lg px-3 h-10 bg-sky-300 text-primary-1000 hover:bg-primary-600 hover:text-sky-200 duration-300"
                                    @click.prevent="tambahLowongan">Generate</button>
                    </div>
                </div>

                <button id="submit_new_Recruitment" class="absolute bottom-0 right-0 mr-5 rounded-lg px-10 py-2 bg-sky-300 text-primary-1000 hover:text-white 
                                                        hover:bg-primary-700 duration-300 ring-2 ring-inset ring-sky-300 hover:ring-primary-200"
                                                @click.prevent="createRecruitment">Create</button>

            </div>
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
            headerModal: "Buat Rekrutmen Baru",
            recruitment: null,
            applicant: null,
            lowongan: ["Boss", "Manager", "Karyawan"]
        }
    },
    created() {
        this.$emit('updateHeader', 'Recruitment')
    },
    methods: {
        toDate(timeString){
            const waktu = new Date(timeString)
            const date = ('00'+waktu.getDate()).slice(-2) + "/" + ('00'+(waktu.getMonth()+1)).slice(-2) + "/" + waktu.getFullYear()
            const time = ('00'+waktu.getHours()).slice(-2) + ":" + ('00'+waktu.getMinutes()).slice(-2)
            const dateTime = date + ' ' + time
            return dateTime
        },
        openModal(){
            this.headerModal = "Update Rekrutmen";
            $('#modalRecruitment').fadeIn("slow");
            $('#bg').fadeIn("slow");
        },
        createRecruitment(){
            let email = $('#user_email').val()
            let start = $('#start').val()
            let finish = $('#finish').val()

            if(email==""||start==""||finish=="")
                Swal.fire({
                    title: 'Mohon Isi Semua Field!',
                    icon: 'warning',
                    confirmButtonText: 'Kembali'
                });
            else if(start>finish)
                Swal.fire({
                    title: 'Waktu Awal Melebihi Waktu Akhir!',
                    icon: 'warning',
                    confirmButtonText: 'Kembali'
                });
            else{
                var dateStart = new Date(start);
                var dateFinish = new Date(finish);
                var duration = (dateFinish.getTime()-dateStart.getTime())/(1000*60)

                axios.post('http://127.0.0.1:8888/api/exam_session/create',{
                    "email": email,
                    "start_date": dateStart,
                    "finish_date": dateFinish,
                    "duration": duration
                })
                .then((response) => {
                    Swal.fire(
                        'Created!',
                        'Rekrutmen Baru Berhasil Dibuat!',
                        'success'
                    )
                    .then(function(){
                        $('#modalSession').fadeOut("fast");
                        $('#bg').fadeOut("slow");
                    })
                }).catch( error => { 
                    console.log('error: ' + error) 
                });
            }
        },
        tambahLowongan(){
            let lowonganKerja = $('#lowongan').val()
            if(lowonganKerja!='' && !this.lowongan.includes(lowonganKerja)){
                this.lowongan.push(lowonganKerja)
                $('#lowongan').val('')
            }
        },
        hapusLowongan(lowonganKerja){
            var idx = this.lowongan.indexOf(lowonganKerja);
            if (idx !== -1) {
                this.lowongan.splice(idx, 1);
            }
        }
    },
    mounted(){
        $('.menu').removeClass('bg-background-200')
        $('.menu').removeClass('text-black')
        $('#menu-recruitment').addClass('bg-background-200')
        $('#menu-recruitment').addClass('text-black')

        let this2 = this;
        $('#btnCreateRecruitment').click(function(){
            this2.headerModal = "Buat Rekrutmen Baru";
            $('#modalRecruitment').fadeIn("slow");
            $('#bg').fadeIn("slow");
        });
        $('#closeNewRecruitment').click(function(){
            $('#modalRecruitment').fadeOut("fast");
            $('#bg').fadeOut("slow");
        });

        axios
        .get('http://127.0.0.1:8888/api/applicant/all')
        .then(({data}) => (
            this.applicant = data
        ))
        this.recruitment = 1
        
    }
}
</script>

<style>

</style>