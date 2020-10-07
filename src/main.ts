import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import One from './components/One.vue';
import Tow from './components/Tow.vue';


const history = createWebHashHistory();

const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: One},
    {path: '/xxx', component: Tow}
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
