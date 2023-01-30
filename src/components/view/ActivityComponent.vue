<template>
    <main>
        <h2></h2>
        <div class="showData">
            <div class="img" :class=isPic></div>
            <p>{{ isSen }}</p>
        </div>
        <ul class="image-container">
            <li  v-for="(value,key) in doc" :key="key"><div class="box" v-on:click="changePicture(key)"></div><p>{{ value }}</p></li>
            <!-- 重要わかったこと、V -FORは子要素にも適用される -->
        </ul>
    </main>
</template>
<script>
    // たくさん練習しましょう!
    // https://jsfiddle.net/guchon/fns6yq13/31/
    export default{
        data:function(){
            return {
                pic:["../../../public/pic1.jpg","../../../public/pic2.jpg","../../../public/pic3.jpg","../../../public/pic4.jpg","../../../public/pic5.jpg","../../../public/pic6.jpg"],
                doc:[],
                com1:"ガクチカや自己PRでボランティア経験について話す就活生は多く、「ボランティア経験はどのように伝えたら良いんだろう」「ボランティア経験のアピールで差別化する方法を知りたい」と選考でのアピール方法に悩む人も見かけます。",
                com2:"ボランティア経験はそれだけで評価につながるわけではありません。大切なのは、学びまでアピールすることです。学びを適切にアピールできないと、かえって薄っぺらい印象を与える場合もあります。",
                com3:"この記事では、キャリアアドバイザーの鈴木さん、早川さん、渡部さん、岩﨑さんのアドバイスを交えつつ、ボランティア経験で学んだことの回答方法を解説していきます。周りと差別化できるアピール方法をぜひ実践してみてください",
                com4:"企業のコーポレート・シチズンシップ活動の一環として寄付活動を行うことはごく当たり前のことであり、何も珍しいことではない。日本ファンドレイジング協会発行の「寄付白書2015」によれば、2013年度の日本における法人寄付の総額は6986億円、総法人数の16.2％である41万以上の法人が寄付支出を行っている(*1)。そんな中、日本オラクルも今年初めて法人寄付という形で、「寄付金」の提供を5つの非営利団体に行った（発表資料はこちら）。",
                com5:"オラクルでは、世界各国におけるコミュニティ支援の取り組みとして、長年にわたり寄付活動を行っている。2013年度から2014年度にかけては、教育振興、環境保護、雇用機会拡大、地域社会を豊かにする活動に取り組む多数のNPOに、2100万米ドルを寄付した。",
                com6:"日本オラクルでも、地域に根ざした継続的なコーポレート・シチズンシップ活動を行っている。本社所在地である港区の青山・表参道エリアの商店街が協力して行う「青山まつり」でのロビー・コンサートや、小・中・高校生向けにコンピュータの開発言語Javaを用いたプログラミング教室を実施するほか、自社のダイバーシティ推進ワーキンググループ活動、社内ボランティアの定例ミーティング開催など、地域貢献、教育支援、ダイバーシティ推進、人材育成など、幅広く展開している。",
                isPic:"firstPic",
                isSen:""            
            }
        },
        created:function(){
            this.doc.push(this.com1)
            this.doc.push(this.com2)
            this.doc.push(this.com3)
            this.doc.push(this.com4)
            this.doc.push(this.com5)
            this.doc.push(this.com6)
            //うまく繰り返せない
            this.isSen=this.com1 
        },
        methods:{
            changePicture(num){
                switch(num){
                   case 0:
                    this.isPic = "firstPic";
                    this.isSen=this.doc[0]
                    break;
                   case 1:
                    this.isPic = "secondPic";
                    this.isSen=this.doc[1]
                    break;
                   case 2:
                    this.isPic = "thirdPic";
                    this.isSen=this.doc[2]
                    break;
                   case 3:
                    this.isPic = "forthPic";
                    this.isSen=this.doc[3]
                    break;
                   case 4:
                    this.isPic = "fifthPic";
                    this.isSen=this.doc[4]
                    break;
                   case 5:
                    this.isPic = "sixthPic";
                    this.isSen=this.doc[5]
                    break;

                }
            }
        }
    }
</script>
<style scoped>
    .img{
        min-height: 500px;
        background-size: cover;
        max-width:100%;
        margin: 5%;
    }
    .firstPic{
        background-image: url("../../../public/pic1.jpg");
    }
    .secondPic{
        background-image: url("../../../public/pic2.jpg");
    }
    .thirdPic{
        background-image: url("../../../public/pic3.jpg");
    }
    .forthPic{
        background-image: url("../../../public/pic1.jpg");
    }
    .fifthPic{
        background-image: url("../../../public/pic2.jpg");
    }
    .sixthPic{
        background-image: url("../../../public/pic3.jpg");
    }

    main{
        width:70%;
        margin: 0px auto;
    }
    .box{
        background-color:yellow;
        width: 300px;
        height: 300px;
    }
    .image-container{
        /* これがないと折り返さないよ */
        display: flex;
        flex-flow: row wrap;
        
        justify-content:space-between;
        margin: top 10px;;
        padding:0;
    }
    .image-container li{
        flex:0 0 19%;
        margin-bottom:19px;
        border: 1px solid #dadada;
    }
    @media screen and ( max-width:800px ){
        main{
        width:100%;
        min-height: 200px;
        margin: 0px auto;
    }
        .image-container{
            flex-flow: column;
        }
        .box{
            width:100%;
        }
        .img{
            background-size: contain;
        }

    }
</style>
