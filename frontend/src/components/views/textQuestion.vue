<template>
    <div class="mb-2 text-center rounded-xl bg-primary-400 p-3 my-5">
        <p class="text-xl">{{question}}</p>
    </div>
</template>

<script>
export default {
    props: {
        "question": { default: "" },
    },
}
</script>