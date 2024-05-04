import { createRouter, createWebHashHistory } from 'vue-router';
import NameTest from '../components/NameTest.vue';
import PostManagement from '../components/PostManagement.vue';
import StudentMarks from '../components/StudentMarks.vue';

const routes = [
  { path: '/', component: NameTest },
  { path: '/posts', component: PostManagement },
  { path: '/marks', component: StudentMarks },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
