import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import homeRouter from "./modules/home";
import remainingRouter from "./modules/remaining"; //静态路由

// https://cn.vitejs.dev/guide/features.html#glob-import
const modulesRoutes = import.meta.glob("/src/views/*/*/*.vue");

const constantRoutes: Array<any> = [
    homeRouter,
]

//按照路由中的meta下的rank升序排列
export const ascending = (arr:any) => {
    return arr.sort((a: any, b: any) => {
        return a?.meta?.rank - b?.meta.rank
    })
}

// 将静态路由导出
export const constantRoutesArr = ascending(constantRoutes).concat(...remainingRouter)