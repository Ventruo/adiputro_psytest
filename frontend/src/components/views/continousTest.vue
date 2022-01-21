<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <div>
        <h1 class="text-2xl font-bold mt-3">Belum Diselesaikan</h1>
        <div class="carousel">
            <a class="carousel-item">
                <div class="w-64 h-64 bg-primary-600 text-white p-2 rounded-xl">
                    <div class="mb-1">
                    <i class="fas fa-file-alt mr-2"></i>
                    <span class="text-lg font-bold">Tes 1</span>
                    </div>
                    <hr class="mb-1">
                    <div class="p-2 flex content relative">
                        <div class="mr-2 inline-block">
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
                    <div class="text-center mt-2">
                        <button class="bg-primary-500 px-3 py-2 rounded-full">
                                        <i class="fa fa-check mr-2"></i>
                                        <span>Sudah Selesai</span>
                                        </button>
                    </div>
                </div>
            </a>

            <a class="carousel-item">
                <div class="w-64 h-64 bg-primary-600 text-white p-2 rounded-xl">
                    <div class="mb-1">
                    <i class="fas fa-file-alt mr-2"></i>
                    <span class="text-lg font-bold">Tes 2</span>
                    </div>
                    <hr class="mb-1">
                    <div class="p-2 flex content relative">
                        <div class="mr-2 inline-block">
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
                    <div class="text-center mt-2">
                        <button class="ring-2 ring-inset ring-white hover:bg-primary-800 hover:ring-primary-800 
                                        duration-200 px-3 py-2 rounded-full"
                                        @click="this.$router.push({path: '/preExam'})">Kerjakan Tes Ini</button>
                    </div>
                </div>
            </a>

            <a class="carousel-item" v-for="i in 5" :key="i">
                <div class="w-64 h-64 bg-primary-600 text-white p-2 rounded-xl">
                    <div class="mb-1">
                    <i class="fas fa-file-alt mr-2"></i>
                    <span class="text-lg font-bold">Tes {{i+2}}</span>
                    </div>
                    <hr class="mb-1">
                    <div class="p-2 flex content relative">
                        <div class="mr-2 inline-block">
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
                    <div class="text-center mt-2">
                        <button class="bg-primary-300 px-3 py-2 rounded-full">
                                        <i class="fa fa-lock mr-2"></i>
                                        <span>Kerjakan Tes Sebelumnya Terlebih Dahulu</span>
                        </button>
                    </div>
                </div>
            </a>
        </div>   
    </div>
</template>

<script>
export default {
  mounted() {
    $('.carousel').carousel();
  }
};
</script>

<style>

</style>