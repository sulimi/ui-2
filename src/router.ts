import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Intro from './views/Intro.vue';
import Install from './views/Install.vue';
import GetStared from './views/GetStared.vue';
import Tabs from './components/Tabs.vue'
import Dialog from './components/Dialog.vue'
import Button from './components/Button.vue'
import Switch from './components/Switch.vue'
import Dochome from  './components/Dochome.vue'
const history = createWebHashHistory();

const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children:[
        {path: '', component: Dochome},
        {path: 'intro', component: Intro},
        {path: 'install', component: Install},
        {path: 'get-started', component: GetStared},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'tabs', component: Tabs},
      ]
    },
  ]
});

export default router