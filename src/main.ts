import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/base.scss";
import "@/assets/styles/iconfont.scss";
import "vant/lib/index.css";
import "@/mock/index";

import { Tab, Tabs, Swipe, SwipeItem } from "vant";
const app = createApp(App);
app.use(Tab);
app.use(Tabs);
app.use(Swipe);
app.use(SwipeItem);
app.use(store).use(router).mount("#app");
