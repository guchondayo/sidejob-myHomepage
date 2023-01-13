<template>
    <header>
        <div class="top-header">
            <h1>{{ corporation }}</h1>
            <nav class="top-menu">
                <ul class="top-right-nav">
                    <li v-for="(value, key) in name" :key="key">{{ value }}</li>
                </ul>
            </nav>
        </div>
        <div class="bottom-header">
            <h1>{{ name.contact }}</h1>
        </div>
        
        
    </header>
</template>
<script>
    export default{
        data:function(){
            return {
            }
        },
        props:{
            name: {
                type: Array, // String型に限定
            },
            corporation:{
                type:String
            }
        }
    }
</script>

<style scoped>
    header{
        height: 300px;
    }

    .top-header{
        height:20%;
        background-color: aqua;
        padding: 0.5%;
        display: flex;
        justify-content: space-between;
    }
    .top-right-nav li{
        padding: 12px;
    }
    .top-right-nav{
        display: flex;
        justify-content: space-around;
        list-style:none
    }
</style>


