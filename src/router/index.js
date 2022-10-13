
import Jakarta from "../view/Jakarta.vue";
import Jabar from "../view/Jabar.vue";
import Jateng from "../view/Jateng.vue";
import Jatim from "../view/Jatim.vue";
import Bali from "../view/Bali.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "jakarta",
        component: Jakarta,
    },
    {
        path: "/jabar",
        name: "jabar",
        component: Jabar,
    },
    {
    path: "/jateng",
    name: "jateng",
    component: Jateng,
    },
    {
     path: "/jatim",
     name: "jatim",
     component: Jatim,
    },
    {
     path: "/bali",
     name: "bali",
     component: Bali,
    }
    
]
const router = new Router({
    routes,
    mode: "history",
});

export default router;