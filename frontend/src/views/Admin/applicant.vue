<template>
    <div class="z-10">
        <div class="w-9/12 h-full m-auto text-white relative mt-3 flex flex-col flex-grow pb-3 overflow-hidden">
            <form method="" action="" autocomplete="off" class="bg-foreground-3-500 w-full h-full rounded-xl text-black overflow-y-auto no-scrollbar py-5 px-5">
                <h1 class="text-3xl font-bold mb-2">Biodata</h1>
                <div class="flex mb-5">
                    <div class="w-6/12 flex gap-5">
                        <div class="font-bold">
                            <p class="mt-2">NAMA LENGKAP</p>
                            <p class="mt-2">NO KTP</p>
                            <p class="mt-2">TEMPAT & TGL LAHIR</p>
                            <p class="mt-2">JENIS KELAMIN</p>
                            <p class="mt-2">ALAMAT DOMISILI</p>
                        </div>
                        <div>
                            <p class="mt-2"><span class="font-bold">:</span> Widean Nagari</p>
                            <p class="mt-2"><span class="font-bold">:</span> 3578122201230123</p>
                            <p class="mt-2"><span class="font-bold">:</span> Surabaya, 16 Maret 2022</p>
                            <p class="mt-2"><span class="font-bold">:</span> Laki-Laki</p>
                            <p class="mt-2"><span class="font-bold">:</span> Jl. Jalan</p>
                        </div>
                    </div>

                    <div class="w-6/12 flex gap-5">
                        <div class="font-bold">
                            <p class="mt-2">USIA</p>
                            <p class="mt-2">STATUS PERKAWINAN</p>
                            <p class="mt-2">NO.TELEPON/HP</p>
                            <p class="mt-2">E-MAIL</p>
                            <p class="mt-2">POSISI YANG DILAMAR</p> 
                        </div>

                        <div>
                            <p class="mt-2"><span class="font-bold">:</span> 20 Tahun</p>
                            <p class="mt-2"><span class="font-bold">:</span> Belum kawin</p>
                            <p class="mt-2"><span class="font-bold">:</span> 0987654321</p>
                            <p class="mt-2"><span class="font-bold">:</span> contoh@example.com</p>
                            <p class="mt-2"><span class="font-bold">:</span> Boss</p> 
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <p class="font-bold mb-2">PENDIDIKAN TERAKHIR :</p>
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
                                <td class="border border-stroke-100">S1</td>
                                <td class="border border-stroke-100">Jual Tempe</td>
                                <td class="border border-stroke-100">Sekolah</td>                                
                                <td class="border border-stroke-100">Surabaya</td>
                                <td class="border border-stroke-100">2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="mb-2">
                    <p class="font-bold mb-2">LAMPIRAN :</p>

                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    data(){
        return{
            url: null,
            pendidikanCount: 3,
            month: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
        }
    },
    methods: {
        subPendidikanCount(){ if (this.pendidikanCount>1) this.pendidikanCount-- },
        getDate(){
            const today = new Date()
            const date = ('00'+today.getDate()).slice(-2) + " " + this.month[today.getMonth()] + " " + today.getFullYear()
            return date
        },
    },
    mounted() {
        
    },
    created(){
        this.$emit('updateHeader', 'Applicant Details')
    }
}
</script>

<style>

</style>