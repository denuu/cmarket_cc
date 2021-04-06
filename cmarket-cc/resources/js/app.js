import Vue from 'vue'
import store from './store'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

//Main pages
import App from './views/app.vue'

const app = new Vue({
    el: '#app',
    store,
    router,
    components: { App }
});