import {createRouter, createWebHistory} from 'vue-router';
import registerComponent from '../views/Register.vue';
import homeComponent from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: homeComponent
},{
    path: '/register',
    name: 'register',
    component: registerComponent
}]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;