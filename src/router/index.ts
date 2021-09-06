import { createRouter,createWebHistory,RouteRecordRaw  } from "vue-router";

import homeRouter  from "./modules/home";

const history = createWebHistory();
const routes:Array<any>=[
    homeRouter,
]


const router= createRouter({
    history,
    routes,
})

export default router;