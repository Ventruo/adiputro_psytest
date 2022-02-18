<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <div>
            <div id="carouselFirst" class="carousel carousel-slider center mt-10">
                <div class="carousel-fixed-item center clearfix px-5">
                    <a id="carousel-prev" class="prev btn waves-effect blue white-text left">
                        <i class="fas fa-angle-left mr-2"></i>
                        <span>prev</span>
                    </a>
                    
                    <div class="text-xl inline-block center">
                        <!-- <button class="bg-primary-500 px-5 py-2.5 rounded-full">
                            <i class="fa fa-check mr-2"></i>
                            <span>Sudah Selesai</span>
                        </button> -->
                        
                        <!-- <button class="ring-2 ring-inset ring-white hover:bg-primary-200 hover:text-primary-900 hover:ring-primary-900 
                                    duration-300 px-5 py-2.5 rounded-full"
                                    @click="this.$router.push({path: '/preExam'})">Kerjakan Tes Ini</button> -->

                        
                        <!-- <button class="bg-primary-300 px-5 py-2.5 rounded-full">
                            <i class="fa fa-lock mr-2"></i>
                            <span>Kerjakan Tes Sebelumnya Terlebih Dahulu</span>
                        </button> -->
                    </div>
                    <a id="carousel-next" class="next btn waves-effect blue white-text right">
                        <span>next</span>
                        <i class="fas fa-angle-right ml-2"></i>
                    </a>
                </div>
                <div class="carousel-item even:bg-primary-800 odd:bg-primary-600 white-text h-96 text-center relative" v-for="(section, idx) in this.sectionList" :key="idx">
                    <div class="text-4xl mt-5 w-auto mb-2">
                        <i class="fas fa-file-alt mr-2"></i>
                        <span>Tes {{idx+1}}</span>
                    </div>
                    <div class="border-t-4 border-white w-1/2 inline-block"></div>
                    <br>
                    <div class="w-auto inline-block mt-3">
                        <div class="p-2 flex content relative">
                            <div class="text-2xl mr-3">
                                <i class="fas fa-file-alt"></i> <br>
                                <i class="fas fa-clock"></i> <br>
                                <i class="fa fa-check"></i> <br>
                            </div>
                            <div class="text-2xl text-left">
                                <div>{{section.question_num}} Questions</div>

                                <div>{{section.duration}} Minutes</div>
                                
                                <div v-if="section.type==1">Essay</div>
                                <div v-else-if="section.option_num==5">Multiple Choices (A - E)</div>
                                <div v-else-if="section.option_num==4">Multiple Choices (A - D)</div>
                                <div v-else-if="section.option_num==3">Multiple Choices (A - C)</div>
                                <div v-else-if="section.option_num==2">Multiple Choices (True or False)</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-xl mt-5">
                        <button class="ring-2 ring-inset ring-white hover:bg-primary-200 hover:text-primary-900 hover:ring-primary-900 
                                    duration-300 px-5 py-2.5 rounded-full"
                                    @click="this.$router.push({path: '/preExam'})">Kerjakan Tes Ini</button>
                    </div>
                </div>
            </div>
        <!-- <div class="carousel">
            <a class="carousel-item">
                <div class="w-64 h-64 bg-primary-800 text-white p-2 rounded-xl">
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
                <div class="w-64 h-64 bg-primary-800 text-white p-2 rounded-xl">
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
                    
                </div>
            </a>

            <a class="carousel-item" v-for="i in 5" :key="i">
                <div class="w-64 h-64 bg-primary-800 text-white p-2 rounded-xl">
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
        </div>    -->
    </div>
</template>

<script>
export default {
    props: {
        "sectionList": { type: Array, default: [], required: true },
    },
    mounted() {
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });

        $('.next').click(function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.carousel').carousel('next');
        });

        $('.prev').click(function(e){
                e.preventDefault();
                e.stopPropagation();
                $('.carousel').carousel('prev');
        });
    }
};
</script>

<style>

</style>