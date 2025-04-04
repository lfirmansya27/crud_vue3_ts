// import config routes
import { createApp } from "vue";

//import App adalah file utama yang berisi component App.vue
import App from "./App.vue";

// import config routes
// routes adalah file yang berisi routing pada vue
// routes adalah array dari RouteRecordRaw yang sudah didefinisikan sebelumnya
import routes from "./routes";

// Membuat variable App yang berisi instance dari createApp
// createApp adalah fungsi yang digunakan untuk membuat instance dari vue
const app = createApp(App);

// menggunakan "routes" di vue dengan plugin "use"
app.use(routes);

app.mount("#app");