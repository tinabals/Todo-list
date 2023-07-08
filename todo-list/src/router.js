import {createRouter,createWebHistory} from 'vue-router'

import TodoApp from './pages/TodoApp.vue'


const router = createRouter({
   history :  createWebHistory(),
   routes : [
    {path: '/', component : TodoApp}
   ]
})



export default router