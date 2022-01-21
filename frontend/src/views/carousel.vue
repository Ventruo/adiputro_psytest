<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <div class="absolute top-0 z-0 w-full h-full flex text-white">
        <div class="h-64 w-full mt-16">
            <div class="carousel">
                <a class="carousel-item" href="#one!"><img src="../assets/1.png"></a>
                <a class="carousel-item" href="#two!"><img src="../assets/2.jpeg"></a>
                <a class="carousel-item" href="#three!"><img src="../assets/3.jpg"></a>
                <a class="carousel-item" href="#four!"><img src="../assets/4.jpg"></a>
                <a class="carousel-item" href="#five!"><img src="../assets/5.jpg"></a>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    $('.carousel').carousel();
  }
};
</script>

<style>

</style>