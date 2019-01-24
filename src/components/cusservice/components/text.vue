<template>
    <div id="text">
        <input type="text" placeholder="说些什么" v-model="text" v-focus="flag"><button @click="sendText">发送</button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                text : "",
                flag : true
            }
        },
        directives: {
          focus  : {
              inserted( el ){
                  el.focus();
              }
          }  
        },
        methods: {
            sendText : function(){
                this.Observer.$emit( "handleSendText", { type : 1, text : this.text } );
                this.text = "";
            }
        }
    }
</script>
<style scoped lang="scss">
    #text {
        width: 100%;
        height: 0.98rem;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 5;
         box-shadow:0px 0px 0.38rem 0px rgba(117,117,117,0.34);
         display: flex;
         align-items: center;
         justify-content: space-around;
        input {
            width: 5.18rem;
            min-height: 0.6rem;
            outline: none;
            border: none;
            font-size: 0.4rem;
            background:rgba(255,255,255,1);
            border:1px solid rgba(170,170,170,1);
            border-radius:4px;
        }
        button {
            width:1.28rem;
            height:0.60rem;
            background:rgba(99,146,244,1);
            border-radius: 0.04rem;
            border : none;
            color: #fff;
            font-size: 0.4rem;
        }
    }
</style>