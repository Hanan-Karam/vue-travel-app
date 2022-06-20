<template>
    <div>
        <GoBack/>
        <div v-if="destination" class="destination">
            <h1>{{destination.name}}</h1>
            <div class="destination-details">
                <img :src="`/images/${destination.image}`" alt="">
                <p>{{destination.description}}</p>
            </div>
        </div>
        <div class="experiences">
            <h2>Top Experiences In {{destination.name}}</h2>
            <div class="cards">
                <AppLink
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    :to="{name:'Experience.Show', params:{experienceSlug: experience.slug}}"
                >
                <Experience
                    :experience="experience"
                />
                </AppLink>
            </div>
            <router-view/>
        </div>
    </div>
</template>
<script>
    import sourceData from '@/data.json'
    import Experience from '@/components/Experience.vue'
    import GoBack from '@/components/GoBack.vue'
    export default{
        // data(){
        //     return{
        //         destination: null,
        //     }
        // },
        props:{
            id:{type:Number, required: true}
        },
        computed:{
            // destinationId(){
            //     return parseInt(this.$route.params.id)
            // },
            destination(){
                return sourceData.destinations.find(destination => destination.id === this.id)
            }
        },
        components:{
            Experience, GoBack,
        },
        // methods:{
        //    async getData(){
        //         const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
        //         this.destination = await response.json()
        //     },
        // },
       //async created(){
            // const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
            // this.destination = await response.json()
            //this.getData()
            // this.$watch(
            //     () => this.$route.params,
            // //    async () => {
            // //         const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
            // //         this.destination = await response.json()
            // //     }
            // this.getData
            // )
        //}

    }
    
</script>
<style>
    @import '@/assets/main.css';
</style>