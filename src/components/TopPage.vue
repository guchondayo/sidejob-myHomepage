<template>
    <div class="top-image">    
    </div>
</template>
<script>
    export default{
        data:function(){
            return{
            }
        },
        mounted:function(){
            let count = 0
            let myImage = ["pic1.jpg", "pic2.jpg", "pic3.jpg"]
            setInterval(function(){
                console.log("ループ前の数字",count)
                console.log("image.length",myImage.length)
                if(count >= myImage.length){
                    count = 0;
                }
                console.log(myImage[count])
                count++;
                console.log("ループ後の数字",count)
            },2000)
                // https://mebee.info/2021/04/08/post-32646/
                // setintervalにthisを入れた時の入れた時のスコープ
        }
    }
</script>
<style>
    .top-image{
        background-image: url(../../public/pic1.jpg);
        background-size:cover ;
        min-height: 500px;
        margin: 0;
    }
    /* https://jajaaan.co.jp/web-production/frontend/css-background/ */
</style>