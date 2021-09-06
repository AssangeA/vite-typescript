<template>
  <div :class="calsses" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      @click="handleClickOutside(false)"
      class="drawer"
    >
      <!-- 侧边栏 -->
      <sidebar class="sidebar-container" v-if="!containerHiddenSideBar" />
      <div class="main-container">
        <div :class="{ 'fixed-header': fixedHeader }">
          <!-- 顶部导航栏 -->
          <navbar v-show="!containerHiddenSideBar" />
          <!-- tabs标签页 -->
          <tag>
            <span @click="onFullScreen">
              <fullScreen v-if="!containerHiddenSideBar" />
              <exitScreen v-else />
            </span>
          </tag>
        </div>
      </div>
      <!-- 主体内容 -->
      <app-main />
    </div>
    <!-- 系统设置 -->
    <setting />
  </div>
</template>

<script lang='ts'>
import {Navbar,Sidebar,AppMain,setting,tag} from './components'
import {ref,unref,reactive,computed,toRefs,watchEffect,onMounted,onBeforeMount,useCssModule} from 'vue'
import fullScreen from "/@/assets/svg/full_screen.svg";
import exitScreen from "/@/assets/svg/exit_screen.svg";
export default {
    name:'layout',
    components:{
        Navbar,
        Sidebar,
        AppMain,
        setting,
        tag,
        fullScreen,
        exitScreen,
    },
    setup(){
      
    }
};
</script>

<style lang="scss" scoped>
$sideBarWidth: 210px;
@mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}

.app-wrapper {
  @include clearfix;

  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}

.re-screen {
  margin-top: 12px;
}
</style>
