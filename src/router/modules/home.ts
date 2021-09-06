import Layout from '/@/layout/index.vue'

const homeRouter={
    path:'/',
    naem:"home",
    component:Layout,
    meta:{
        icon:"el-icon-s-home",
        showLink:true,
        savedPosition:false,
        rank:0
    },
    children:[
        {
            path:'/welcome',
            name:"welcom",
            component:()=>import("/@/views/welcome.vue"),
            meta:{
                title:"message.hshome",
                showLink:true,
                savedPostion:false
            }
        }
    ]
}

export default homeRouter