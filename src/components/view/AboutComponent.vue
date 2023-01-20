<template>
    <main>
        <div class="container">
            <h1>{{ succeed }}</h1>
            <div class="picture-article">   
            </div>
        </div>
    </main>
</template>

<script>
  import greed from './greed'
  export default{
    data:function(){
        return {
            succeed:"企業理念",
            greed:greed
        }
    },
    props:{

    }
  }  
</script>

<style scoped>
    .picture-article{
        background-image: url(../../../public/aim.jpg);
        background-size: cover;
        width: 100%;
    }
    .container{
        width: 80%;
        padding:1%;
        min-height:1000px;
    }
    .article p{
        padding: 2% 10%;
    }
</style>
<!-- この、backgroundでWIDTHやSIZEを入れないとかアホ、 -->