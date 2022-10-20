import { createApp } from "vue";
import "./css/base_reg.css";
import "./css/base.css";
import "./css/respon.css";

import App from "./App.vue";
import router from "./routes";

createApp(App).use(router).mount("#app");
