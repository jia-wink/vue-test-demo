import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/inxex";

const app = createApp(App);

app.use(router);
// 路由准备完毕再挂载
router.isReady().then(() => app.mount("#app"));
