import Vue from 'vue'
// import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'

// Vue.use(VueMoment, {
//     moment,
// })
import App from "./App.vue";
import router from "./router";
import store from "./store";

import excel from 'vue-excel-export'
import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css';

//vue-toast-notification

import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
//import 'vue-toast-notification/dist/theme-sugar.css';
 
Vue.use(VueToast);
// End vue-toast-notification

// import Toasted from 'vue-toasted';
 
// Vue.use(Toasted)

// Vue.toasted.register('my_app_error', 'Oops.. Something Went Wrong..', {
//   type : 'error',
//   icon : 'error_outline'
// })

// let options = {
  // type : 'success',
// };

// register the toast with the custom message
// Vue.toasted.register('my_app_error',
    // (payload) => {
        
        // if there is no message passed show default message
        // if(! payload.message) {
    	    // return "Oops.. Something Went Wrong.."
        // }
        
        // if there is a message show it with the message
        // return "Oops.. " + payload.message;
    // },
    // options
// )
// Vue.use(VueMoment, {
//     moment,
// })
// Vue.use(VModal)
// Vue.use(VModal, { dialog: true })

import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);

Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } })

Vue.use(excel)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
