<template>
    <div class="home">
        <h1>All Destinations</h1>
        <button @click="trigerFailure">Trigger Navigation Failure</button>
        <div class="destinations">
            <router-link
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name:'Destination', params:{id: destination.id, slug: destination.slug}}"
            >
            <h2>{{destination.name}}</h2>
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            </router-link>
        </div>
    </div>
</template>
<script>
    import { isNavigationFailure, NavigationFailureType } from 'vue-router'
    import sourceData from '@/data.json'
    export default{
        data(){
            return{
                destinations: sourceData.destinations
            }
    },
    methods:{
        async trigerFailure(){
            const navigationFailure = await this.$router.push('/')
            if(isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)){
                console.log(navigationFailure.to)
                console.log(navigationFailure.to.fullPath)
            }else{

            }
        }
    }
    }
</script>