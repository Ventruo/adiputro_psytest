<template>
    <div class="w-9/12 h-full m-auto text-white relative mt-3 flex flex-col flex-grow pb-3 overflow-hidden">
        <div class="flex justify-between mb-7">
            <h1 class="text-white text-3xl text-center font-bold mt-2">Biodata</h1>
            <div class="flex justify-center">
                <img src="../assets/logo.png" alt="" class="w-20">
            </div>
        </div>
        
        <div class="mb-5">
            <button class="bg-secondary px-3 py-1 rounded-full text-black" @click="this.$router.push({path: '/dashboard'})">
                <i class="fa fa-chevron-left mr-2 text-xl"></i>
                <span class="font-bold text-xl">Back</span>
            </button>
        </div>

        <form method="" action="" autocomplete="off" class="bg-foreground-3-500 w-full h-full rounded-xl text-black overflow-y-auto no-scrollbar py-5 px-5">
            <h1 class="text-3xl font-bold mb-2">Biodata</h1>
            <div class="flex mb-5">
                <div class="mr-2">
                    <p class="mt-2">1. </p>
                    <p class="mt-16" v-for="i in 7" :key="i">{{i+1}}. </p>
                </div>
                <div class="w-6/12 mr-10">
                    <p class="mt-2">NAMA LENGKAP :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'fullname'" :placeHolder="'Nama Lengkap'" />

                    <p class="mt-4">NAMA PANGGILAN :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'nickname'" :placeHolder="'Nama Panggilan'" />

                    <p class="mt-4">ALAMAT DI KTP :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'alamat_KTP'" :placeHolder="'Alamat di KTP'" />

                    <p class="mt-4">ALAMAT SEKARANG :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'alamat_sekarang'" :placeHolder="'Alamat Sekarang'" />

                    <p class="mt-4">TELEPON/HP :</p>
                    <InputBio :type="'number'" :modelValue="''" :nama="'noTelp'" :placeHolder="'081234567890'" />

                    <p class="mt-4">TEMPAT & TGL LAHIR :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'ttl'" :placeHolder="'Malang / 22 Januari 2022'" />

                    <p class="mt-4">KEWARGANEGARAAN :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'kewarganegaraan'" :placeHolder="'Kewarganegaraan'" />

                    <p class="mt-4">SUKU :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'suku'" :placeHolder="'Suku'" />
                </div>

                
                <div class="mr-2">
                    <p class="mt-2">9. </p>
                    <p class="mt-16" v-for="i in 7" :key="i">{{i+9}}. </p>
                </div>
                <div class="w-6/12">
                    <p class="mt-2">AGAMA :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'agama'" :placeHolder="'Agama'" />

                    <p class="mt-4">USIA :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'usia'" :placeHolder="'20 Tahun'" />

                    <p class="mt-4">TINGGI BADAN :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'tinggi_badan'" :placeHolder="'150 cm'" />

                    <p class="mt-4">BERAT BADAN :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'berat_badan'" :placeHolder="'50 kg'" />

                    <p class="mt-4">NO KTP / SIM / PASPOR :</p>
                    <InputBio :type="'number'" :modelValue="''" :nama="'no_identitas'" :placeHolder="'0123456789'" />

                    <p class="mt-4">GOLONGAN DARAH :</p>
                    <InputBio :type="'text'" :modelValue="''" :nama="'golongan_darah'" :placeHolder="'A / B / AB / O'" />

                    <p class="mt-4">NO NPWP :</p>
                    <InputBio :type="'number'" :modelValue="''" :nama="'no_npwp'" :placeHolder="'01234567890'" />

                    <p class="mt-4">E-MAIL :</p>
                    <InputBio :type="'email'" :modelValue="''" :nama="'email'" :placeHolder="'contoh@example.com'" />
                </div>
            </div>
            <div class="mb-2">
                <div class="w-full flex">
                    <p class="mr-2">17.</p>
                    <div class="w-1/2">
                        <div class="mr-4">
                            <p class="mb-1">Keadaan Kesehatan pada saat ini : </p>
                        </div>
                        <div class="flex mb-1">
                            <div class="w-1/2"><Radio :values="'baik'" :names="'kesehatan'" :id="'kesehatanBaik'" :label="'BAIK'"/></div>
                            <div class="w-1/2"><Radio :values="'kurang sehat'" :names="'kesehatan'" :id="'kesehatanKurang'" :label="'KURANG SEHAT'"/></div>
                        </div>
                        
                        <div class="mt-10">
                            <p id="sakitKeras" class="mb-1">Apakah anda pernah sakit keras/kecelakaan?</p>
                        </div>
                        <div class="flex">
                            <div class="w-1/2"><Radio :values="'kecelakaanYa'" :names="'kecelakaan'" id="kecelakaanYa" :label="'YA'"/></div>
                            <div class="w-1/2"><Radio :values="'kecelakaanTidak'" :names="'kecelakaan'" id="kecelakaanTidak" :label="'TIDAK'"/></div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div >
                            <p>Apakah ada cacat tubuh? </p>
                            <p class="mb-1 text-gray-400 italic">(Misal: penglihatan / pendengaran / pengucapan / jantung / dll.)</p>
                        </div>
                        <div class="flex">
                            <div class="w-1/2"><Radio :values="'cacatYa'" :names="'cacatTubuh'" :id="'cacatYa'" :label="'YA'"/></div>
                            <div class="w-1/2"><Radio :values="'cacatTidak'" :names="'cacatTubuh'" :id="'cacatTidak'" :label="'TIDAK'"/></div>
                        </div>

                        <div class="hidden" id="sakitKeras2">
                            <div class="mt-2 w-1/3">
                                <p>Kapan Terjadinya:</p>
                            </div>
                            <InputBio :type="'text'" :modelValue="''" :nama="'waktuKecelakaan'" :placeHolder="''"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <div class="flex w-full">
                    <p class="mr-2">18.</p>
                    <div class="w-1/2">
                        <div class="mr-2">
                            <div class="flex w-full">
                                <p class="mb-1">Apakah anda belum menikah/menikah? </p>
                            </div>
                        </div>
                        
                        <div class="flex">
                            <div class="w-1/2"><Radio :values="'belum menikah'" :names="'menikah'" id="belumMenikah" :label="'BELUM MENIKAH'"/></div>
                            <div class="w-1/2"><Radio :values="'sudah menikah'" :names="'menikah'" id="menikah" :label="'SUDAH MENIKAH'"/></div>
                        </div>
                    </div>

                    <div class="w-1/2">
                        <div id="sudahMenikah" class="hidden">
                            <p>Nama Suami/Istri :</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'namaSuamiIstri'" :placeHolder="'Nama Suami/Istri'" />

                            <p class="mt-2">Nama Anak :</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'namaAnak'" :placeHolder="'Nama Anak'" />
                        </div>
                    </div>
                </div>

                
            </div>
            
            <div class="mb-2">
                <div class="flex mb-2">
                    <p class="mr-2">19.</p>
                    <p>PENDIDIKAN TERAKHIR</p>
                </div>
                <div class="ml-7">
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-2/12 border border-stroke-100">TINGKAT/GELAR</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">JURUSAN</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">NAMA SEKOLAH</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">KOTA</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">TAHUN KELULUSAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-3/12 border border-stroke-100">NAMA ORANG TUA</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">TEMPAT & TGL LAHIR</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">ALAMAT</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">PENDIDIKAN</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">PEKERJAAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="keluargaCount[0]++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
                                                </button>
                    </div>
                </div>

                <!-- istri/suami -->
                <div class="ml-7">
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-3/12 border border-stroke-100">NAMA ISTRI/SUAMI</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">TEMPAT & TGL LAHIR</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">ALAMAT</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">PENDIDIKAN</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">PEKERJAAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="keluargaCount[1]++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
                                                </button>
                    </div>
                </div>

                <!-- anak kandung -->
                <div class="ml-7">
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-3/12 border border-stroke-100">NAMA ANAK KANDUNG</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">TEMPAT & TGL LAHIR</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">ALAMAT</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">PENDIDIKAN</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">PEKERJAAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="keluargaCount[2]++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
                                                </button>
                    </div>
                </div>

                <!-- saudara kandung -->
                <div class="ml-7">
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-3/12 border border-stroke-100">NAMA SAUDARA KANDUNG</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">TEMPAT & TGL LAHIR</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">ALAMAT</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">PENDIDIKAN</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">PEKERJAAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="keluargaCount[3]++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
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
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-2/12 border border-stroke-100">DARI TGL/TAHUN</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">SAMPAI</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">NAMA PERUSAHAAN</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">KOTA</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">BID. USAHA</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">JABATAN/BAGIAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="riwayatCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
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
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-3/12 border border-stroke-100">MATERI</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">PENYELENGGARA</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">TAHUN</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">TEMPAT</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="trainingCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
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
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th class="font-semibold w-3/12 border border-stroke-100">ORGANISASI</th>
                                <th class="font-semibold w-3/12 border border-stroke-100">TEMPAT</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">MASA</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">JABATAN</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="organisasiCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
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
                    <table class="table-fixed border border-collapse border-stroke-100 w-full">
                        <thead class="bg-foreground-3-400 divide-y divide-stroke-100">
                            <tr>
                                <th rowspan="2" class="font-semibold w-3/12 border border-stroke-100">BAHASA</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">BERBICARA</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">MENDENGAR</th>
                                <th class="font-semibold w-2/12 border border-stroke-100">MENULIS</th>
                            </tr>
                            <tr>
                                <th class="font-normal text-sm w-3/12 border border-stroke-100">KURANG/CUKUP/BAIK</th>
                                <th class="font-normal text-sm w-2/12 border border-stroke-100">KURANG/CUKUP/BAIK</th>
                                <th class="font-normal text-sm w-2/12 border border-stroke-100">KURANG/CUKUP/BAIK</th>
                            </tr>
                        </thead>
                        <tbody class="bg-background-400 divide-y divide-stroke-100" id="user-table">
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
                                                    <span>Kurangi</span>
                                                </button>
                        <button @click.prevent="bahasaCount++" class="bg-green-800 text-white ring-2 ring-inset ring-primary-300 
                                                hover:bg-primary-200 hover:text-primary-900 duration-200 rounded-full h-auto w-auto 
                                                text-base px-5 py-1">
                                                <i class="fa fa-plus mr-1"></i>
                                                <span>Tambah</span>
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

                    <div class="mt-2">
                        <p class="mr-3 mb-1">Apakah Anda memiliki saudara / kenalan di perusahaan ini: </p>
                        <div class="flex w-1/2">
                            <div class="w-1/2"><Radio :values="'kenalanYa'" :names="'Kenalan'" :id="'kenalanYa'" :label="'YA'"/></div>
                            <div class="w-1/2"><Radio :values="'kenalanTidak'" :names="'Kenalan'" :id="'kenalanTidak'" :label="'TIDAK'"/></div>
                        </div>
                    </div>
                    
                    <div class="hidden" id="adaKenalan">
                        <p>Bila YA, Sebutkan:</p>
                        <div>
                            <p class="mt-1">Nama :</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'fullnameKenalan'" :placeHolder="'Nama Lengkap'" />
                            <p class="mt-1">Alamat :</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'alamatKenalan'" :placeHolder="'Alamat'" />
                            <p class="mt-1">Jabatan :</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'jabatanKenalan'" :placeHolder="'Jabatan'" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex mb-2 mr-3">
                <p class="mr-2">27.</p>
                <div>
                    <p>Bersediakah Anda menjalani Pelatihan kerja  selama 6 (enam) bulan di PT. Adiputro Wirasejati: </p>
                    <div class="flex w-1/2 mt-1">
                        <div class="w-1/2"><Radio :values="'pelatihanYa'" :names="'pelatihan'" :id="'pelatihanYa'" :label="'YA'"/></div>
                        <div class="w-1/2"><Radio :values="'pelatihanTidak'" :names="'pelatihan'" :id="'pelatihanTidak'" :label="'TIDAK'"/></div>
                    </div>
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
                <div class="mb-2 ml-7">
                    <p class="mr-3">Apakah kendaraan tersebut milik: </p>

                    <div class="flex w-1/2 mt-1">
                        <div class="w-1/4"><Radio :values="'Pribadi'" :names="'kendaraanMilik'" :id="'kendaraan_pribadi'" :label="'Pribadi'"/></div>
                        <div class="w-1/4"><Radio :values="'Orangtua'" :names="'kendaraanMilik'" :id="'kendaraan_Orang_Tua'" :label="'Orang Tua'"/></div>
                        <div class="w-1/4"><Radio :values="'Saudara'" :names="'kendaraanMilik'" :id="'kendaraan_Saudara'" :label="'Saudara'"/></div>
                        <div class="w-1/4"><Radio :values="'dll'" :names="'kendaraanMilik'" :id="'kendaraan_dll'" :label="'dan lain-lain'"/></div>
                    </div>
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
                    <div class="flex gap-10 mb-2">
                        <div class="w-1/2">
                            <p class="font-bold">Orang Terdekat 1</p>
                            <p>Nama</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'fullnameOrang1'" :placeHolder="'Nama Lengkap'" />
                            <p>Alamat</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'alamatOrang1'" :placeHolder="'Alamat'" />
                            <p>No. Telepon</p>
                            <InputBio :type="'number'" :modelValue="''" :nama="'telpOrang1'" :placeHolder="'081234567890'" />
                        </div>
                        <div class="w-1/2">
                            <p class="font-bold">Orang Terdekat 2</p>
                            <p>Nama</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'fullnameOrang2'" :placeHolder="'Nama Lengkap'" />
                            <p>Alamat</p>
                            <InputBio :type="'text'" :modelValue="''" :nama="'alamatOrang2'" :placeHolder="'Alamat'" />
                            <p>No. Telepon</p>
                            <InputBio :type="'number'" :modelValue="''" :nama="'telpOrang2'" :placeHolder="'081234567890'" />
                        </div>
                    </div>
                </div>
            </div>

            <p class="font-bold text-xl mt-10 mb-20">Bahwa segala biodata yang saya isi di atas adalah benar adanya. </p>
            <div class="flex justify-end font-bold">
                <div>
                    <div class="flex mb-2">
                        <input type="text" name="" id="" class="w-36 inline-block px-3 text-center outline-none bg-transparent border-b-2 border-stroke-100 placeholder-stroke-100" placeholder="Kota">
                        <p class="ml-1 mr-2 font-bold">, {{getDate()}}</p>
                    </div>
                    <p class="mb-2 text-center">Pelamar,</p>
                    <div class="text-center">
                        <img v-if="url!=null" :src="url" alt="" id="imgSoal" class="h-32 w-32 mb-2 inline-block">
                        <div v-else class="h-32 w-32 mb-2 inline-block bg-[#C4C4C4]">
                            <!-- <div class="flex justify-center items-center h-full">
                                <p>Tanda Tangan</p>
                            </div> -->
                        </div>
                    </div>
                    <div class="text-center mb-2">
                        <input type="file" name="imgSign" id="files" class="hidden" @change="signChange">
                        <label for="files" class="bg-foreground-3-300 ring-1 ring-inset ring-stroke-100 hover:bg-foreground-3-400
                                                    duration-200 rounded-xl py-1 px-5">Upload Tanda Tangan</label>
                    </div>
                    
                    <div class="text-center">
                        {{fullname}}
                    </div>
                </div>
            </div>

            <div class="mt-10 mb-5 flex justify-end">
                <button class="bg-safe text-white hover:bg-green-800 duration-200 rounded-full text-lg font-bold px-10 py-2">
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