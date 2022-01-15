<template>
    <div class="fixed top-0 inset-x-0 w-screen h-screen flex justify-center items-center">
        <div class="bg-primary-300 h-2/3 w-1/3 px-5 py-7 rounded-xl">
            <h1 class="text-2xl font-bold mb-3">Image Matching Test</h1>
            <div>
                <hr>
                <div class="my-1 p-2">
                    <p class="text-sm font-bold mb-1">Instruction : </p>
                    <p class="text-sm">
                        Diberikan sebuah pola yang terpisah, tugas anda adalah memilih salah satu gambar dari 5 pilihan 
                        (a, b, c, d, atau e) yang apabila pola yang terpisah digabungkan akan menghasilkan gambar tersebut! 
                    </p>
                </div>
                <hr class="mb-2">
                <div class="flex mb-2 p-2">
                    <div class="mr-2">
                        <i class="fas fa-file-alt"></i> <br>
                        <i class="fas fa-clock"></i> <br>
                        <i class="fa fa-check"></i> <br>
                    </div>
                    <div>
                        <p>20 Questions</p>
                        <p>6 Minutes</p>
                        <p>Multiple Choices (A - E)</p>
                    </div>
                </div>
                <div class="text-center bottom-5 w-full mt-5 text-right">
                    <button class="bg-primary-900 hover:bg-primary-100 hover:text-primary-900 
                            duration-300 text-xl font-bold rounded-xl w-1/3 py-2"
                            @click="this.$router.push({path: '/soalImage'})"> Start! </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>