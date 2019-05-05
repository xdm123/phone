<template>
  <div class='phoneloginwrap'>
    <div class='loginhead'>
      <p @click='closelogintemp'></p>
      <span>手机号登录</span>
    </div>
    <div class='loginctn'>
      <div class='phonenumwrap'>
        <input type="text" 
        :class='[setborderindex == 0 ? "setborder" : ""]'
        @focus="getblur"
        @blur="removeborder"
        @input="checkphonenum"
        maxlength="11"
        autocomplete="off"
        v-model='phonenum'
        :data-index='0'
        placeholder="登录手机号">
        <img v-if="checktrue == 1" src="../../../assets/img/phonenumsuccess.png" alt="">
        <img v-if="checktrue == 2" src="../../../assets/img/phonenumerror.png" alt="">
      </div>
      <div class='phonenumwrap'>
        <input 
        type="text" 
        @focus="getblur"
        :data-index='1'
        @blur="removeborder"
        maxlength="6"
        autocomplete="off"
        @input="checkpsd"
        v-model="password"
        :class='[setborderindex == 1 ? "setborder" : ""]'
        placeholder="密码由数字和字母组成">
      </div>
      <p @click="clicklogin" class='loginbtn'>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</p>
      <p class='item'>没创建过的手机号将自动创建账号并登录</p>
      <p v-if="showmsg" class='msgbox'>{{msg}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        setborderindex:3,
        showmsg:false,
        phonenum:'',
        checktrue:0,
        pastrue:0,
        password:'',
        msg:''
      }
    },
    components: {

    },
    methods:{
      ...mapActions([
        'islogin'
      ]),
      closelogintemp:function(){
        this.$emit('closetemp')
      },
      getblur:function(e){
        this.setborderindex = e.target.dataset.index
      },
      removeborder:function(){
        this.setborderindex = 3
      },
      checkphonenum:function(){
        var num = this.phonenum;
        var testnum = /^1[34578]\d{9}$/
        if(testnum.test(num)){
          this.checktrue = 1
        }else{
          this.checktrue = 2
        }
        if(num == ''){
          this.checktrue = 0
        }
      },
      checkpsd:function(){
        var psd = this.password;
        var testpsd = /^[0-9a-zA-Z]+$/
        console.log(testpsd.test(psd))
        if(testpsd.test(psd)){
          this.pastrue = 1
        }
        if(this.password == ''){
          this.pastrue = 0
        }
        console.log(this.pastrue)
      },
      clicklogin:function(){
        if(this.checktrue != 1){
          var that = this
          this.msg = '手机号格式不正确'
          this.showmsg = true;
          setTimeout(function(){
            that.showmsg = false
          },1000)
          return
        }
        if(this.pastrue != 1){
          var that = this
          this.msg = '未设置密码'
          this.showmsg = true;
          setTimeout(function(){
            that.showmsg = false
          },1000)
          return
        }
        if(this.pastrue == 1 && this.checktrue == 1){
          var that = this
          this.$http.post('http://www.num12138.top:3000/insertUser',{
            "account":that.phonenum,
            "password":that.password
          })
          .then(function(data){
            console.log(data);
            if(data.data.status == 200){
              that.msg = '登录成功'
              that.showmsg = true;
              setTimeout(function(){
                that.showmsg = false
                that.islogin();
                localStorage.setItem('id',that.phonenum);
                that.$router.go(-1);
              },1000)
            }
            if(data.data.status == 400){
              that.msg = '密码错误'
              that.showmsg = true;
              setTimeout(function(){
                that.showmsg = false
              },1000)
            }
          })
          .catch(function(error){
            console.log(error)
          })
        }else{
          console.log('缺少条件');
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  .phoneloginwrap{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 22222;
    background:#f8f8f8;
    .loginhead{
      width: 100%;
      height: 1.33rem;
      background:#fff;
      position: relative;
      font-size: 16px;
      color:#282828;
      text-align: center;
      line-height: 1.33rem;
      p{
        width: 1rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background:url('../../../assets/img/return_block.png') no-repeat center;
        background-size: 0.5rem;
      }
    }
    .loginctn{
      .phonenumwrap{
        width: 80%;
        position: relative;
        margin:0 auto;
        img{
          width: 0.7rem;
          height: 0.7rem;
          position: absolute;
          right: 0.3rem;
          top: 50%;
          margin-top:-0.35rem;
        }
      }
      input{
        width: 100%;
        height:1.2rem;
        background:#fff;
        border:#f2f2f2;
        border-radius: 10px;
        font-size: 16px;
        color:green;
        text-align: center;
        display: block;
        margin:0 auto;
        margin-top:1rem;
        box-sizing: border-box; 
      }
      input::-webkit-input-placeholder{
        font-size: 16px;
        color:#999;
      }
      .setborder{
        box-shadow: 0px 0px 5px 1px rgb(240, 154, 27);
        border:1px solid rgb(240, 154, 27);
      }
    }
    .loginbtn{
      width: 80%;
      height: 1.2rem;
      margin:0 auto;
      background:rgb(240, 154, 27);
      text-align: center;
      line-height: 1.2rem;
      font-size: 16px;
      color:#fff;
      border-radius: 10px;
      margin-top:1rem;
    }
    .item{
      width: 100%;
      text-align: center;
      line-height: 2rem;
      color:#888;
    }
    .msgbox{
      width: 5rem;
      height: 1rem;
      background:rgba(0,0,0,0.7);
      border-radius: 10px;
      line-height: 1rem;
      text-align: center;
      color:#fff;
      font-size: 14px;
      position: fixed;
      top: 2rem;
      left:50%;
      margin-left:-2.5rem;
    }
  }
</style>
