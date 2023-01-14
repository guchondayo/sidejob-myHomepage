
import Vue from "vue"
import Router from "vue-router"
// import App from './App.vue'
import Contact from "./components/view/ContactForm"

Vue.use(Router)

let router = new Router({
    routes: [
      // { path: '/', component: App },
      { path: '/contact', component: Contact },
    ]
})

export default router

// ①ルーターはexportしなければならない
// ②バージョンが3.5.2を使わないと、エラーになる
// https://qiita.com/minicoopers0716/items/745b1109dc756fb72edb
