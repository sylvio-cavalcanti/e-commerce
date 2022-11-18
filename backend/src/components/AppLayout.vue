<template>
  <div class="flex min-h-full">
    <!-- sidebar -->
    <SideBar/>
    <!-- sidebar -->
    
    <div class="flex-1">
      <header class="h-8 shadow bg-white"> Header </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
export default {
  components: { SideBar },
  name: "AppLayout",
  props: {
    title: {
      type: String,
      required: true
    }
  }

}
</script>

<style>

</style>