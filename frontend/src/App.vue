<template>
  <div class="h-auto min-h-screen flex flex-col">
    <div class="bg-background-100 h-screen w-full fixed top-0 left-0"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>
