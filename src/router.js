import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from './pages/HomeComponent.vue';
//import SinglePost from './pages/SinglePost.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        // {
        //     path: '/blog/:slug',
        //     name: 'single-post',
        //     component: SinglePost
        // },
    ]
});

export { router };