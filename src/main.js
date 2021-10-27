import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from"vue-router";
import App from "./App.vue";

const routes = [
    {path: "/",  name: "Home", component: () => import("./views/Home.vue")},
    {path: "/lists", name: "Lists",  component: () => import("./views/Lists.vue")},
    {path: "/counter", name: "Counter",  component: () => import("./views/Counter.vue")},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(router).mount('#app');
