<template>
    <div :class="imgSrc">  
         
    </div>

</template>
<script>
    export default{
        data:function(){
            return{
                imgSrc:["img-container"]
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
        }
    }
</script>
<style>
    .img-container{
        height:400px;
        width:100%;
        background-color: blue;
        margin: 0;
    }
    .top-image{
        /* background-image: url(../../public/pic1.jpg); */
        /* background-size:cover ; */
        object-fit: cover;
        width: 100%;
        height: auto;
        
        margin: 0;
    }
    /* https://jajaaan.co.jp/web-production/frontend/css-background/ */
</style>