<template>
    <main class="contact">
        <h2>お問い合わせ</h2>
        <form class="contact-form" method="post" action="">
            <table>
                <tr>
                    <th>お名前</th>
                    <td> 
                        <input v-model="name" placeholder="例)田中 太郎" /> 
                    <p class="error">{{ errors.name }}</p>
                    </td>
                </tr>
                <tr>
                    <th>ふりがな</th>
                    <td> 
                    <input v-model="kana" placeholder="例)タナカ タロウ" />
                    <p class="error">{{ errors.kana }}</p>
                    </td>
                </tr>
                <tr>
                    <th>電話番号</th>
                    <td> 
                    <input v-model="tel" placeholder="例)電話番号" />
                    <p class="error">{{ errors.tel }}</p>
                    </td>
                </tr>
                <tr>
                    <th>メールアドレス</th>
                    <td> 
                    <input v-model="email" placeholder="例)tanaka@gmail.com" /> 
                    <p class="error">{{ errors.email }}</p>
                    </td>
                </tr>
                <tr>
                    <th>本文</th>
                    <td>
                        <textarea v-model="description" placeholder="400文字以内で入力してください" /> 
                        <p class="error">{{ errors.description }}</p>
                    </td>
                </tr>
            </table> 
            <button v-if="!valid" :disabled="!valid" type="button">未入力の必須項目があります</button>
            <button v-else-if="valid" type="button" @click="submit">送信</button> 
        </form>     
        <transition name="fade">
            <div v-if="result" class="contact-result">{{ result }}</div>
        </transition>
    </main>
</template>
<script>
 import axios from 'axios'
export default {
    data: function() {
        return {
            name: '',
            kana: '',
            tel: '',
            email: '',
            description: '',
            result: '',
        }
    },
    computed: {
        chackName: function(){
            if(!this.name){
                return 'お名前を入力してください';
            }
            return '';
        },
        chackKana: function(){
            if(!this.kana){
                return 'フリガナを入力してください';
            } else if(!this.validKatakana(this.kana)){
                return 'フリガナをカタカナで入力してください';
            }
            return '';
        },
        checkTel: function(){
            if(!this.tel){
                return '電話番号を入力してください';
            } else if(!this.validTel(this.tel)){
                return '電話番号を正しく入力してください';
            }
            return '';
        },
        chackEmail: function(){
            if(!this.email){
                return 'メールアドレスを入力してください';
            } else if(!this.validEmail(this.email)){
                return 'メールアドレスを正しく入力してください';
            }
            return '';
        },
        errors: function() {
            const errors = {
                'name': this.chackName,
                'kana': this.chackKana,
                'tel': this.checkTel,
                'email': this.chackEmail,
                //もし今後おかしくなったらここを治す
                'description': '',
            };
            for (var key in errors) {
                if (errors[key] === '' || errors[key] === null || errors[key] === undefined) {
                    delete errors[key];
                }
            }
            return errors;
        },
        valid: function() {
            return !Object.keys(this.errors).length;
        }
    },
    //もし今後おかしくなったらここを治す
    watch:{
        description:function(){
            if(this.description.length > 4){
                this.errors['description'] = '400文字以内で入力してください'
            }else{
                this.errors['description'] = ''
            }
        }
    },
    methods: {
        submit: async function(){
            const result = await this.send();
            this.result = result;
            if(result === '送信完了'){
                this.clear();
            }
        },
        send: async function(){
            const url = 'http://localhost:1192/api.php';
            
            const params = {
                'name': this.name,
                'kana': this.kana,
                'tel': this.tel,
                'email': this.email,
                'description': this.description,
            }
            return await axios
                .post(url, params)
                .then(function(res){
                    return res.data;
                })
                .catch(function(error){
                    console.log(error);
            });
        },
        validKatakana: function(kana) {
            const re = /^[ァ-ンｧ-ﾝ\x20\u3000ﾞﾟ]*$/;
            return re.test(kana);
        },
        validTel: function(tel) {
            const re = /^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/;
            return re.test(tel);
        },
        validEmail: function(email) {
            const re = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
            return re.test(email);
        },
        clear: function(){
            this.name = '';
            this.kana = '';
            this.tel= '';
            this.email = '';
            this.description = '';
        }
    }
}

// 参考資料
// https://into-the-program.com/vue-php-create-contact-form/
// https://www.google.com/search?q=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0&rlz=1C5CHFA_enJP934JP934&sxsrf=AJOqlzV6XYW64VFejZYVnbr4UqqBG6z3lw:1674260528498&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjw4r_Astf8AhWyEHAKHbrvCUUQ_AUoAXoECAEQAw&biw=1440&bih=821&dpr=2#imgrc=6x8ObtzuXXdl6M
// https://shimablogs.com/fetch-api-axios-difference#:~:text=axios%E3%81%AFPromise%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AE,%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82
// fetchとaxious
// https://zenn.dev/syu/articles/946a2b5fdf292e
</script>
<style scoped>
    table tr td{
        padding: 3%;
    }
    table tr input{
        width:70%;
    }
    table tr textarea{
        width:100%;
        min-height:200px
    }
    table 
    main{
        margin: 0 ;
        text-align: center;
    }
    
    h2 {
        margin:0;
        padding: 1%;
    }

    .contact {
        width: 100%;
        max-width: 600px;
        padding: 28px;
        margin: 0 auto;
        background-color: #eeeeee;
    }   
/* ここ */
    .contact-form table {
    width: 100%;
    margin: 0 0 28px 0;
    border-collapse: collapse;
}
    .contact-form table tr {
        border-bottom: 2px solid #cccccc;
    }
    .contact-form table tbody tr th {
        width: 25%;
        padding: 20px 10px;
        text-align: left;
    }
    .contact-form table tbody tr td {
        width: 75%;
        padding: 20px;
        text-align: left;
    }
    .contact-form table tbody tr td input {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    .contact-form .error {
        margin: 0;
        color: #ff0000;
        font-weight: bold;
        font-size: .85rem;
    }
    .contact-form button {
        display: block;
        width: 300px;
        padding: 10px 0;
        margin: 0 auto;
        color: #ffffff;
        border: 0;
        box-shadow: none;
        background-color: #384878;
        cursor: pointer;
    }
    .contact-form button:disabled {
        background-color: #a5a5a5;
    }
    .contact-result {
        padding: 5px 0;
        margin: 28px auto 0 auto;
        color: #ffffff;
        box-sizing: border-box;
        background-color: #00c2bc;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }





</style>