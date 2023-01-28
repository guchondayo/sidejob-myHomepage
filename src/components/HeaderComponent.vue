<template>
    <header>
        <div class="top-header-container">
            <div class="top-header">
                <h1>{{ corporation }}</h1>
                <div class="right-nav">
                    <router-link to="/contact" class="btn_04">{{ name[2]}}</router-link>
                    <div class="burger">
                        <input type="checkbox" id="box-btn" class="drawer_hidden">
                        <label for="box-btn" class="drawer_open"><span></span></label>
                        <nav class="nav_content">
                        <ul class="nav_list">
                        <h3 class="menu-tille">メニュー</h3>
                            <li><router-link to="/">{{ name[0]}}</router-link></li>
                            <li><router-link to="/about">{{ name[1]}}</router-link></li>
                            <li><router-link to="/activity">{{ name[3]}}</router-link></li>
                            <li><router-link to="/diary">{{ name[4]}}</router-link></li>
                            <li><router-link to="/contact">{{ name[2]}}</router-link></li>
                        </ul>
                    </nav>
                    </div>
                    <!-- メニュー -->
                    
                </div>
            </div>
            <nav>
                <ul class="top-right-nav">
                    <!-- <li v-for="(value, key) in name" :key="key">{{ value }}</li> -->
                    <li><router-link to="/">{{ name[0]}}</router-link></li>
                    <li><router-link to="/about">{{ name[1]}}</router-link></li>
                    <li><router-link to="/activity">{{ name[3]}}</router-link></li>
                    <li><router-link to="/diary">{{ name[4]}}</router-link></li>
                    <li><router-link to="/contact">{{ name[2]}}</router-link></li>
                </ul>
            </nav>
        </div>
        <div class="barnner">
            <p>{{ barner }}</p>
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
            },
            barner:{
                type:String
            }
        }
        }
</script>

<style scoped>
    .drawer_hidden{
        display: none;
    }
    .drawer_open {
        display: flex;
        height: 60px;
        width: 60px;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 100;/* 重なり順を一番上にする */
        cursor: pointer;
    }
    .burger span,.burger span::before,.burger span::after{
        display: block;
        content: "";
        width: 25px;
        height:3px;
        background-color: gray;
        position:absolute;
        transition: 0.5s;

    }
    .burger span::before{
       top:8px;
    }
    .burger span::after{
       bottom: 8px;
    }

    #box-btn:checked ~ .drawer_open span{
        background: rgba(255, 255, 255, 0);
    }
    #box-btn:checked ~ .drawer_open span::before{
        transform:rotate(45deg);
        bottom: 0;
    }
    #box-btn:checked ~ .drawer_open span::after{
        transform:rotate(-45deg);
        top:0;
    }
    /* メニューのデザイン*/
    .nav_content {
    width: 20%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 100%; /* メニューを画面の外に飛ばす */
    z-index: 99;
    background: white;
    border: 2px double grey;
    transition: .5s;
    }
    /* アイコンがクリックされたらメニューを表示 */
    #box-btn:checked ~ .nav_content {
    left:80%;
    }

    header{
        margin: 0;
        padding: 0;
    }
    .top-header-container{
        min-height:100px;
        background-image:linear-gradient(to left top, white, red);
        padding: 0.5%;
    }
    .top-header{
        display: flex;
        justify-content: space-between;
        padding: 1% 2%;
    }
    .top-header h1{
        background-color:yellow;
    }

    .top-right-nav li{
        padding: 12px;
        font-weight: bold;
    }

    .top-right-nav{
        display: flex;
        justify-content: space-around;
        margin: 0 0 0 auto;
        width: 50%;
    }
    /* 右寄せの方法、widthとmarginを指定! */
    /* https://1-notes.com/css-animation-iteration-count/ */
    /* ヘッダーのマイルール */
    /* ＊同列で左右→flex */
    /* ＊単純に右にしたいmarginを使った右寄せの法則 */
    .right-nav{
        display: flex;
    }
    ul{
        list-style:none;
    }
    li a {
        text-decoration: none;
        position:relative;
        color:black;
    }
    /* https://hakenblog.com/css-hover-underline-animation/ */
    li a:after{
        position: absolute;
        left: 0;
        content:'';
        width:0;
        height:2px;
        background: #000000;
        bottom:-3px;
        visibility: hidden;
    }
    li a:hover::after{
        visibility: visible;
        animation:0.5s 0s forwards underBar;
    }
    @keyframes underBar{
        from{
            bottom: -3px;
        }
        to{
            width: 100%;
        }
    }
    /* https://hakenblog.com/css-hover-underline-animation/ */
    .barnner{
        min-height:50px;
        background-color: blue;
        position: relative;
    }
    /* positionを使うときは、長さも考慮しておくこと */
    .barnner p{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        animation: 5s 0s infinite barner;
        color: azure;
        font: bold;
    }
    /* top/transform */
    /* https://arts-factory.net/position/ */
    /* overfrowがうまくいかなかったのでopacity:0;で誤魔化しました */
    @keyframes barner {
        0%{
            left: 0;
        }
        80%{
            opacity: 0;
        }
        100%{
            left: 120%;
        }
    }

    /* ボタン */
    /* https://excellent.ne.jp/homepage/6562/ */
    a.btn_04 {
	display: block;
	text-align: center;
	vertical-align: middle;
	text-decoration: none;
	width: 120px;
	margin: auto;
	padding: 1rem 4rem;
	font-weight: bold;
	border: 2px solid #27acd9;
	background: #27acd9;
	color: #fff;
	border-radius: 100vh;
	transition: 0.5s;
    }
    a.btn_04:hover {
        color: #27acd9;
        background: #fff;
    }

    .menu-tille{
        width:80%;
        padding: 3%;
        text-align: center;
        border: 2px double grey;
    }
    .nav_list li{
        padding:2%
    }


</style>


