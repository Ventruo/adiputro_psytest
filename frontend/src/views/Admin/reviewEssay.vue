<template>
    <div class="absolute top-24 w-full text-center">
        <div class="inline-block w-9/12 mb-2">
            <div class="flex gap-2 justify-end">
                <button class="bg-primary-700 hover:bg-primary-900 duration-200 rounded-full px-5 h-8 w-20 text-base" @click.prevent="prevSoal">Prev</button>
                <button id="nextBtn" class="bg-primary-700 hover:bg-primary-900 duration-200 rounded-full px-5 h-8 w-20 text-base" @click.prevent="nextSoal">Next</button>
            </div>
        </div>

        <div class="relative w-9/12 mb-2 opacity-95 inline-block">
            <div class="h-8 bg-primary-800 ring-2 ring-inset ring-primary-400 rounded-xl"></div>    
            <div class="h-8 bg-primary-500 rounded-xl absolute top-0" id="progress" style="width: 0px;"></div>
            <div class="w-full text-center absolute top-0">
                <p class="text-center py-1">Soal {{noSoal}}/{{jumSoal}}</p> 
            </div>
        </div>
        <div class="bg-primary-800 text-xl rounded-xl h-auto w-9/12 px-3 py-3 mb-3 opacity-95 inline-block">
            <p class="font-bold text-left mb-3 text-xl">Question:</p>
            <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem facere magni cumque exercitationem perspiciatis voluptate, iste provident fuga quia, iusto fugiat at aliquam. Eaque ipsam neque provident corporis eveniet?</p>
        </div>
        <div class="bg-primary-600 rounded-xl h-auto w-9/12 px-3 py-3 opacity-95 inline-block">
            <p class="font-bold text-left mb-3 text-xl">Answer:</p>
            <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid architecto a ea repellendus sed obcaecati ut alias dignissimos blanditiis eos incidunt ad, mollitia unde illum veritatis autem repellat error.</p>
        </div>
        <div class="inline-block w-9/12 mt-5">
            <button class="bg-primary-800 text-white text-3xl ring-4 ring-inset ring-primary-800 hover:ring-primary-200
                            duration-200 rounded-full h-auto w-auto px-20 py-3 mr-5 relative" 
                @click.prevent="hasil[noSoal-1]='true'"> 
                <i class="fa fa-check mr-5"></i>
                <span>True</span>
                <i v-if="hasil[noSoal-1]==='true'" class="far fa-dot-circle fa-xs absolute right-5 top-1/2"></i>
            </button>
            
            <button class="bg-primary-600 text-white text-3xl ring-4 ring-inset ring-primary-600 hover:ring-primary-200
                            duration-200 rounded-full h-auto w-auto px-20 py-3 relative" 
                @click.prevent="hasil[noSoal-1]='false'"> 
                <i class="fa fa-times mr-5"></i>
                <span>False</span>
                <i v-if="hasil[noSoal-1]==='false'" class="far fa-dot-circle fa-xs absolute right-5 top-1/2"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            noSoal: 1,
            jumSoal: 5,
            hasil: []
        }
    },
    methods: {
        nextSoal(){
            console.log(this.hasil)
            if (this.noSoal<this.jumSoal){
                this.noSoal++
                // if(this.noSoal==this.jumSoal) $('#nextBtn').text('Finish')

                const elements = document.getElementById("progress")
                var interval = setInterval(frame, 50)
                var ctr = 0
                var tambahan = ((1/this.jumSoal)*100)/5
                function frame() {
                    var width = parseInt(elements.style.width.replace(/px/,""))+tambahan
                    if (ctr == 5) {
                        clearInterval(interval)
                    } else {
                        elements.style.width = width +'%'
                    }
                    ctr++
                }
            }else{
                var isi = 0
                this.hasil.forEach(e => { if (e != null) isi++; });
                if(isi!=this.jumSoal){
                    Swal.fire({
                        title: 'Periksa Dulu Semua Pertanyaan!',
                        icon: 'warning',
                        confirmButtonColor: '#d33',
                        confirmButtonText: 'Back'
                    })
                }else{
                    Swal.fire({
                        title: 'Submit This Task?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // this.submitHasil()
                            Swal.fire(
                                'Submitted!',
                                'Task Successfully Submitted.',
                                'success'
                            )
                            .then(function(){
                                window.location = '/admin/sessionDetail'
                            })
                        }
                    });
                }
            }
        },
        prevSoal(){
            if (this.noSoal>1){
                this.noSoal--
                if(this.noSoal<this.jumSoal) $('#nextBtn').text('Next')
                const elements = document.getElementById("progress")
                var interval = setInterval(frame, 50)
                var ctr = 0
                var tambahan = ((1/this.jumSoal)*100)/5
                function frame() {
                    var width = parseInt(elements.style.width.replace(/px/,""))-tambahan
                    if (ctr == 5) {
                        clearInterval(interval)
                    } else {
                        elements.style.width = width +'%'
                    }
                    ctr++
                }
            }
        },
        ready(){
            const elements = document.getElementById("progress")
            var interval = setInterval(frame, 50)
            var ctr = 0
            var tambahan = ((1/this.jumSoal)*100)/5
            function frame() {
                var width = parseInt(elements.style.width.replace(/px/,""))+tambahan
                if (ctr == 5) {
                    clearInterval(interval)
                } else {
                    elements.style.width = width +'%'
                }
                ctr++
            }

            this.hasil = Array(this.jumSoal)
        },
    },
    created(){
        this.$emit('updateHeader', 'Review Essay')
    },
    mounted() {
        this.ready()
    },
}
</script>

<style>

</style>