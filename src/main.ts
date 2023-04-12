import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupRouter, router } from "./router";
import { setupStore } from "./store";

const app = createApp(App);
// 注册store
setupStore(app);
// 注册路由
setupRouter(app);
// 路由准备完毕再挂载
router.isReady().then(() => app.mount("#app"));
