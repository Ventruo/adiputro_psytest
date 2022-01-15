<template>
    <div class="mb-2">
        <p class="text-lg font-bold mb-2">{{label}}</p>
        <div class="text-center h-24">
            <img src="src/assets/soal1.png" alt="" class="inline-block h-full">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        "label": { default: "" },
    },
}
</script>