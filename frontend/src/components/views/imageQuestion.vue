<template>
    <div class="mb-2">
        <div class="flex">
            <p class="text-lg font-bold mb-2 mr-3">{{label}}</p>
            <div v-if="jenis === 'add'">
                <input type="file" name="imgSoal" id="" class="mb-2" @change="soalChange"> <br>
            </div>
        </div>
        <div class="text-center h-24">
            <img v-if="jenis === 'add'" :src="url" alt="" id="imgSoal" class="inline-block h-full">
            <img v-else src="src/assets/soal1.png" alt="" id="imgSoal" class="inline-block h-full">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        "label": { type: String, default: "" },
        "jenis": { type: String, default: "" },
        "urlSoal": { type: String, default: "" },
    },
    emits: ["updateUrl"],
    data() {
        return{
            url: this.urlSoal,
        }
    },
    methods: {
        soalChange(e){
            var input = e.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.url = e.target.result;
                }
                
                this.image=input.files[0];
                var updatedUrl = URL.createObjectURL(this.image);

                reader.readAsDataURL(input.files[0]);
                this.$emit('updateUrl', updatedUrl)
            }
        },
    },
}
</script>