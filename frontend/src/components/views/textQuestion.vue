<template>
    <p class="text-lg font-bold mb-2 text-left">{{judul}}</p>
    <div class="mb-2 text-center rounded-xl bg-primary-600 p-3 my-5">
        <div v-if="jenis === 'add'">
            <input type="text" name="question" id="question" class="w-full px-3 py-1.5 rounded-xl text-center text-xl bg-transparent outline-none
                                                    placeholder-white border-none" placeholder="Enter Question Here"
                                                    @change="update">
        </div>
        <p v-else class="text-xl">{{question}}</p>
    </div>
</template>

<script>
export default {
    props: {
        "question": { default: "" },
        "judul": { type: String, default: '' },
        "jenis": { type: String, default: '' },
    },
    emits: ["updateQuestion"],
    methods: {
        update(){
            this.$emit('updateQuestion', $('#question').val())
        }
    },
}
</script>