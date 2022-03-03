<template>
    <!-- <div class="h-full w-9/12 m-auto bg-yellow-500 text-white relative">
      <div class="fixed top-0 inset-x-0 w-screen h-screen flex justify-center items-center">
          <div>
            <input type="text" name="" id="" placeholder="Input Test Code" class="text-black px-2 py-1 mb-2 rounded-lg w-96 h-10 text-center text-xl"> <br>
            <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 mr-2 h-16 w-28 text-base" @click="this.$router.push({path: '/preExam'})">Image Matching</button>
            <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 mr-2 h-16 w-28 text-base" @click="this.$router.push({path: '/masterImage'})">Master Image</button>
            <button class="bg-blue-600 hover:bg-blue-800 duration-200 rounded-full px-5 h-16 w-28 text-base" @click="this.$router.push({path: '/dashboard'})">Dashboard</button>
          </div>
      </div>
    </div> -->
    <div class="absolute top-0 z-0 w-full h-full flex justify-center items-center">
        <div class="w-1/2 h-3/4 flex rounded-xl overflow-hidden">
            <div class="w-5/12 h-full bg-foreground-4-100 flex justify-center items-center">
                <div class="text-center">
                   <img src="../assets/logo2.png" alt="" class="h-64 inline-block">
                   <!-- <img src="../assets/psychotest.png" alt=""> -->
                </div>
            </div>
            <div class="w-7/12 h-full bg-background-50 flex justify-center items-center">
                <div class="w-full h-auto text-center">
                    <h1 class="font-bold text-4xl">LOGIN</h1>
                    <form @submit.prevent="login" class="text-left px-5 mt-5">
                        <label for="userEmail">Email</label>
                        <input type="email" name="email" id="userEmail" class="w-full bg-background-300 ring-1 ring inset ring-stroke-100 placeholder-stroke 
                                    mt-1 mb-5 px-3 py-1.5 rounded-xl text-black" placeholder="Enter Your Email Here">

                        <label for="userToken">Test Token</label>
                        <input type="text" name="test_token" id="userToken" class="w-full bg-background-300 ring-1 ring inset ring-stroke-100 placeholder-stroke
                                    mt-1 px-3 py-1.5 rounded-xl text-black" placeholder="Enter Your Test Token Here">

                        <button type="submit" class="w-full mt-5 px-3 py-2 text-white font-bold bg-foreground-4-100 rounded-full ring-1 ring-inset ring-stroke
                                                    hover:bg-foreground-4-200 duration-300"
                                                    >Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    components: {
        axios
    },
    data(){
        return {
            judulHalaman: 'Login',
            info: null,
        }
    },
    methods: {
        login(submitEvent) {
            let elements = submitEvent.target.elements;

            (async() => {
                axios.post('/auth/login', {
                            email: elements.email.value,
                            test_token: elements.test_token.value
                        },
                        {
                            withCredentials: true
                        })
                .then((e) => {
                    if(e.response && e.response.status != 200){
                        Swal.fire({
                            title: e.response.data,
                            icon: 'error',
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'OK'
                        });
                    }else{
                        let {token, age} = e.data.refresh_token;
                        this.$cookies.set('refresh_token', token, age);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${e.data.token}`
                        
                        this.$router.push('/dashboard')
                    }
                });
            })();
        }
    },
    created(){
        this.$emit('updateJudul', this.judulHalaman);
    },
    mounted () {
        
    }
}
</script>