import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// const { resolve } = require("path");

const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名，可以使用@/资源路径
    alias: {
      "@": resolve("./src"),
      // "#": resolve('./')
    },
  },
  // 开发服务器配置
  server: {
    // 监听的地址 0.0.0.0和true表示监听所有地址（局域网和公网）
    host: "0.0.0.0",
    // 监听的端口
    port: 7788,
    // 设置为true，端口被占用时不会自动寻找下一个可用端口
    strictPort: false,
    // 是否开启https
    https: false,
    // 项目运行时是否自动打开浏览器(也可设置为路径)
    open: true,
    // 默认允许使用任何源
    cors: true,
    // 设置反向代理/跨域
    proxy: {
      //
    },
  },
});
