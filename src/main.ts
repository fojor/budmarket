import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as firebase from "firebase/app";

Vue.config.productionTip = false

const configOptions = {
    apiKey: "AIzaSyCevFrGZkNXgerhHB0XAzEzfOCL1-ZnC2w",
    authDomain: "budpoint-1a1dc.firebaseapp.com",
    databaseURL: "https://budpoint-1a1dc.firebaseio.com",
    projectId: "budpoint-1a1dc",
    storageBucket: "budpoint-1a1dc.appspot.com",
    messagingSenderId: "935880402628",
    appId: "1:935880402628:web:3f732ba5abef05e079cb91"
};

firebase.initializeApp(configOptions);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
