import Vue from 'vue'
import store from './store'
import router from './router'

//Main pages
import App from './views/app.vue'

const app = new Vue({
    el: '#app',
    store,
    router,
    components: { App }
});

// router.replace('/1')