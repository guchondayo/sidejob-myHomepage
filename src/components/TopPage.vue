<template>
    <div :class="{test: isTest}">  
         
    </div>

</template>
<script>
    export default{
        data:function(){
            return{
                isTest:true
            }
        },
        mounted:function(){
            let count = 0
            let myImage = ["pic1.jpg", "pic2.jpg", "pic3.jpg"]
            setInterval(function(){
                if(count >= myImage.length){
                    count = 0;
                }
                count++;
            },2000)
                // https://mebee.info/2021/04/08/post-32646/
                // setintervalにthisを入れた時の入れた時のスコープ
                // img srcを使うと、、
                // https://ikatakos.com/pot/programming/web_development/javascript/vuejs/tips/img

                // https://xminatolog.com/post/773
        }
    }
</script>
<style>
    .test{
        background-image: url(../../public/pic2.jpg);
        background-size:cover;
        width: 100%;
        height: 400px;
    }
    .img-container{
        height:400px;
        width:100%;
        background-color: blue;
        margin: 0;
    }
    /* https://jajaaan.co.jp/web-production/frontend/css-background/ */
    /* v-bindを紐づける */
    /* https://johobase.com/vue-js-v-bind-directive-class/ */
    /* とりあえず */
    /* 1.img srcを使って切り替えることは可能 */
    /* 2.v-bindを使っても複数のclassを導入することは可能 */
</style>