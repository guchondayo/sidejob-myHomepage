<template>
    <main>
        <div class="side-bar">
            <p class="like-btn side-btn"></p>
            <p class="save-btn  side-btn"></p>
        </div>
        <div class="wrapper">
            <div class="main-container" v-for="(value,key) in diary" :key="key">
                <h2>{{ value.title }}</h2>
                <h3>環境</h3>
                <div class="article-container">
                    {{ value.env }}
                </div>
                <h3>[概要]</h3>
                <div class="article-container">
                    {{ value.about }}
                </div>
                <h3>ぶつかったエラー</h3>
                <div class="article-container">
                    {{ value.err }}
                </div>
                <h3>やったこと</h3>
                <div class="article-container">
                    {{ value.act }}
                </div>
            </div>
        </div>
        <article>
            <div>広告1</div>
            <div>広告2</div>
            <ul class="btn-container" v-for="(value,key) in diary" :key="key">
                <li>{{ value.title }}</li>
            </ul>
        </article>
    </main>
</template>
<script>
    export default{
        data:function(){
            return{
                diary:[{title:"初めまして",env:"新年あけましておめでとうございます",about:"バックエンド側のエラー",err:"div",act:"こうやって解決いたしました"},{title:"この前はごめんね",env:"新年あけましておめでとうございます",about:"やっぱりわからん",err:"div",act:"こうやって解決いたしました"}]
            }
        }
    }
</script>
<style scoped>
    .btn-container li{
        background-color: aliceblue;
        width:80%;
        padding:2% 4%;
    }

    .article-container{
        min-height: 200px;
        
    }
    main{
        background-color: gray;
        display: flex;
        padding: 20px 0;
    }
    .main-container{
        border-radius: 1%;
        padding: 1% 2%;
    }
    .main-container h3{
        border-bottom: 0.5px solid gray;
        width: 90%;
    }
    article{
        width:20%;
    }
    article div{
        min-height:300px;
        width:80%;
        background-color: aliceblue;
        margin: 10px auto;
    }
    .side-bar{
        display: flex;
        flex-direction: column;
        width: 10%;
    }
    .side-btn{
        width: 120px;
        height: 150px;
        background-size: cover;
        margin: 10px;
    }
    .like-btn{
        background-image: url(../../../public/like.png);
    }
    .save-btn{
        background-image: url(../../../public/save.png);
    }
    /* flexboxの練習はしておいた方がいいね */
    .main-container{
        background-color: white;
        min-height: 1000px;
        margin-bottom:20px;
    }
    .wrapper{
        width: 70%;
    }

</style>