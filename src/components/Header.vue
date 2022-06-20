<template>
    <div id="nav">
      <router-link to="/">Travel App</router-link>
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/brazil">Brazil</router-link>
      <router-link to="/hawai">Hawaii</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/jamaica">Jamaica</router-link> -->
        <AppLink
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name:'Destination', params:{id: destination.id, slug: destination.slug}}"
            >
            {{destination.name}}
        </AppLink>
        <AppLink :to="{name: 'Protected'}">Dashboard</AppLink>
        <AppLink to="https://google.com">Google</AppLink>
    </div>
</template>
<script>
    import sourceData from '@/data.json'
    export default{
        data(){
            return{
                destinations: sourceData.destinations
            }
    }
    }
</script>
<style>
  #nav .active-link{
    color:#e6c002;
  }
</style>