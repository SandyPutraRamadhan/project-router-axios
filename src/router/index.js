
import Jakarta from "../view/Jakarta.vue";
import Jabar from "../view/Jabar.vue";
import Jateng from "../view/Jateng.vue";
import Jatim from "../view/Jatim.vue";
import Bali from "../view/Bali.vue";
import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";


Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "LoginPage",
        component: Login
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: Register
    },
    {
        path: "/jakarta",
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