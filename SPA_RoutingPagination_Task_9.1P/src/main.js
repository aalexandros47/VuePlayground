import { createApp } from 'vue';
import App from './app.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import NameTest from './components/NameTest.vue';
import PostManagement from './components/PostManagement.vue';
import StudentMarks from './components/StudentMarks.vue';

const routes = [
  { path: '/', redirect: '/name-test' }, // Default path redirects to Name Test
  { path: '/name-test', component: NameTest },
  { path: '/post-management', component: PostManagement },
  { path: '/student-marks', component: StudentMarks },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
