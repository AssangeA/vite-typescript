<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        :title="settings.title"
        class="sidebar-logo-link"
        to="/"
      >
        <i class="fa fa-optin-monster"></i>
        <h1 class="sidebar-title">{{ settings.title }}</h1>
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="settings.title"
        class="sidebar-logo-link"
        to="/"
      >
        <i class="fa fa-optin-monster"></i>
        <h1 class="sidebar-title">{{ settings.title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  collapse: { required: true },
});
console.log(props)
</script>