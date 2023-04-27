/*
 * @Author: 闫池
 * @email: 1847949884@qq.com
 * @Date: 2023-04-13 09:47:16
 * @LastEditors: 闫池
 * @LastEditTime: 2023-04-13 10:15:22
 * @FilePath: \vue-test-demo\types\global.d.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by 闫池, All Rights Reserved. 
 */
// * Menu
declare namespace Menu {
  interface MenuOptions {
    path: string;
    title: string;
    icon?: string;
    isLink?: string;
    close?: boolean;
    children?: MenuOptions[];
  }
}
declare type TabsOptions = Menu.MenuOptions & {};
// * Vite
declare type Recordable<T = any> = Record<string, T>;
declare interface ViteEnv {
  VITE_API_URL: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_GLOB_APP_TITLE: string;
  VITE_DROP_CONSOLE: boolean;
  VITE_PROXY_URL: string;
  VITE_BUILD_GZIP: boolean;
  VITE_REPORT: boolean;
}
