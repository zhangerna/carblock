// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';



Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// 备注vue.use(i18n)放在new vue()前就解决了
Vue.use(VueI18n);
const i18n = new VueI18n({
	locale: localStorage.lang ? localStorage.lang : (navigator.language || navigator.userLanguage).indexOf('CN') >= 0 ? 'zh' : ((navigator.language || navigator.userLanguage).indexOf('en') >= 0 ? 'en' : 'zh'),
	messages: {
		'zh': require('@/common/lang/zh'),
		'en': require('@/common/lang/en')
	}
});

console.log(i18n);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
