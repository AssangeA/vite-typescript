<template>
  <div :class="{ 'has-logo': showLogo }">
    <Logo v-if="showLogo == '1'" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        unique-opened
        :collapse-transition="false"
        mode="vertical"
        @select="menuSelect"
      >
        <sidebar-item
          v-for="route in routeStore.wholeRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
      /></el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang='ts'>
import {computed,defineComponent,ref,onBeforeMount} from "vue"
import {useRoute,useRouter} from "vue-router"
// import {userAppStoreHook} from "/@/store/modules/app"
import SidebarItem from "./SidebarItem.vue";
import Logo from "./Logo.vue";

export default defineComponent({
  name:"sidebar",
  components:{SidebarItem,Logo},
  setup(){

  }
}) ;
</script>

<style>
</style>