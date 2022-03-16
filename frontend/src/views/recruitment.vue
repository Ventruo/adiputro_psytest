<template>
    <header class="bg-foreground-4-100 flex justify-between px-8 py-2 z-10 absolute w-full h-20 z-0" id="main-header"></header>
    <div class="z-10">
        <div class="w-9/12 h-full m-auto text-white relative mt-3 flex flex-col flex-grow pb-3 overflow-hidden">
            <div class="flex justify-between mb-7">
                <h1 class="text-white text-3xl text-center font-bold mt-2">Recruitment</h1>
                <div class="flex justify-center">
                    <img src="../assets/logo.png" alt="" class="w-20">
                </div>
            </div>

            <form method="" action="" autocomplete="off" class="bg-foreground-3-500 w-full h-full rounded-xl text-black overflow-y-auto no-scrollbar py-5 px-5">
                <h1 class="text-3xl font-bold mb-2">Biodata</h1>
                <div class="flex mb-5">
                    <div class="w-6/12 mr-10">
                        <p class="mt-2">NAMA LENGKAP :</p>
                        <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Nama Lengkap'" />

                        <p class="mt-4">NO KTP :</p>
                        <InputBio :type="'number'" :modelValue="''" :nama="'no_identitas'" :placeHolder="'0123456789'" />

                        <p class="mt-4">TEMPAT & TGL LAHIR :</p>
                        <InputBio :type="'text'" :modelValue="''" :nama="'ttl'" :placeHolder="'Malang / 22 Januari 2022'" />

                        <p class="mt-4">JENIS KELAMIN :</p>
                        <div class="flex my-2">
                            <div class="w-1/2"><Radio :values="'laki-laki'" :names="'jk'" :label="'LAKI-LAKI'"/></div>
                            <div class="w-1/2"><Radio :values="'perempuan'" :names="'jk'" :label="'PEREMPUAN'"/></div>
                        </div>

                        <p class="mt-7">ALAMAT DOMISILI :</p>
                        <InputBio :type="'text'" :modelValue="''" :nama="'alamat_sekarang'" :placeHolder="'Alamat Domisili'" />
                    </div>

                    <div class="w-6/12">
                        <p class="mt-4">USIA :</p>
                        <InputBio :type="'text'" :modelValue="''" :nama="'usia'" :placeHolder="'20 Tahun'" />

                        <p class="mt-4">STATUS PERKAWINAN :</p>
                        <div class="flex mt-2 mb-5">
                            <div class="w-1/2"><Radio :values="'belum menikah'" :names="'menikah'" id="belumMenikah" :label="'BELUM MENIKAH'"/></div>
                            <div class="w-1/2"><Radio :values="'sudah menikah'" :names="'menikah'" id="menikah" :label="'SUDAH MENIKAH'"/></div>
                        </div>

                        <p class="mt-4">NO.TELEPON/HP :</p>
                        <InputBio :type="'number'" :modelValue="''" :nama="'noTelp'" :placeHolder="'081234567890'" />

                        <p class="mt-4">E-MAIL :</p>
                        <InputBio :type="'email'" :modelValue="''" :nama="'email'" :placeHolder="'contoh@example.com'" />

                        <p class="mt-4">POSISI YANG DILAMAR :</p> 
                        <select name="posisiLamaran" class="w-full text-lg rounded-lg outline-none ring-1 ring-inset ring-stroke-100 bg-background-400 px-4 py-1.5 my-1 outline-none ">
                            <option value="a">a</option>
                            <option value="b">b</option>
                            <option value="c">c</option>
                            <option value="d">d</option>
                            <option value="e">e</option>
                        </select>
                    </div>
                </div>
                <div class="mb-2">
                    <p>PENDIDIKAN TERAKHIR</p>
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-2/12 border border-stroke-100">TINGKAT/GELAR</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">JURUSAN</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">NAMA SEKOLAH / UNIVERSITAS</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">KOTA</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">TAHUN KELULUSAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
                            <tr class="text-center" v-for="i in pendidikanCount" :key="i">
                                <InputTable :modelValue="''" :nama="'pendidikan[][tingkat]'" :placeHolder="'Tingkat / Gelar'" />
                                <InputTable :modelValue="''" :nama="'pendidikan[][jurusan]'" :placeHolder="'Jurusan'" />
                                <InputTable :modelValue="''" :nama="'pendidikan[][sekolah]'" :placeHolder="'Nama Sekolah / Universitas'" />
                                <InputTable :modelValue="''" :nama="'pendidikan[][kota]'" :placeHolder="'Kota'" />
                                <InputTable :modelValue="''" :nama="'pendidikan[][tahun]'" :placeHolder="'Tahun Kelulusan'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end mt-2">
                        <button @click.prevent="subPendidikanCount" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="pendidikanCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
                                                </button>
                    </div>
                </div>

                <div class="mb-2">
                    <p>LAMPIRAN:</p>

                    <div class="my-2 italic text-stroke-100">
                        <p>Silahkan mengupload lampiran file berekstensi .pdf (batas 20 mb).</p>
                        <p>lampiran yang diupload (dijadikan 1 file):</p>
                    </div>

                    <input type="file" name="lampiran" id="">
                </div>
                
                <div class="mt-10 mb-5 flex justify-end">
                    <button class="bg-safe text-white hover:bg-green-800 duration-200 rounded-full text-lg font-bold px-10 py-2">
                                    Submit
                                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import InputBio from '../components/input.vue'
import InputTable from '../components/table_input.vue'
import TextArea from '../components/textarea.vue'
import Radio from '../components/radiobutton.vue'
export default {
    components: {
        InputBio, InputTable, TextArea, Radio
    },
    data(){
        return{
            judulHalaman: 'Biodata',
            url: null,
            fullname: "Widean Nagari",
            pendidikanCount: 1,
            keluargaCount:[1,1,1,1],
            riwayatCount: 1,
            trainingCount: 1,
            organisasiCount: 1,
            bahasaCount: 1,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
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
        subPendidikanCount(){ if (this.pendidikanCount>1) this.pendidikanCount-- },
        subKeluargaCount(idx){ 
            console.log(this.keluargaCount)
            if (this.keluargaCount[idx]>1) this.keluargaCount[idx]-- 
        },
        subRiwayatCount(){ if (this.riwayatCount>1) this.riwayatCount-- },
        subTrainingCount(){ if (this.trainingCount>1) this.trainingCount-- },
        subOrganisasiCount(){ if (this.organisasiCount>1) this.organisasiCount-- },
        subBahasaCount(){ if (this.bahasaCount>1) this.bahasaCount-- },
        getDate(){
            const today = new Date()
            const date = ('00'+today.getDate()).slice(-2) + " " + this.month[today.getMonth()] + " " + today.getFullYear()
            return date
        },
    },
    mounted() {
        $('#menikah').on("click", function() { $('#sudahMenikah').removeClass('hidden'); });
        $('#belumMenikah').on("click", function() { $('#sudahMenikah').addClass('hidden'); });

        $('#kecelakaanYa').on("click", function() { $('#sakitKeras2').removeClass('hidden'); });
        $('#kecelakaanTidak').on("click", function() { $('#sakitKeras2').addClass('hidden'); });
        
        $('#kenalanYa').on("click", function() { $('#adaKenalan').removeClass('hidden'); });
        $('#kenalanTidak').on("click", function() { $('#adaKenalan').addClass('hidden'); });
        
    },
    created(){
        this.$emit('updateJudul', this.judulHalaman)
    }
}
</script>

<style>

</style>