<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view v-slot="{Component}" name="SideBar" class="sidebar-view">
        <transition name="slide" mode="out-in">
          <Component :is="Component" :key="$route.path"></Component>
        </transition>
      </router-view>
      <!-- <router-view></router-view> -->
      <!-- <router-view :key="$route.path"></router-view> -->
      <router-view v-slot="{Component}" class="main-view">
        <transition name="slide" mode="out-in">
          <Component :is="Component" :key="$route.path"></Component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default{
  components:{
    Header,
  }
}

</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.container{
  display:flex;
}
.sidebar-view{
  width:20%;
}
.main-view{
  width:100%;
}
</style>
