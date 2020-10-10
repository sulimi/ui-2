import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Tabs from './components/Tabs.vue';
import Dialog from './components/Dialog.vue';
import Button from './components/Button.vue';
import Switch from './components/Switch.vue';
import Dochome from './components/Dochome.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory();
const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: '', component: Dochome},
        {path: 'intro', component: md('intro')},
        {path: 'install', component: md('install')},
        {path: 'get-started', component: md('getstared')},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'tabs', component: Tabs},
      ]
    },
  ]
});

export default router;