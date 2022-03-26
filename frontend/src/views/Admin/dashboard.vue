<template>
    <div class="w-full text-center">
        <div class="flex justify-center gap-10 text-white">
            <div class="w-3/12 h-96 bg-foreground-4-200 rounded-xl shadow-xl ml-10 py-10 px-5">
                <i class="fa fa-user text-8xl"></i>
                <p class="font-bold text-3xl my-3">Master Registrant</p>
                <p class="font-bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt rerum perspiciatis possimus? 
                    Aliquid tempora quos consequatur explicabo perspiciatis. Qui cupiditate architecto
                </p>
            </div>
            <div class="w-3/12 h-96 bg-foreground-4-200 rounded-xl shadow-xl py-10 px-5">
                <i class="fa fa-tasks text-8xl"></i>
                <p class="font-bold text-3xl my-3">Master Test</p>
                <p class="font-bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt rerum perspiciatis possimus? 
                    Aliquid tempora quos consequatur explicabo perspiciatis. Qui cupiditate architecto
                </p>
            </div>
            <div class="w-3/12 h-96 bg-foreground-4-200 rounded-xl shadow-xl py-10 px-5">
                <i class="fas fa-calendar-alt text-8xl"></i>
                <p class="font-bold text-3xl my-3">Master Session</p>
                <p class="font-bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt rerum perspiciatis possimus? 
                    Aliquid tempora quos consequatur explicabo perspiciatis. Qui cupiditate architecto
                </p>
            </div>
            
            <div class="w-3/12 h-96 bg-foreground-4-200 rounded-xl shadow-xl mr-10 py-10 px-5">
                <i class="fa fa-users text-8xl"></i>
                <p class="font-bold text-3xl my-3">Master Recruitment</p>
                <p class="font-bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt rerum perspiciatis possimus? 
                    Aliquid tempora quos consequatur explicabo perspiciatis. Qui cupiditate architecto
                </p>
            </div>
        </div>
        <div class="w-11/12 h-96 bg-foreground-4-200 text-white rounded-xl shadow-xl inline-block relative top-10 py-5 px-5">
            <p class="font-bold text-3xl text-left">Some Kind of Graph</p>
        </div>
        
        <div class="w-1 h-64 relative top-10">
        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.$emit('updateHeader', 'Home')
    },
    methods: {

    },
    mounted(){
        
    }
}
</script>

<style>

</style>