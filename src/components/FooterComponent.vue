<template>
    <footer>
        <p>サイトマップ</p>
        <ul class="site-map">
            <li v-for="(value, key) in name" :key="key">{{ value }}</li>
        </ul>
        <ul>
            
        </ul>
    </footer>
</template>
<script>
    export default{
        props:{
            name: {
                type: Array, // String型に限定
            }
        }
    }

</script>

<style scoped>
    footer{
        height: 300px;
        background-color: black;

    }
    footer p{
        padding: 2%;
        text-align: center;
        color:white;
    }
    footer ul li{
        color: aliceblue;
    }
    .site-map{
        width:30%;
        padding-left: 50%;
    }
</style>
