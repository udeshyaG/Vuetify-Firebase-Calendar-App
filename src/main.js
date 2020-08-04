import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextAreaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;
Vue.use(VueTextAreaAutosize);

firebase.initializeApp({
  apiKey: "AIzaSyAQ9EZ-wIikaFPXHq3hgh4WFAfknqq-c8k",
  authDomain: "vuetify-calendar-23a4b.firebaseapp.com",
  databaseURL: "https://vuetify-calendar-23a4b.firebaseio.com",
  projectId: "vuetify-calendar-23a4b",
  storageBucket: "vuetify-calendar-23a4b.appspot.com",
  messagingSenderId: "742918854506",
  appId: "1:742918854506:web:0725b8cf0e72924a31f713",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
