import { createApp } from 'vue';
import App from './App.vue';
import utils from './utils';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import zhCN from './assets/zh-CN.json'
import enUS from './assets/en-US.json'

import { createI18n } from 'vue-i18n';



const i18n = createI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  },
});

const app = createApp(App);

app.use(ElementPlus);
app.use(i18n);
app.config.globalProperties.utils = utils;

app.use(router);
app.mount('#app');

