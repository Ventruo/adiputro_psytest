<template>
    <header class="bg-foreground-4-100 flex justify-between px-8 py-2 z-10 absolute w-full h-20 z-0" id="main-header"></header>
    <div v-show="this.lowongan!=null && this.lowongan.status==0" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="bg-foreground-3-500 w-full h-full px-10 py-20 rounded-xl flex items-center justify-center text-center text-black text-2xl font-bold overflow-y-auto no-scrollbar py-5 px-5">
            Mohon maaf lowongan sudah tidak tersedia, silahkan cari lowongan lain :D
        </div>
    </div>
    <div class="z-10">
        <div class="w-9/12 h-full m-auto text-white relative mt-3 flex flex-col flex-grow pb-3 overflow-hidden">
            <div class="flex justify-between mb-7">
                <h1 class="text-white text-3xl text-center font-bold mt-2">Recruitment</h1>
                <div class="flex justify-center">
                    <img src="../assets/logo.png" alt="" class="w-20">
                </div>
            </div>
            <form v-show="this.lowongan!=null && this.lowongan.status==1" method="POST" action="http://127.0.0.1:8888/api/applicant/create" name="forms" autocomplete="off" enctype="multipart/form-data" 
                    class="bg-foreground-3-500 w-full h-full rounded-xl text-black overflow-y-auto no-scrollbar py-5 px-5"
                    @submit.prevent="submitForm">
                <h1 class="text-3xl font-bold mb-2">Biodata</h1>
                <div class="flex mb-5">
                    <div class="w-6/12 mr-10">
                        <p class="mt-2">NAMA LENGKAP :</p>
                        <InputBio :type="'text'" :modelValue="''" :nama="'nama'" :placeHolder="'Nama Lengkap'" />

                        <p class="mt-4">NO KTP :</p>
                        <InputBio :type="'number'" :modelValue="''" :nama="'no_ktp'" :placeHolder="'0123456789'" />

                        <p class="mt-4">TEMPAT LAHIR :</p>
                        <InputBio :type="'text'" :modelValue="''" :nama="'tempat_lahir'" :placeHolder="'Malang'" />

                        <p class="mt-4">TANGGAL LAHIR :</p>
                        <input type="date" name="tanggal_lahir" id="tanggal_lahir" class="w-full px-4 py-2 my-1 rounded-lg outline-none 
                                bg-background-400 ring-1 ring-inset ring-stroke-100 placeholder-stroke-100">
                        <!-- <InputBio :type="'text'" :modelValue="''" :nama="'tanggal_lahir'" :placeHolder="'22 Januari 2022'" /> -->

                        <p class="mt-4">ALAMAT DOMISILI :</p>
                        <InputBio :type="'text'" :modelValue="''" :nama="'alamat_domisili'" :placeHolder="'Alamat Domisili'" />
                        
                        <p class="mt-4">PENDIDIKAN TERAKHIR :</p>
                        <div>
                            <div class="flex gap-3">
                                <div class="w-1/2">
                                    <p class="mt-3">GELAR</p>
                                    <p class="mt-5">JURUSAN</p>
                                    <p class="mt-6">NAMA SEKOLAH</p>
                                </div>
                                <div>
                                    <p class="mt-3">:</p>
                                    <p class="mt-5">:</p>
                                    <p class="mt-6">:</p>
                                </div>
                                <div>
                                    <InputBio :type="'text'" :modelValue="''" :nama="'pendidikan_terakhir'" :placeHolder="'Tingkat / Gelar'" />
                                    <InputBio :type="'text'" :modelValue="''" :nama="'jurusan'" :placeHolder="'Jurusan'" />
                                    <InputBio :type="'text'" :modelValue="''" :nama="'nama_sekolah'" :placeHolder="'Nama Sekolah / Universitas'" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-6/12">
                        <p class="mt-4">USIA :</p>
                        <InputBio :type="'number'" :modelValue="''" :nama="'usia'" :placeHolder="'20'" />
                        
                        <p class="mt-4">NO.TELEPON/HP :</p>
                        <InputBio :type="'number'" :modelValue="''" :nama="'nomor_hp'" :placeHolder="'081234567890'" />

                        <p class="mt-4">E-MAIL :</p>
                        <InputBio :type="'email'" :modelValue="''" :nama="'email'" :placeHolder="'contoh@example.com'" />

                        <p class="mt-4">JENIS KELAMIN :</p>
                        <div class="flex my-2">
                            <div class="w-1/2"><Radio :values="'L'" :names="'jenis_kelamin'" :id="'laki'" :label="'LAKI-LAKI'"/></div>
                            <div class="w-1/2"><Radio :values="'P'" :names="'jenis_kelamin'" :id="'perempuan'" :label="'PEREMPUAN'"/></div>
                        </div>

                        <p class="mt-7">STATUS PERKAWINAN :</p>
                        <div class="flex mt-2 mb-5">
                            <div class="w-1/2"><Radio :values="'belum menikah'" :names="'status_perkawinan'" :id="'belumMenikah'" :label="'BELUM MENIKAH'"/></div>
                            <div class="w-1/2"><Radio :values="'sudah menikah'" :names="'status_perkawinan'" :id="'menikah'" :label="'SUDAH MENIKAH'"/></div>
                        </div>

                        <p class="mt-4">POSISI YANG DILAMAR :</p> 
                        <select name="posisi_dilamar" class="w-full text-lg rounded-lg outline-none ring-1 ring-inset ring-stroke-100 bg-background-400 px-2 py-1.5 my-1 outline-none ">
                            <option v-for="i in pekerjaan" :key="i" v-bind:value="i">{{i}}</option>
                        </select>

                        <p class="mt-4">LAMPIRAN:</p>
                        <div class="my-2 italic text-stroke-100">
                            <p>Silahkan mengupload lampiran file berekstensi .pdf (batas 20 mb).</p>
                            <p>lampiran yang diupload (dijadikan 1 file):</p>
                        </div>
                        <input type="file" name="lampiran" id="">
                    </div>
                </div>
                
                <div class="mt-10 mb-5 flex justify-end">
                    <button type="submit" class="bg-foreground-4-100 text-white hover:bg-foreground-4-200 duration-200 rounded-full text-lg font-bold px-10 py-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
    <div id="spinner-modal" class="fixed top-0 left-0 w-screen h-screen flex items-center bg-foreground-3-500 bg-opacity-70 justify-center z-20" style="display: none">
        <i class="fas fa-spinner animate-spin fa-7x inline-block text-foreground-4-100"></i>
    </div>
