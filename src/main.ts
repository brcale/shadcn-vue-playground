import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import axios from "axios";
import router from "./router/index";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.use(router);
app.mount("#app");
