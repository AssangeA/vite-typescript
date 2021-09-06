
<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<script  lang="ts">
import { ElConfigProvider } from "element-plus";
export default {
  name: "app",
  components: { [ElConfigProvider.name]: ElConfigProvider },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
