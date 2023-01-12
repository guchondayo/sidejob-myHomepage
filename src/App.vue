<template>
  <div id="app">
    <Header :name=headerTopic></Header>
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'

export default {
  name: 'App',
  data:function(){
    return {
      corporation:"株式会社　谷口",
      // headerTopic:"お問い合わせ"
      headerTopic:{contact:"お問い合わせ",aboutUs:"私たちの活動",diary:"プログラミング日記",result:"開発実績"},
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
