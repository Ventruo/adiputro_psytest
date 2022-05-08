<template>
    <div class="w-full flex justify-center">
        <div class="w-5/6 h-full">
            <div class="flex justify-center gap-10 text-white text-center">
                <router-link to="/admin/registrant" class="w-3/12 h-96 bg-foreground-4-200 rounded-xl shadow-xl  py-10 px-5">
                    <i class="fa fa-user text-8xl"></i>
                    <p class="font-bold text-3xl my-3">Master Registrant</p>
                    <p class="font-bold">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo sunt rerum perspiciatis possimus?
                    </p>
                </router-link>
                <router-link to="/admin/test" class="w-3/12 h-96 bg-foreground-4-200 rounded-xl shadow-xl py-10 px-5">
                    <i class="fa fa-tasks text-8xl"></i>
                    <p class="font-bold text-3xl my-3">Master Tes</p>
                    <p class="font-bold">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam sint soluta eaque possimus error quis
                    </p>
                </router-link>
                <router-link to="/admin/session" class="w-3/12 h-96 bg-foreground-4-200 rounded-xl shadow-xl py-10 px-5">
                    <i class="fas fa-calendar-alt text-8xl"></i>
                    <p class="font-bold text-3xl my-3">Master Sesi</p>
                    <p class="font-bold">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis odio repudiandae, fugit aliquam odit
                    </p>
                </router-link>
                
                <router-link to="/admin/recruitment" class="w-3/12 h-96 bg-foreground-4-200 rounded-xl shadow-xl py-10 px-5">
                    <i class="fa fa-users text-8xl"></i>
                    <p class="font-bold text-3xl my-3">Master Rekrutmen</p>
                    <p class="font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita sapiente accusamus temporibus
                    </p>
                </router-link>
            </div>

            <div class="w-full h-96 bg-foreground-4-200 text-white rounded-xl shadow-xl inline-block relative top-10 py-5 px-5">
                <p class="font-bold text-3xl text-left">Some Kind of Graph</p>
            </div>
            
            <div class="w-1 h-64 relative top-10">
            
            </div>
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