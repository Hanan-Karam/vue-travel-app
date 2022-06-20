<template>
    <div class="avout">
        <h1>Hello, {{username}}</h1>
        <button @click="logout">Logout</button>
        <AppLink :to="{name: 'Invoices'}">
            <button>Invoices</button>
        </AppLink>
    </div>
</template>
<script>
export default{
    date(){
        return{
            username: window.user
        }
    },
    methods:{
        logout(){
            //window.user = null;
            //this.$router.push({name: 'Home'})
            this.$router.replace({name: 'Home', query:{logout: null}})
        }
    }
}
</script>