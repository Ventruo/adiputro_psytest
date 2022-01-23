<template>
    <div class="w-9/12 h-full m-auto text-white relative mt-3 flex flex-col flex-grow pb-3 overflow-hidden">
        <h1 class="text-3xl text-center font-bold mb-3">BIODATA</h1>
        <form method="" action="" autocomplete="off" class="bg-primary-900 w-full h-full overflow-y-auto no-scrollbar py-2 px-5">
            <div class="flex mb-5">
                <div class="w-1/12">
                    <p class="mt-2">1. </p>
                    <p class="mt-4" v-for="i in 15" :key="i">{{i+1}}. </p>
                </div>
                <div class="text-right mr-2 w-2/12">
                    <p class="mt-2">NAMA LENGKAP :</p>
                    <p class="mt-4">NAMA PANGGILAN :</p>
                    <p class="mt-4">ALAMAT DI KTP :</p>
                    <p class="mt-4">ALAMAT SEKARANG :</p>
                    <p class="mt-4">TELEPON/HP :</p>
                    <p class="mt-4">TEMPAT & TGL LAHIR :</p>
                    <p class="mt-4">KEWARGANEGARAAN :</p>
                    <p class="mt-4">SUKU :</p>
                    <p class="mt-4">AGAMA :</p>
                    <p class="mt-4">USIA :</p>
                    <p class="mt-4">TINGGI BADAN :</p>
                    <p class="mt-4">BERAT BADAN :</p>
                    <p class="mt-4">NO KTP / SIM / PASPOR :</p>
                    <p class="mt-4">GOLONGAN DARAH :</p>
                    <p class="mt-4">NO NPWP :</p>
                    <p class="mt-4">E-MAIL :</p>
                </div>
                <div class="text-left w-9/12">
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Nama Lengkap'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Nama Panggilan'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Alamat di KTP'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Alamat Sekarang'" />
                    <InputBio :type="'number'" :modelValue="''" :nama="'fullname'" :placeHolder="'081234567890'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Malang / 22 Januari 2022'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Kewarganegaraan'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Suku'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Agama'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'20 Tahun'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'150 cm'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'50 kg'" />
                    <InputBio :type="'number'" :modelValue="''" :nama="'fullname'" :placeHolder="'0123456789'" />
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'A / B / AB / O'" />
                    <InputBio :type="'number'" :modelValue="''" :nama="'fullname'" :placeHolder="'01234567890'" />
                    <InputBio :type="'email'" :modelValue="''" :nama="'fullname'" :placeHolder="'contoh@example.com'" />
                </div>
            </div>
            <div class="flex mb-2">
                <p class="mr-2">17. </p>
                <div class="w-full">
                    <div class="flex">
                        <div class="mr-4 w-1/3">
                            <p class="mb-1">Keadaan Kesehatan pada saat ini : </p>
                        </div>
                        <div class="flex gap-5 mb-1">
                            <Radio :values="'baik'" :names="'kesehatan'" :id="'kesehatanBaik'" :label="'BAIK'"/>
                            <Radio :values="'kurang sehat'" :names="'kesehatan'" :id="'kesehatanKurang'" :label="'KURANG SEHAT'"/>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="mr-4 w-1/3">
                            <p>Apakah ada cacat tubuh? </p>
                            <p class="mb-1 text-gray-400 italic">(Misal: penglihatan / pendengaran / pengucapan / jantung / dll.)</p>
                        </div>
                        <div class="flex gap-5">
                            <Radio :values="'cacatYa'" :names="'cacatTubuh'" :id="'cacatYa'" :label="'YA'"/>
                            <Radio :values="'cacatTidak'" :names="'cacatTubuh'" :id="'cacatTidak'" :label="'TIDAK'"/>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="mr-4 w-1/3">
                            <p id="sakitKeras" class="mb-1">Apakah anda pernah sakit keras/kecelakaan?</p>
                        </div>
                        <div class="flex gap-5">
                            <Radio :values="'kecelakaanYa'" :names="'kecelakaan'" id="kecelakaanYa" :label="'YA'"/>
                            <Radio :values="'kecelakaanTidak'" :names="'kecelakaan'" id="kecelakaanTidak" :label="'TIDAK'"/>
                        </div>
                    </div>

                    <div class="flex hidden" id="sakitKeras2">
                        <div class="mr-4 w-1/3">
                            <p>Kapan Terjadinya:</p>
                        </div>
                        <div class="flex w-7/12">
                            <InputBio :type="'text'" :modelValue="''" :nama="'waktuKecelakaan'" :placeHolder="''"/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="mb-2">
                <div class="flex">
                    <p class="mr-2">18.</p>
                    <div class="mr-2 w-1/3">
                        <div class="flex w-full">
                            <p class="mb-1">Apakah anda belum menikah/menikah? </p>
                        </div>
                    </div>
                    
                    <div class="flex gap-5">
                        <Radio :values="'belum menikah'" :names="'menikah'" id="belumMenikah" :label="'BELUM MENIKAH'"/>
                        <Radio :values="'sudah menikah'" :names="'menikah'" id="menikah" :label="'SUDAH MENIKAH'"/>
                    </div>
                </div>

                <div id="sudahMenikah" class="flex ml-7 hidden">
                    <div>
                        <p class="mt-2 mr-2">a.</p>
                        <p class="mt-4 mr-2">b.</p>
                    </div>
                    <div class="text-right mr-2">
                        <p class="mt-2">Nama Suami/Istri :</p>
                        <p class="mt-4">Nama Anak :</p>
                    </div>
                    <div class="text-left flex-grow">
                        <InputBio :type="'text'" :modelValue="''" :nama="'namaSuamiIstri'" :placeHolder="'Nama Suami/Istri'" />
                        <InputBio :type="'text'" :modelValue="''" :nama="'namaAnak'" :placeHolder="'Nama Anak'" />
                    </div>
                </div>
            </div>
            
            <div>
                <div class="flex mb-2">
                    <p class="mr-2">19.</p>
                    <p>PENDIDIKAN TERAKHIR</p>
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">20.</p>
                    <p>Mengapa Anda ingin bekerja di perusahaan kami? Jelaskan secara singkat:</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'alasanBekerja'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">21.</p>
                    <p>KELUARGA</p>
                </div>
            </div>

            <div class="mb-2">
                <div class="flex">
                    <p class="mr-2">22.</p>
                    <p>RIWAYAT PEKERJAAN DI TEMPAT LAIN:</p>
                </div>
                <div class="ml-7">
                    <p>Apabila Anda pernah bekerja di tempat lain coba sebutkan gaji yang anda peroleh? </p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'gajiPerusahaanLama'" :placeHolder="'Tulis disini'" />

                    <p class="mb-1">Mengapa Anda berhenti dari pekerjaan yang lama, jelaskan secara singkat:</p>
                    <TextArea :modelValue="''" :nama="'berhentiPekerjaanLama'" :placeHolder="'Tulis di sini'" />

                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">23.</p>
                    <p>TRAINING / KURSUS  YANG PERNAH DI IKUTI:</p>
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">24.</p>
                    <p>ORGANISASI YANG PERNAH DI IKUTI:</p>
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">25.</p>
                    <p>BAHASA YANG DIKUASAI:</p>
                </div>
            </div>

            <div class="mb-2">
                <div class="flex">
                    <p class="mr-2">26.</p>
                    <p>Berapa lama Anda harus memberitahu pada perusahaan lama untuk berhenti bekerja:</p>
                </div>
                <div class="ml-7">
                    <InputBio :type="'text'" :modelValue="''" :nama="'kabariPerusahaanLama'" :placeHolder="'Tulis disini'" />

                    <p class="mt-2">Dan mulai kapan Anda dapat mulai bekerja jika Anda di terima di PT. Adiputro Wirasejati :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'mulaiBekerja'" :placeHolder="'Tulis disini'" />

                    <div class="mt-2 flex">
                        <p class="mr-3">Apakah Anda memiliki saudara / kenalan di perusahaan ini: </p>
                        <Radio :values="'kenalanYa'" :names="'Kenalan'" :id="'kenalanYa'" :label="'YA'"/>
                        <Radio :values="'kenalanTidak'" :names="'Kenalan'" :id="'kenalanTidak'" :label="'TIDAK'"/>
                    </div>
                    
                    <div class="hidden" id="adaKenalan">
                        <p>Bila YA, Sebutkan:</p>
                        <div class="flex">
                            <div class="text-right mr-2 w-2/12">
                                <p class="mt-1">Nama :</p>
                                <p class="mt-4">Alamat :</p>
                                <p class="mt-4">Jabatan :</p>
                            </div>
                            <div class="text-left w-9/12">
                                <InputBio :type="'text'" :modelValue="''" :nama="'fullnameKenalan'" :placeHolder="'Nama Lengkap'" />
                                <InputBio :type="'text'" :modelValue="''" :nama="'alamatKenalan'" :placeHolder="'Alamat'" />
                                <InputBio :type="'text'" :modelValue="''" :nama="'jabatanKenalan'" :placeHolder="'Jabatan'" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="flex mb-2 mr-3">
                    <p class="mr-2">27.</p>
                    <p>Bersediakah Anda menjalani Pelatihan kerja  selama 6 (enam) bulan di PT. Adiputro Wirasejati: </p>
                </div>
                <div class="flex gap-5">
                    <Radio :values="'pelatihanYa'" :names="'pelatihan'" :id="'pelatihanYa'" :label="'YA'"/>
                    <Radio :values="'pelatihanTidak'" :names="'pelatihan'" :id="'pelatihanTidak'" :label="'TIDAK'"/>
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">28.</p>
                    <p>Apakah tujuan Anda bekerja, Jelaskan: </p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'tujuanBekerja'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>
            
            <div>
                <div class="flex mb-2">
                    <p class="mr-2">29.</p>
                    <p>Apakah anda memiliki kendaraan (sebutkan jenis kendaraan dan nomer kendaraan):</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'kendaraanPribadi'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2 ml-7">
                    <p class="mr-3">Apakah kendaraan tersebut milik: </p>
                    <Radio :values="'Pribadi'" :names="'kendaraanMilik'" :id="'kendaraan_pribadi'" :label="'Pribadi'"/>
                    <Radio :values="'Orangtua'" :names="'kendaraanMilik'" :id="'kendaraan_Orang_Tua'" :label="'Orang Tua'"/>
                    <Radio :values="'Saudara'" :names="'kendaraanMilik'" :id="'kendaraan_Saudara'" :label="'Saudara'"/>
                    <Radio :values="'dll'" :names="'kendaraanMilik'" :id="'kendaraan_dll'" :label="'dan lain-lain'"/>
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">30.</p>
                    <p>Apa Hobby Anda? </p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'hobby'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">31.</p>
                    <p>Apabila Anda diterima sebagai karyawan, gaji berapa yang Anda harapkan untuk tiap bulannya?</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'gajiDiharapkan'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">32.</p>
                    <p>Apakah Anda pernah bermasalah dengan Hukum?</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'bermasalahHukum'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">33.</p>
                    <p>Apakah yang menjadi kelebihan dalam diri anda?</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'kelebihan'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">34.</p>
                    <p>Apakah yang menjadi kekurangan dalam diri anda?</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'kekurangan'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">35.</p>
                    <p>Apakah anda puas dengan keadaan diri anda saat ini? Jelaskan</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'puasDiri'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">36.</p>
                    <p>Apakah anda mempunyai prestasi / penghargaan selama ini? Bila ada silahkan disebutkan (jenis, bidang, dan tahun)</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'prestasi'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">37.</p>
                    <p>Adakah bidang seni yang Anda kuasai ? jika ada, sebutkan jenisnya (Musik, suara, dll)</p>
                </div>
                <div class="ml-7">
                    <TextArea :modelValue="''" :nama="'seniDikuasai'" :placeHolder="'Tulis di sini'" />                    
                </div>
            </div>

            <div>
                <div class="flex mb-2">
                    <p class="mr-2">38.</p>
                    <p>Sebagai referensi, sebutkan 2 (dua) nama orang terdekat anda, beserta alamat dan telepon: </p>
                </div>
                <div class="ml-7">
                    <p class="font-bold">Orang Terdekat 1:</p>
                    <div class="flex mb-2">
                        <div class="text-right mr-2 w-2/12">
                            <p class="mt-2">Nama :</p>
                            <p class="mt-4">Alamat :</p>
                            <p class="mt-4">No. Telepon :</p>
                        </div>
                        <div class="text-left w-9/12">
                            <InputBio :type="'text'" :modelValue="''" :nama="'fullnameOrang1'" :placeHolder="'Nama Lengkap'" />
                            <InputBio :type="'text'" :modelValue="''" :nama="'alamatOrang1'" :placeHolder="'Alamat'" />
                            <InputBio :type="'number'" :modelValue="''" :nama="'telpOrang1'" :placeHolder="'081234567890'" />
                        </div>
                    </div>

                    <p class="font-bold">Orang Terdekat 2:</p>
                    <div class="flex">
                        <div class="text-right mr-2 w-2/12">
                            <p class="mt-2">Nama :</p>
                            <p class="mt-4">Alamat :</p>
                            <p class="mt-4">No. Telepon :</p>
                        </div>
                        <div class="text-left w-9/12">
                            <InputBio :type="'text'" :modelValue="''" :nama="'fullnameOrang2'" :placeHolder="'Nama Lengkap'" />
                            <InputBio :type="'text'" :modelValue="''" :nama="'alamatOrang2'" :placeHolder="'Alamat'" />
                            <InputBio :type="'number'" :modelValue="''" :nama="'telpOrang2'" :placeHolder="'081234567890'" />
                        </div>
                    </div>
                </div>
            </div>

            <p class="font-bold mt-10 mb-20">Bahwa segala biodata yang saya isi di atas adalah benar adanya. </p>
            <div class="flex justify-end font-bold">
                <div>
                    <div class="flex mb-2">
                        <input type="text" name="" id="" class="text-black w-36 inline-block px-3 py-1 rounded-xl text-center outline-none" placeholder="Kota">
                        <span class="ml-1 mr-2">, </span>
                        <input type="text" name="" id="" class="text-black w-36 inline-block px-3 py-1 rounded-xl text-center outline-none" placeholder="Tanggal Bulan">
                        <span class="ml-2 mr-1">20</span>
                        <input type="text" name="" id="" class="text-black w-10 inline-block px-3 py-1 rounded-xl text-center outline-none" placeholder="22">
                    </div>
                    <p class="mb-2 text-center">Pelamar,</p>
                    <div class="text-center">
                        <img :src="url" alt="" id="imgSoal" class="h-32 w-32 mb-2 inline-block">
                    </div>
                    <div class="text-center mb-2">
                        <input type="file" name="imgSign" id="files" class="hidden" @change="signChange">
                        <label for="files" class="bg-primary-500 ring ring-inset hover:bg-primary-700 hover:ring-primary-300 
                                                    duration-200 rounded-xl py-1 px-5">Upload Tanda Tangan</label>
                    </div>
                    <div class="text-center">
                        <input type="text" name="" id="" class="text-black w-1/2 inline-block px-3 py-1 my-1 rounded-xl text-center outline-none" placeholder="Nama Lengkap">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import InputBio from '../components/input.vue'
import TextArea from '../components/textarea.vue'
import Radio from '../components/radiobutton.vue'
export default {
    components: {
        InputBio, TextArea, Radio
    },
    data(){
        return{
            url: null
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
    },
    mounted() {
        $('#menikah').on("click", function() { $('#sudahMenikah').removeClass('hidden'); });
        $('#belumMenikah').on("click", function() { $('#sudahMenikah').addClass('hidden'); });

        $('#kecelakaanYa').on("click", function() { $('#sakitKeras2').removeClass('hidden'); });
        $('#kecelakaanTidak').on("click", function() { $('#sakitKeras2').addClass('hidden'); });
        
        $('#kenalanYa').on("click", function() { $('#adaKenalan').removeClass('hidden'); });
        $('#kenalanTidak').on("click", function() { $('#adaKenalan').addClass('hidden'); });
        
    },
}
</script>

<style>

</style>