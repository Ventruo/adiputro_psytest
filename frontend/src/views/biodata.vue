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
            
            <div class="mb-2">
                <div class="flex mb-2">
                    <p class="mr-2">19.</p>
                    <p>PENDIDIKAN TERAKHIR</p>
                </div>
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th class="font-semibold w-2/12">TINGKAT/GELAR</th>
                                <th class="font-semibold w-2/12">JURUSAN</th>
                                <th class="font-semibold w-3/12">NAMA SEKOLAH</th>
                                <th class="font-semibold w-2/12">KOTA</th>
                                <th class="font-semibold w-2/12">TAHUN KELULUSAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in pendidikanCount" :key="i">
                                <InputTable :modelValue="''" :nama="'pendidikan[][tingkat]'" :placeHolder="'Tingkat / Gelar'" />
                                <InputTable :modelValue="''" :nama="'pendidikan[][jurusan]'" :placeHolder="'Jurusan'" />
                                <InputTable :modelValue="''" :nama="'pendidikan[][sekolah]'" :placeHolder="'Nama Sekolah'" />
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
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="pendidikanCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
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

            <div class="mb-2">
                <div class="flex mb-2">
                    <p class="mr-2">21.</p>
                    <p>KELUARGA</p>
                </div>

                <!-- orang tua -->
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th class="font-semibold w-3/12">NAMA ORANG TUA</th>
                                <th class="font-semibold w-3/12">TEMPAT & TGL LAHIR</th>
                                <th class="font-semibold w-3/12">ALAMAT</th>
                                <th class="font-semibold w-2/12">PENDIDIKAN</th>
                                <th class="font-semibold w-2/12">PEKERJAAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in keluargaCount[0]" :key="i">
                                <InputTable :modelValue="''" :nama="'orangTua[][nama]'" :placeHolder="'Nama'" />
                                <InputTable :modelValue="''" :nama="'orangTua[][ttl]'" :placeHolder="'Tempat & Tgl Lahir'" />
                                <InputTable :modelValue="''" :nama="'orangTua[][alamat]'" :placeHolder="'Alamat'" />
                                <InputTable :modelValue="''" :nama="'orangTua[][pendidikan]'" :placeHolder="'Pendidikan'" />
                                <InputTable :modelValue="''" :nama="'orangTua[][pekerjaan]'" :placeHolder="'Pekerjaan'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end my-2">
                        <button @click.prevent="subKeluargaCount(0)" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="keluargaCount[0]++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
                </div>

                <!-- istri/suami -->
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th class="font-semibold w-3/12">NAMA ISTRI/SUAMI</th>
                                <th class="font-semibold w-3/12">TEMPAT & TGL LAHIR</th>
                                <th class="font-semibold w-3/12">ALAMAT</th>
                                <th class="font-semibold w-2/12">PENDIDIKAN</th>
                                <th class="font-semibold w-2/12">PEKERJAAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in keluargaCount[1]" :key="i">
                                <InputTable :modelValue="''" :nama="'pasangan[][nama]'" :placeHolder="'Nama'" />
                                <InputTable :modelValue="''" :nama="'pasangan[][ttl]'" :placeHolder="'Tempat & Tgl Lahir'" />
                                <InputTable :modelValue="''" :nama="'pasangan[][alamat]'" :placeHolder="'Alamat'" />
                                <InputTable :modelValue="''" :nama="'pasangan[][pendidikan]'" :placeHolder="'Pendidikan'" />
                                <InputTable :modelValue="''" :nama="'pasangan[][pekerjaan]'" :placeHolder="'Pekerjaan'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end my-2">
                        <button @click.prevent="subKeluargaCount(1)" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="keluargaCount[1]++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
                </div>

                <!-- anak kandung -->
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th class="font-semibold w-3/12">NAMA ANAK KANDUNG</th>
                                <th class="font-semibold w-3/12">TEMPAT & TGL LAHIR</th>
                                <th class="font-semibold w-3/12">ALAMAT</th>
                                <th class="font-semibold w-2/12">PENDIDIKAN</th>
                                <th class="font-semibold w-2/12">PEKERJAAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in keluargaCount[2]" :key="i">
                                <InputTable :modelValue="''" :nama="'anak[][nama]'" :placeHolder="'Nama'" />
                                <InputTable :modelValue="''" :nama="'anak[][ttl]'" :placeHolder="'Tempat & Tgl Lahir'" />
                                <InputTable :modelValue="''" :nama="'anak[][alamat]'" :placeHolder="'Alamat'" />
                                <InputTable :modelValue="''" :nama="'anak[][pendidikan]'" :placeHolder="'Pendidikan'" />
                                <InputTable :modelValue="''" :nama="'anak[][pekerjaan]'" :placeHolder="'Pekerjaan'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end my-2">
                        <button @click.prevent="subKeluargaCount(2)" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="keluargaCount[2]++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
                </div>

                <!-- saudara kandung -->
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th class="font-semibold w-3/12">NAMA SAUDARA KANDUNG</th>
                                <th class="font-semibold w-3/12">TEMPAT & TGL LAHIR</th>
                                <th class="font-semibold w-3/12">ALAMAT</th>
                                <th class="font-semibold w-2/12">PENDIDIKAN</th>
                                <th class="font-semibold w-2/12">PEKERJAAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in keluargaCount[3]" :key="i">
                                <InputTable :modelValue="''" :nama="'saudara[][nama]'" :placeHolder="'Nama'" />
                                <InputTable :modelValue="''" :nama="'saudara[][ttl]'" :placeHolder="'Tempat & Tgl Lahir'" />
                                <InputTable :modelValue="''" :nama="'saudara[][alamat]'" :placeHolder="'Alamat'" />
                                <InputTable :modelValue="''" :nama="'saudara[][pendidikan]'" :placeHolder="'Pendidikan'" />
                                <InputTable :modelValue="''" :nama="'saudara[][pekerjaan]'" :placeHolder="'Pekerjaan'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end my-2">
                        <button @click.prevent="subKeluargaCount(3)" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="keluargaCount[3]++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2">
                    <p class="mr-2">22.</p>
                    <p>RIWAYAT PEKERJAAN DI TEMPAT LAIN:</p>
                </div>
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th class="font-semibold w-2/12">DARI TGL/TAHUN</th>
                                <th class="font-semibold w-2/12">SAMPAI</th>
                                <th class="font-semibold w-3/12">NAMA PERUSAHAAN</th>
                                <th class="font-semibold w-2/12">KOTA</th>
                                <th class="font-semibold w-2/12">BID. USAHA</th>
                                <th class="font-semibold w-2/12">JABATAN/BAGIAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in riwayatCount" :key="i">
                                <InputTable :modelValue="''" :nama="'riwayatKerja[][dari]'" :placeHolder="'Tgl/Tahun'" />
                                <InputTable :modelValue="''" :nama="'riwayatKerja[][sampai]'" :placeHolder="'Tgl/Tahun'" />
                                <InputTable :modelValue="''" :nama="'riwayatKerja[][perusahaan]'" :placeHolder="'Nama Perusahaan'" />
                                <InputTable :modelValue="''" :nama="'riwayatKerja[][kota]'" :placeHolder="'Kota'" />
                                <InputTable :modelValue="''" :nama="'riwayatKerja[][usaha]'" :placeHolder="'Bidang Usaha'" />
                                <InputTable :modelValue="''" :nama="'riwayatKerja[][jabatan]'" :placeHolder="'Jabatan/Bagian'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end mt-2">
                        <button @click.prevent="subRiwayatCount" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="riwayatCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
                </div>
                <div class="ml-7">
                    <p>Apabila Anda pernah bekerja di tempat lain coba sebutkan gaji yang anda peroleh? </p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'gajiPerusahaanLama'" :placeHolder="'Tulis disini'" />

                    <p class="mb-1">Mengapa Anda berhenti dari pekerjaan yang lama, jelaskan secara singkat:</p>
                    <TextArea :modelValue="''" :nama="'berhentiPekerjaanLama'" :placeHolder="'Tulis di sini'" />

                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2">
                    <p class="mr-2">23.</p>
                    <p>TRAINING / KURSUS  YANG PERNAH DI IKUTI:</p>
                </div>
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th class="font-semibold w-3/12">MATERI</th>
                                <th class="font-semibold w-3/12">PENYELENGGARA</th>
                                <th class="font-semibold w-2/12">TAHUN</th>
                                <th class="font-semibold w-2/12">TEMPAT</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in trainingCount" :key="i">
                                <InputTable :modelValue="''" :nama="'training[][materi]'" :placeHolder="'Materi'" />
                                <InputTable :modelValue="''" :nama="'training[][penyelenggara]'" :placeHolder="'Penyelenggara'" />
                                <InputTable :modelValue="''" :nama="'training[][tahun]'" :placeHolder="'Tahun'" />
                                <InputTable :modelValue="''" :nama="'training[][tempat]'" :placeHolder="'Tempat'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end mt-2">
                        <button @click.prevent="subTrainingCount" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="trainingCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2">
                    <p class="mr-2">24.</p>
                    <p>ORGANISASI YANG PERNAH DI IKUTI:</p>
                </div>
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th class="font-semibold w-3/12">ORGANISASI</th>
                                <th class="font-semibold w-3/12">TEMPAT</th>
                                <th class="font-semibold w-2/12">MASA</th>
                                <th class="font-semibold w-2/12">JABATAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in organisasiCount" :key="i">
                                <InputTable :modelValue="''" :nama="'organisasi[][organisasi]'" :placeHolder="'Organisasi'" />
                                <InputTable :modelValue="''" :nama="'organisasi[][tempat]'" :placeHolder="'Tempat'" />
                                <InputTable :modelValue="''" :nama="'organisasi[][masa]'" :placeHolder="'Masa'" />
                                <InputTable :modelValue="''" :nama="'organisasi[][jabatan]'" :placeHolder="'Jabatan'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end mt-2">
                        <button @click.prevent="subOrganisasiCount" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="organisasiCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2">
                    <p class="mr-2">25.</p>
                    <p>BAHASA YANG DIKUASAI:</p>
                </div>
                <div class="ml-7">
                    <table class="table-fixed border-collapse border border-primary-200 w-full">
                        <thead class="bg-primary-800 divide-y divide-primary-200">
                            <tr>
                                <th rowspan="2" class="font-semibold w-3/12">BAHASA</th>
                                <th class="font-semibold w-2/12">BERBICARA</th>
                                <th class="font-semibold w-2/12">MENDENGAR</th>
                                <th class="font-semibold w-2/12">MENULIS</th>
                            </tr>
                            <tr>
                                <th class="font-normal text-sm w-3/12">KURANG/CUKUP/BAIK</th>
                                <th class="font-normal text-sm w-2/12">KURANG/CUKUP/BAIK</th>
                                <th class="font-normal text-sm w-2/12">KURANG/CUKUP/BAIK</th>
                            </tr>
                        </thead>
                        <tbody class="bg-primary-600 divide-y divide-primary-500" id="user-table">
                            <tr class="text-center" v-for="i in bahasaCount" :key="i">
                                <InputTable :modelValue="''" :nama="'bahasa[][bahasa]'" :placeHolder="'Bahasa'" />
                                <InputTable :modelValue="''" :nama="'bahasa[][berbicara]'" :placeHolder="'Kurang / Cukup / Baik'" />
                                <InputTable :modelValue="''" :nama="'bahasa[][mendengar]'" :placeHolder="'Kurang / Cukup / Baik'" />
                                <InputTable :modelValue="''" :nama="'bahasa[][menulis]'" :placeHolder="'Kurang / Cukup / Baik'" />
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex gap-1 w-full justify-end mt-2">
                        <button @click.prevent="subBahasaCount" class="bg-red-600 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                    <i class="fa fa-minus mr-1"></i>
                                                    <span>Kurangi Baris</span>
                                                </button>
                        <button @click.prevent="bahasaCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah Baris</span>
                                                </button>
                    </div>
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

            <p class="font-bold text-xl mt-10 mb-20">Bahwa segala biodata yang saya isi di atas adalah benar adanya. </p>
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
                        <img v-if="url!=null" :src="url" alt="" id="imgSoal" class="h-32 w-32 mb-2 inline-block">
                        <div v-else class="h-32 w-32 mb-2 inline-block bg-primary-600">
                            <div class="flex justify-center items-center h-full">
                                <p>Tanda Tangan</p>
                            </div>
                        </div>
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

            <div class="mt-10 mb-5 flex justify-end">
                <button class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full text-lg px-10 py-2">
                                Submit
                                </button>
            </div>
        </form>
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
            pendidikanCount: 1,
            keluargaCount:[1,1,1,1],
            riwayatCount: 1,
            trainingCount: 1,
            organisasiCount: 1,
            bahasaCount: 1,
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