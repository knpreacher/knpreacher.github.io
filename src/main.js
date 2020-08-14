import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
//git subtree push --prefix dist origin gh-pages

new Vue({
    vuetify,
    data: {
        social: [
            ['instagram', 'https://www.instagram.com/knpreacher/'],
            ['vk', 'https://vk.com/knpreacher'],
            ['spotify', 'https://open.spotify.com/user/knpreacher'],
            ['github', 'https://github.com/knpreacher'],
            ['twitter', 'https://twitter.com/knpre'],
        ]
    },
    render: h => h(App)
}).$mount('#app');
