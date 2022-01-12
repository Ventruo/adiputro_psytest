<template>
  <div class="h-auto min-h-screen bg-primary-700">
    <header class="bg-primary-300 flex justify-between px-8 mb-3">
      <div></div>
      <div>
        <img src="./assets/logo.png" alt="" class="h-16">
      </div>
    </header>
    <div class="h-full w-10/12 m-auto text-white relative">
      <router-view />
    </div>
  </div>
</template>
