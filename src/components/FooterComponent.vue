<template>
    <footer>
        <ul>
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
    footer ul li{
        color: aliceblue;
    }
</style>
