import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { setupStore } from './store'

import { useElementPlus } from "../src/plugins/element-plus";
// 导入公共样式
import "./style/index.scss";
// 导入字体图标
import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";
import axios from "axios";
// 响应式storage
import Storage from "responsive-storage";
const app = createApp(App)
app.use(Storage, {
    // 默认显示首页tag
    routesInStorage: {
        type: Array,
        default: Storage.getData(undefined, "routesInStorage") ?? [
            {
                path: "/welcome",
                meta: {
                    title: "message.hshome",
                    icon: "el-icon-s-home",
                    showLink: true,
                    savedPosition: false
                }
            }
        ]
    },
})




export const getServerConfig = async():Promise<any>=>{
    return axios({
        baseURL:"",
        method:"get",
        url:process.env.NODE_ENV === "production"
        ? "/manages/serverConfig.json"
        : "/serverConfig.json"
    })
}

getServerConfig().then(async()=>{
    setupStore(app);
    app.use(router).use(useElementPlus)
    await router.isReady()
    app.mount("#app")
})