<template>
    <!-- ①バインドをする -->
    <div :class=isTest>  
    </div>
</template>
<script>
    export default{
        data:function(){
            return{
                isTest:{firstImg:false,secondImg:true,thirdImg:false}
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
            },1000)
                // https://mebee.info/2021/04/08/post-32646/
                // setintervalにthisを入れた時の入れた時のスコープ!
                // img srcを使うと、、
                // https://ikatakos.com/pot/programming/web_development/javascript/vuejs/tips/img

                // https://xminatolog.com/post/773

                // コールバック関数でthisを使って、Vueインスタンスに参照することができなかった
                // https://tadaken3.hatenablog.jp/entry/vue-scope-this
                // JavaScript オブジェクトの要素数を取得する
                // https://zukucode.com/2017/04/javascript-object-length.html
        }
    }
</script>
<style>
    .firstImg{
        background-image: url(../../public/pic1.jpg);
        background-size:cover;
        width: 100%;
        height: 400px;
    }
    .secondImg{
        background-image: url(../../public/pic2.jpg);
        background-size:cover;
        width: 100%;
        height: 400px;
    }
    .thirdImg{
        background-image: url(../../public/pic3.jpg);
        background-size:cover;
        width: 100%;
        height: 400px;
    }
    /* https://jajaaan.co.jp/web-production/frontend/css-background/ */
    /* v-bindを紐づける */
    /* https://johobase.com/vue-js-v-bind-directive-class/ */
    /* とりあえず */
    /* 1.img srcを使って切り替えることは可能 */
    /* 2.v-bindを使っても複数のclassを導入することは可能 */
</style>