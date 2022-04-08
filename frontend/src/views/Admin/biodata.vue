<template>
    <div class="w-9/12 h-full m-auto text-white relative flex flex-col flex-grow pb-3 overflow-hidden">
        <div method="" action="" autocomplete="off" class="bg-foreground-3-500 w-full h-full rounded-xl text-black overflow-y-auto no-scrollbar py-5 px-5">
            <div class="flex justify-between">
                <h1 class="text-3xl font-bold mb-2">Biodata</h1>
                <button class="bg-foreground-4-100 hover:bg-foreground-4-200 text-white px-3 py-1 rounded-full" @click="this.$router.push({path: '/dashboard'})">
                    <i class="fa fa-chevron-left mr-2 text-xl"></i>
                    <span class="font-bold text-xl">Kembali</span>
                </button>
            </div>
            <div class="flex mb-5">
                <div class="mr-2 font-bold">
                    <p class="mt-2">1. </p>
                    <p class="mt-4" v-for="i in 7" :key="i">{{i+1}}. </p>
                </div>
                <div class="w-6/12 ml-2 flex">
                    <div class="font-bold">
                        <p class="mt-2">NAMA LENGKAP</p>
                        <p class="mt-4">NAMA PANGGILAN</p>
                        <p class="mt-4">ALAMAT DI KTP</p>
                        <p class="mt-4">ALAMAT SEKARANG</p>
                        <p class="mt-4">TELEPON/HP</p>
                        <p class="mt-4">TEMPAT & TGL LAHIR</p>
                        <p class="mt-4">KEWARGANEGARAAN</p>
                        <p class="mt-4">SUKU</p>
                    </div>
                    <div class="mx-2 font-bold">
                        <p class="mt-2">:</p>
                        <p class="mt-4" v-for="i in 7" :key="i">:</p>
                    </div>
                    <div>
                        <p class="mt-2">NAMA LENGKAP :</p>
                        <p class="mt-4">NAMA PANGGILAN :</p>
                        <p class="mt-4">ALAMAT DI KTP :</p>
                        <p class="mt-4">ALAMAT SEKARANG :</p>
                        <p class="mt-4">TELEPON/HP :</p>
                        <p class="mt-4">TEMPAT & TGL LAHIR :</p>
                        <p class="mt-4">KEWARGANEGARAAN :</p>
                        <p class="mt-4">SUKU :</p>
                    </div>
                </div>

                
                <div class="mr-2 font-bold">
                    <p class="mt-2">9. </p>
                    <p class="mt-4" v-for="i in 7" :key="i">{{i+9}}. </p>
                </div>
                <div class="w-6/12 mr-10 ml-2 flex">
                    <div class="font-bold">
                        <p class="mt-2">AGAMA</p>
                        <p class="mt-4">USIA</p>
                        <p class="mt-4">TINGGI BADAN</p>
                        <p class="mt-4">BERAT BADAN</p>
                        <p class="mt-4">NO KTP / SIM / PASPOR</p>
                        <p class="mt-4">GOLONGAN DARAH</p>
                        <p class="mt-4">NO NPWP</p>
                        <p class="mt-4">E-MAIL</p>
                    </div>
                    <div class="mx-2 font-bold">
                        <p class="mt-2">:</p>
                        <p class="mt-4" v-for="i in 7" :key="i">:</p>
                    </div>
                    <div>
                        <p class="mt-2">AGAMA</p>
                        <p class="mt-4">USIA</p>
                        <p class="mt-4">TINGGI BADAN</p>
                        <p class="mt-4">BERAT BADAN</p>
                        <p class="mt-4">NO KTP / SIM / PASPOR</p>
                        <p class="mt-4">GOLONGAN DARAH</p>
                        <p class="mt-4">NO NPWP</p>
                        <p class="mt-4">E-MAIL</p>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <div class="w-full flex">
                    <p class="mr-2 font-bold">17.</p>
                    <div class="w-1/2">
                        <div class="mr-4 flex gap-2">
                            <p class="mb-1 font-bold">Keadaan Kesehatan pada saat ini : </p>
                            <p>Baik</p>
                        </div>
                        <div class="mt-2 flex gap-2">
                            <p id="sakitKeras" class="mb-1 font-bold">Apakah anda pernah sakit keras/kecelakaan?</p>
                            <p>Ya, 2 bulan yang lalu</p>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <div>
                            <div class="flex gap-2">
                                <p class="font-bold">Apakah ada cacat tubuh? </p>
                                <p> Tidak</p>
                            </div>
                            <p class="mb-1 text-gray-400 italic">(Misal: penglihatan / pendengaran / pengucapan / jantung / dll.)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-2">
                <div class="flex w-full">
                    <p class="mr-2 font-bold">18.</p>
                    <div>
                        <div class="flex w-full gap-2">
                            <p class="mb-1 font-bold">Apakah anda belum menikah/menikah? </p>
                            <p>Sudah Menikah</p>
                        </div>
                        <div class="flex gap-2">
                            <div class="font-bold">
                                <p class="mt-2">Nama Suami/Istri</p>
                                <p class="mt-2">Nama Anak</p>
                            </div>
                            <div>
                                <p class="mt-2" v-for="i in 2" :key="i">:</p>
                            </div>
                            <div>
                                <p class="mt-2">Rahasia</p>
                                <p class="mt-2">Gaada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mb-2">
                <div class="flex mb-2 font-bold">
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
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-1 font-bold">
                    <p class="mr-2">20.</p>
                    <p>Mengapa Anda ingin bekerja di perusahaan kami? Jelaskan secara singkat:</p>
                </div>
                <div class="ml-7">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sunt vero unde suscipit quas expedita? Totam suscipit maxime eos? Quod accusantium, quia aut magnam est iste ducimus modi aliquid earum?                
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2 font-bold">
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
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2 font-bold">
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
                </div>
                <div class="ml-7">
                    <p class="font-bold mb-1 mt-3">Apabila Anda pernah bekerja di tempat lain coba sebutkan gaji yang anda peroleh? </p>
                    <p class="mb-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, a at facere ipsa iusto voluptate nulla iure maiores nam neque maxime, consectetur consequatur minima eum explicabo recusandae sed fugiat architecto.
                    </p>

                    <p class="mb-1 font-bold">Mengapa Anda berhenti dari pekerjaan yang lama, jelaskan secara singkat:</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident deleniti, voluptates perferendis voluptate aspernatur illum eaque quae, praesentium veniam molestias eligendi vitae possimus dolor nihil necessitatibus numquam similique dolores?
                    </p>
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2 font-bold">
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
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2 font-bold">
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
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-2 font-bold">
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
                </div>
            </div>

            <div class="mb-2">
                <div class="flex">
                    <p class="mr-2 font-bold">26.</p>
                    <p class="font-bold mr-2">Berapa lama Anda harus memberitahu pada perusahaan lama untuk berhenti bekerja :</p>
                    <p>1 bulan sebelumnya</p>
                </div>
                <div class="ml-7">
                    <div class="mt-2 flex gap-2">
                        <p class="font-bold">Dan mulai kapan Anda dapat mulai bekerja jika Anda di terima di PT. Adiputro Wirasejati :</p>
                        <p>Minggu depan</p>
                    </div>

                    <div class="mt-2 flex gap-2">
                        <p class="mb-1 font-bold">Apakah Anda memiliki saudara / kenalan di perusahaan ini: </p>
                        <p>Ya</p>
                    </div>
                    
                    <div>
                        <p class="font-bold">Bila YA, Sebutkan:</p>
                        <div class="flex gap-2">
                            <div class="font-bold">
                                <p class="mt-1">Nama</p>
                                <p class="mt-1">Alamat</p>
                                <p class="mt-1">Jabatan</p>
                            </div>
                            <div class="font-bold">
                                <p class="mt-1" v-for="i in 3" :key="i">:</p>
                            </div>
                            <div>
                                <p class="mt-1">Nama</p>
                                <p class="mt-1">Alamat</p>
                                <p class="mt-1">Jabatan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex mb-2 mr-3">
                <p class="mr-2 font-bold">27.</p>
                <div class="flex gap-2">
                    <p class="font-bold">Bersediakah Anda menjalani Pelatihan kerja  selama 6 (enam) bulan di PT. Adiputro Wirasejati: </p>
                    <p>Ya</p>
                </div>
            </div>

            <div class="mb-2">
                <div class="flex mb-1 font-bold">
                    <p class="mr-2">28.</p>
                    <p>Apakah tujuan Anda bekerja, Jelaskan: </p>
                </div>
                <div class="ml-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, harum. Aspernatur beatae quod, voluptatum officiis facilis eaque laudantium ducimus reiciendis blanditiis? Tempore doloremque amet nesciunt voluptatum eos, dicta nemo delectus?                 
                </div>
            </div>
            
            <div>
                <div class="flex font-bold">
                    <p class="mr-2">29.</p>
                    <p>Apakah anda memiliki kendaraan (sebutkan jenis kendaraan dan nomer kendaraan):</p>
                </div>
                <div class="ml-7 mb-2">
                    Mobil L 1234 AB                  
                </div>
            </div>

            <div>
                <div class="mb-2 ml-7 flex gap-2">
                    <p class="font-bold">Kendaraan tersebut milik :</p>
                    <p>Pribadi</p>
                </div>
            </div>

            <div class="mb-2">
                <div class="flex">
                    <p class="mr-2">30.</p>
                    <p>Apa Hobby Anda? </p>
                </div>
                <div class="ml-7">
                    membaca buku                
                </div>
            </div>

            <div class="mb-2">
                <div class="flex font-bold">
                    <p class="mr-2">31.</p>
                    <p>Apabila Anda diterima sebagai karyawan, gaji berapa yang Anda harapkan untuk tiap bulannya?</p>
                </div>
                <div class="ml-7">
                    20 juta                    
                </div>
            </div>

            <div class="mb-2">
                <div class="flex font-bold">
                    <p class="mr-2">32.</p>
                    <p>Apakah Anda pernah bermasalah dengan Hukum?</p>
                </div>
                <div class="ml-7">
                    pernah, saya nyolong keong                   
                </div>
            </div>

            <div class="mb-2">
                <div class="flex font-bold">
                    <p class="mr-2">33.</p>
                    <p>Apakah yang menjadi kelebihan dalam diri anda?</p>
                </div>
                <div class="ml-7">
                    Kelebihan beban hidup, pengen liburan  
                </div>
            </div>

            <div class="mb-2">
                <div class="flex font-bold">
                    <p class="mr-2">34.</p>
                    <p>Apakah yang menjadi kekurangan dalam diri anda?</p>
                </div>
                <div class="ml-7">
                    Kekurangan waktu bersantai                    
                </div>
            </div>

            <div class="mb-2">
                <div class="flex font-bold">
                    <p class="mr-2">35.</p>
                    <p>Apakah anda puas dengan keadaan diri anda saat ini? Jelaskan</p>
                </div>
                <div class="ml-7">
                    G                
                </div>
            </div>

            <div class="mb-2">
                <div class="flex font-bold">
                    <p class="mr-2">36.</p>
                    <p>Apakah anda mempunyai prestasi / penghargaan selama ini? Bila ada silahkan disebutkan (jenis, bidang, dan tahun)</p>
                </div>
                <div class="ml-7">
                    Bisa ganti galon, airnya ga tumpah                   
                </div>
            </div>

            <div class="mb-2">
                <div class="flex font-bold">
                    <p class="mr-2">37.</p>
                    <p>Adakah bidang seni yang Anda kuasai ? jika ada, sebutkan jenisnya (Musik, suara, dll)</p>
                </div>
                <div class="ml-7">
                    Ledakan            
                </div>
            </div>

            <div>
                <div class="flex font-bold">
                    <p class="mr-2">38.</p>
                    <p>Sebagai referensi, sebutkan 2 (dua) nama orang terdekat anda, beserta alamat dan telepon: </p>
                </div>
                <div class="ml-7">
                    <div class="flex gap-10 mb-2">
                        <div class="w-1/2">
                            <p class="font-bold">Orang Terdekat 1</p>
                            <div class="flex gap-2">
                                <div class="font-bold">
                                    <p>Nama</p>
                                    <p>Alamat</p>
                                    <p>No. Telepon</p>
                                </div>
                                <div class="font-bold">
                                    <p v-for="i in 3" :key="i">:</p>
                                </div>
                                <div>
                                    <p>Nama</p>
                                    <p>Alamat</p>
                                    <p>No. Telepon</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <p class="font-bold">Orang Terdekat 2</p>
                            <div class="flex gap-2">
                                <div class="font-bold">
                                    <p>Nama</p>
                                    <p>Alamat</p>
                                    <p>No. Telepon</p>
                                </div>
                                <div class="font-bold">
                                    <p v-for="i in 3" :key="i">:</p>
                                </div>
                                <div>
                                    <p>Nama</p>
                                    <p>Alamat</p>
                                    <p>No. Telepon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p class="font-bold text-xl mt-10 mb-20">Bahwa segala biodata yang saya isi di atas adalah benar adanya. </p>
            <div class="flex justify-end font-bold">
                <div>
                    <div class="mb-2">
                        Malang, 20 Januari 2022
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
                    
                    <div class="text-center">
                        Widean Nagari
                    </div>
                </div>
            </div>
        </div>
        <div class="w-1 h-40"></div>
    </div>
</template>

<script>
// import InputBio from '../components/input.vue'
// import InputTable from '../components/table_input.vue'
// import TextArea from '../components/textarea.vue'
// import Radio from '../components/radiobutton.vue'
export default {
    components: {
        // InputBio, InputTable, TextArea, Radio
    },
    data(){
        return{
            judulHalaman: 'Biodata',
            url: null,
            fullname: "",
            sudahMenikah: false,
            sakitKeras: false,
            adaKenalan: false,
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
        aaa(){
            console.log(this.adaKenalan)
        }
    },
    mounted() {
        
    },
    created() {
        this.$emit('updateHeader', '')
    },
}
</script>

<style>

</style>