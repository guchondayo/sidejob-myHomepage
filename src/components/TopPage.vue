<template>
    <!-- ①バインドをする -->
    <div :class=isTest>  
    </div>
</template>
<script>
    export default{
        data:function(){
            return{
                isTest:{firstImg:true,secondImg:false,thirdImg:false}
            }
        },
        mounted:function(){
            let count = 0
            //あらかじめ別の変数に代入しておく
            let me = this
            console.log(me)
            let objNum = Object.keys(me.isTest).length
            console.log(objNum)
            setInterval(function(){
                if(count >= objNum){
                    count = 0;
                }
                console.log(count)
                switch (count){  
                    case 0:
                        me.isTest = {firstImg:true,secondImg:false,thirdImg:false};
                    break
                    case 1:
                        me.isTest = {firstImg:false,secondImg:true,thirdImg:false};
                    break
                    case 2:
                        me.isTest = {firstImg:false,secondImg:false,thirdImg:true};
                }
                count++;
            },5000)
                // https://mebee.info/2021/04/08/post-32646/
                // setintervalにthisを入れた時の入れた時のスコープ
                // img srcを使うと、、
                // https://ikatakos.com/pot/programming/web_development/javascript/vuejs/tips/img

                // https://xminatolog.com/post/773

                // コールバック関数でthisを使って、Vueインスタンスに参照することができなかった
                // https://tadaken3.hatenablog.jp/entry/vue-scope-this
                // JavaScript オブジェクトの要素数を取得する
                // https://zukucode.com/2017/04/javascript-object-length.html
                // でもやっぱりダメ
        }
    }
</script>
<style>
    .firstImg{
        background-image: url(../../public/pic1.jpg);
        background-size:cover;
        width: 100%;
        height: 500px;

        animation: 1s 0s forwards firstFadein,1s 4s forwards firstFadeout;
    }

    @keyframes firstFadein {
        0% {
        transform: translateX(-1000px);
        opacity: 0;
        }

        100% {
        transform: translateX(0px);
        opacity: 1;
        }
    }

    @keyframes firstFadeout {
        0% {
        transform: translateX(0px);
        }

        100% {
        transform: translateX(1000px);
        opacity: 0;
        }
    }

    .secondImg{
        background-image: url(../../public/pic2.jpg);
        background-size:cover;
        width: 100%;
        height: 500px;

        animation: 1s 0s forwards secondFadein,1s 4s forwards secondFadeout;
    }

    @keyframes secondFadein {
        0% {
        transform: translateX(-1000px);
        opacity: 0;
        }

        100% {
        transform: translateX(0px);
        }
    }
    @keyframes secondFadeout {
        0% {
        transform: translateX(0px);
        }

        100% {
        transform: translateX(1000px);
        opacity: 0;
        }
    }

    .thirdImg{
        background-image: url(../../public/pic3.jpg);
        background-size:cover;
        width: 100%;
        height: 500px;

        animation: 1s 0s forwards thirdFadein,1s 4s forwards thirdFadeout;
    }


    @keyframes thirdFadein {
        0% {
        transform: translateX(-1000px);
        opacity: 0;
        }

        100% {
        transform: translateX(0px);
        opacity: 1;
        }
    }

    @keyframes thirdFadeout {
        0% {
        transform: translateX(0px);
        opacity: 1;
        }

        100% {
        transform: translateX(1000px);
        opacity: 0;
        }
    }





    /* https://jajaaan.co.jp/web-production/frontend/css-background/ */
    /* v-bindを紐づける */
    /* https://johobase.com/vue-js-v-bind-directive-class/ */
    /* とりあえず */
    /* 1.img srcを使って切り替えることは可能 */
    /* 2.v-bindを使っても複数のclassを導入することは可能 */

    /* アニメーションの終了時の状態が毎回元の形に戻ってしまって嫌だった */
    /* https://webdesignday.jp/inspiration/technique/css/5167/ */

    /* 同じキーフレームを設定しても、最初のやつしか設定できなかった */
    /* https://developer.mozilla.org/ja/docs/Web/CSS/animation-fill-mode */
    /* 一意じゃないとダメかなと思ったんだけど、そうではないみたいなので、後ろにつけた */

    /* 一旦完成をしたけど、悩みとしては、１つ目の画面遷移から時間がかかってしまう */
    /* コードがじょうちょu */

</style>