import { createApp } from "vue";
import "./style.css";
import Home from "./home.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(Home);

app.use(pinia)
app.use(ElementPlus);

app.mount("#app");
