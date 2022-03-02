<template>
  <div class="h-auto min-h-screen bg-background-100 flex flex-col">
    <router-view />
    <div class="h-20 hidden" id="hidden-bottom"></div>
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
