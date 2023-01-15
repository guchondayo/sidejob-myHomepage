<template>
  <div id="app">
    <Header :name=headerTopic :corporation=corporation></Header>
    <!-- ↓こいつが必要 -->
    <router-view />    
    <Footer :name=headerTopic :corporation=corporation></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import 'normalize.css'

export default {
  name: 'App',
  data:function(){
    return {
      corporation:"株式会社　谷口",
      // headerTopic:"お問い合わせ"
      headerTopic:["株式会社谷口とは","お問い合わせ","私たちの活動","プログラミング日記","開発実績"],
      // footerTopic:{contact:"お問い合わせ",aboutUs:"私たちの活動",diary:"プログラミング日記",result:"開発実績"}
    }
  },
  components: {
    Header,Footer
  }
}
</script>

<style>
  

</style>
