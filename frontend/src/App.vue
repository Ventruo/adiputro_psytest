<template>
  <div class="h-auto min-h-screen bg-primary-1000">
    <header class="bg-primary-300 flex justify-between px-8 relative z-10">
      <div class="flex items-center">
        <p class="text-2xl font-bold text-primary-900">{{judulHalaman}}</p>
      </div>
      <div>
        <img src="./assets/logo.png" alt="" class="h-16" @click="$router.push({path: '/'})">
      </div>
    </header>
    <router-view />
    <!-- @updateJudul="updateJudul" -->
  </div>
</template>
<script>
export default {
    data(){
        return{
            judulHalaman: ''
        }
    },
    methods: {
        updateJudul(judul){
            this.judulHalaman = judul
        }
    },
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