</template>

<script>
import InputBio from '../components/input.vue'
import InputTable from '../components/table_input.vue'
import TextArea from '../components/textarea.vue'
import Radio from '../components/radiobutton.vue'
import axios from 'axios'

export default {
    components: {
        axios, InputBio, InputTable, TextArea, Radio
    },
    data(){
        return{
            judulHalaman: 'Biodata',
            url: null,
            lowongan: null,
            pekerjaan: null,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
            port: import.meta.env.VITE_BACKEND_URL
        }
    },
    methods: {
        signChange(e){
            var input = e.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.url = e.target.result;
                }
                this.image=input.files[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        getDate(){
            const today = new Date()
            const date = ('00'+today.getDate()).slice(-2) + " " + this.month[today.getMonth()] + " " + today.getFullYear()
            return date
        },
        submitForm(e){
            var fileLamaran = e.target[16].files[0]
            if (fileLamaran!=undefined)
                fileLamaran.originalname = fileLamaran.name

            let formData = new FormData()
            formData.append('job_vacancy_id',this.$route.query.id)
            formData.append('nama',e.target[0].value)
            formData.append('no_ktp',e.target[1].value)
            formData.append('tempat_lahir',e.target[2].value)
            formData.append('tanggal_lahir',e.target[3].value)
            formData.append('alamat_domisili',e.target[4].value)
            formData.append('pendidikan_terakhir',e.target[5].value)
            formData.append('jurusan',e.target[6].value)
            formData.append('nama_sekolah',e.target[7].value)
            formData.append('usia',e.target[8].value)
            formData.append('nomor_hp',e.target[9].value)
            formData.append('email',e.target[10].value)
            formData.append('jenis_kelamin',e.target[11].checked!=false ? e.target[11].value : e.target[12].value)
            formData.append('status_perkawinan',e.target[13].checked!=false ? e.target[13].value : e.target[14].value)
            formData.append('posisi_dilamar',e.target[15].value)
            formData.append('lampiran',fileLamaran)

            $('#spinner-modal').fadeIn("slow");

            axios.post(this.port+'/applicant/create', formData, {headers: {
                'Content-Type': 'multipart/form-data',
            }})
            .then((response) => {
                if (response.status==200){
                    $('#spinner-modal').fadeOut("slow");
                    Swal.fire(
                        'Submitted!',
                        'Lamaran Successfully Submitted.',
                        'success'
                    )
                    .then(function(){
                        window.location = '/'
                    })
                }else{
                    throw response
                }
            }).catch( error => {
                $('#spinner-modal').fadeOut("slow");
                Swal.fire(
                    'Warning!',
                    error.response.data,
                    'warning'
                )
            });
        },
    },
    mounted() {
        axios
        .get(this.port+'/job_vacancy/'+this.$route.query.id)
        .then(({data}) => (
            this.lowongan = data,
            this.pekerjaan = this.lowongan.list_pekerjaan.split(",")
        ))
    },
    created(){
        this.$emit('updateJudul', this.judulHalaman)
    }
}
</script>

<style>

</style>