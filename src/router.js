
import Vue from "vue"
import Router from "vue-router"
// import App from './App.vue'
import Contact from "./components/view/ContactForm"
import About from "./components/view/AboutComponent"

import Activity from "./components/view/ActivityComponent"
import Diary from "./components/view/ProgrammingComponent"
import Top from "./components/TopPage"
Vue.use(Router)

let router = new Router({
    routes: [
      { path: '/', component: Top },
      { path: '/contact', component: Contact },
      { path: '/about', component: About },
      { path: '/Activity', component: Activity },
      { path: '/diary', component: Diary },
    ]
})

export default router

// ①ルーターはexportしなければならない
// ②バージョンが3.5.2を使わないと、エラーになる
// https://qiita.com/minicoopers0716/items/745b1109dc756fb72edb
