<template>
    <div class="login" @submit.prevent="login">
        <form class="form">
        <h1>Login</h1>
            <label for="username">Username:</label>
            <input v-model="username" type="text" name="username"  class="input">
            <label for="password">Password:</label>
            <input v-model="password" type="text" name="password"  class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>
 <script>
    export default{
        data(){
            return {
                username: '',
                password: '',
            }
        },
        methods:{
            login(){
                window.user = this.username;
                const redirectPatch= this.$route.query.redirect || 'protected'
                //this.$router.push({name: 'Protected'});
                this.$router.push(redirectPatch);
            }
        }
    }
</script>
<style>
    @import '@/assets/main.css';
</style>