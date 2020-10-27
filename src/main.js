import Vue from "vue";
import App from "./App.vue";
import './../node_modules/bulma/css/bulma.css';
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false;

Vue.use(Vuelidate)

new Vue({
  render: h => h(App)
}).$mount("#app");
