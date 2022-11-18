<template>
  <div class="w-[200px] bg-indigo-700 rounded-l-xl text-gray-300 p-4">
    <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/20 hover:text-gray-300 mb-2">
      <span class="mr-2">
        <HomeIcon class="w-5"/>
      </span>
      <span class="text-sm">
        Dashboard
      </span>
    </router-link>
    <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/20 hover:text-gray-300 mb-2">
      <span class="mr-2">
        <ShoppingCartIcon class="w-5"/>
      </span>
      <span class="text-sm">
        Products
      </span>
    </router-link>
    <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/20 hover:text-gray-300 mb-2">
      <span class="mr-2">
        <UserIcon class="w-5"/>
      </span>
      <span class="text-sm">
        Users
      </span>
    </router-link>
    <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/20 hover:text-gray-300 mb-2">
      <span class="mr-2">
        <ChartPieIcon class="w-5"/>
      </span>
      <span class="text-sm">
        Reports
      </span>
    </router-link>
  </div>
</template>

<script>
import {HomeIcon, ShoppingCartIcon, UserIcon, ChartPieIcon} from '@heroicons/vue/24/outline';

export default {
  name: "SideBar",
  components: {
    HomeIcon,
    ShoppingCartIcon,
    UserIcon,
    ChartPieIcon
  },
};
</script>

<style>
</style>

