<template>
  <div id="app">
    <Header></Header>
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
      corporation:"株式会社　谷口"
    }
  },
  components: {
    Header,Footer
  }
}
</script>

<style>

</style>
