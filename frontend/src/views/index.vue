<template>
  <div class="fixed top-0 inset-x-0 w-screen h-screen flex justify-center items-center">
      <div>
        <input type="text" name="" id="" placeholder="Input Test Code" class="text-black px-2 py-1 mb-2 rounded-lg w-96 h-10 text-center text-xl"> <br>
        <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 mr-2 h-16 w-28 text-base" @click="this.$router.push({path: '/soalImage'})">Image Matching</button>
        <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 h-16 w-28 text-base" @click="this.$router.push({path: '/masterImage'})">Master Image</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>