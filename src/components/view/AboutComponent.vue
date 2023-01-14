<template>
    <main>
        <div class="container">
            <h1>{{ succeed }}</h1>
            <div class="picture-article">
                <img src="../../../public/myPic.jpg" alt="画像">
                <div class="article">
                    <p>{{ greed }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
  import greed from './greed'
  export default{
    data:function(){
        return {
            succeed:"株式会社谷口とは",
            greed:greed
        }
    },
    props:{

    }
  }  
</script>

<style scoped>
    main{
        text-align: center;
    }
    .container{
        background-color: burlywood;
        width: 80%;
        margin:auto;
        padding:1%;
        min-height:1000px;
    }
    .article p{
        padding: 2% 10%;
    }
</style>