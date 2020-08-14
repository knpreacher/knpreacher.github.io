import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
//git subtree push --prefix dist origin gh-pages

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');
