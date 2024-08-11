import { createApp } from 'vue'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 

import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/dsthome/DSTFaringAPIHome.vue';
import BFM from './pages/bfmhome/BFMFareAPIHome.vue' 
import NDC from './pages/ndchome/NDCHome.vue';
import DST from './pages/learndst/LearnDST.vue';
import CheckBatchStatus from './pages/check-batch-status/check-batch-status.vue'
import AboutPage from './pages/AboutPage.vue';
import PrivacyPage from './pages/PrivacyPage.vue';
import TermPage from './pages/TermPage.vue';
import Learn from './pages/gdsknowledge/GDSArticlesHome.vue';

import PageNotFound from './pages/PageNotFound.vue';
import './index.scss';

const routes = [
    { path: '/', component: Home },
    { path: '/bfm', component: BFM },
    { path: '/ndc', component: NDC },
    { path: '/dst', component: DST },
    { path: '/check-batch-status', component: CheckBatchStatus },

    { path: '/learn', component: Learn },
    { path: '/:catchAll(.*)', component: PageNotFound }, // Catch-all for 404
    { path: '/about', component: AboutPage },
    { path: '/proxy', component: PrivacyPage },
    { path: '/terms', component: TermPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.use(
    Vue3Toastify
  );
app.mount('#app');

/*
createApp(App).mount('#app')
*/
