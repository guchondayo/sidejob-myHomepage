<template>
    <main>
        <div class="wrapper">
            <div class="container">
                <h1 id="#first">{{ firstTitle }}</h1>
                <div class="picture-article">   
                </div>
                <div class="article">
                    <p>{{ CompanyName }}</p>
                </div>
            </div>
            <div class="container">
                <h1 id="second">{{ secondTitle }}</h1>
                <div class="picture-article" id="second">   
                </div>
                <div class="article">
                    <p>{{ greed }}</p>
                </div>
            </div>
        </div>
        <ul class=side-bar>
            <h4>MENU</h4>
            <li><a href="#first">{{ firstTitle }}</a></li>
            <li><a href="#second">{{ secondTitle }}</a></li>
        </ul>
    </main>
</template>

<script>
  import greed from './greed'
  import CompanyName from './CompanyName'
  export default{
    data:function(){
        return {
            firstTitle:"企業理念",
            secondTitle:"社長挨拶",
            greed:greed,
            CompanyName:CompanyName
        }
    },
    props:{

    }
  }  
</script>

<style scoped>
/* メインとサイドバー */
    main{
        display: flex;
    }
    .wrapper{
        width: 80%;
    }
    .side-bar{
        width: 20%;
        text-align: center;
        padding: 0 10px;
        /* 固定するかどうか */
        /* position:fixed;
        z-index: 10;
        top: 180px;
        right:0; */
    }
    
    .side-bar li{
        background-color: lightgrey;
        margin: 1%;
        position:relative;
    }    
    .side-bar li a{
        font-size: 24px;
    }
    .side-bar li :before{
        content: "";
        width:10px;
        height:100%;
        border-left: solid 6px #2d8fdd;/*左側の線*/
        position:absolute;
        top:0px;
        left:0px;
    }
    /* https://pisuke-code.com/css-why-not-work-after-and-before/ */
    /* ①親要素のpaddingはしておきましょう */


    .picture-article{
        background-image: url(../../../public/aim.jpg);
        background-size: cover;
        min-height:500px;
    } 

    .article p{
        padding: 2% 10%;
    } 
    /* レスポンシブ */
    @media screen and ( max-width:800px ){
        .side-bar{
            display: none;
        }
    }
    .container h1{
        padding:10px 20px;
    }
    main{
        width:100%;
    }
    .wrapper{
        width: 100%;
    }

</style>
<!-- この、backgroundでWIDTHやSIZEを入れないとかアホ、 -->

<!-- FLOATが苦手だったらこうする -->
<!-- https://developer.mozilla.org/ja/docs/Web/CSS/float -->
<!-- https://jsfiddle.net/guchon/d1hs2kgv/5/ -->
<!-- background使い方/フレックスボックスの練習をしっかりやろう -->
<!-- レスポンシブはそう難しくない -->
<!-- width/height→アイコンや、文字など、細かいチェック -->
<!-- %コンテナ/wrapperを中心にできるようにしておく -->
<!-- htmlの自分ルールを作ってみよう -->
