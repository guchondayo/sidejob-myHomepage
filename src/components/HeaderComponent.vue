<template>
    <header>
        <p>{{ name.contact }}</p>
    </header>
</template>
<script>
    export default{
        data:function(){
            return {
                a:"aaaa"
            }
        },
        props:{
            name: {
                type: Object, // String型に限定
            }
        }
    }
</script>


