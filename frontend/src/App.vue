<template>
  <div class="h-auto min-h-screen bg-primary-900">
    <header class="bg-primary-100 flex justify-between px-8 relative z-10">
      <div></div>
      <div>
        <img src="./assets/logo.png" alt="" class="h-16" @click="$router.push({path: '/'})">
      </div>
    </header>
    <router-view />
  </div>
</template>

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
