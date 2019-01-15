<template>
    <div id="content">
        <ul ref="wrapContent">
            <li v-for="( item, index ) in records" :key="index">
                <div v-if="item.type == 1">
                    <div class="client">
                        <p class="clientText">{{item.text}}</p><i></i><img src="../../../../static/image_yxl/tou.jpg" alt="">
                    </div>
                </div>
                <div v-if="item.type == 2">
                    <div class="service">
                        <img src="../../../../static/image_yxl/kefu_tx@2x.png" alt=""><i></i><p class="serviceText">{{item.text}}</p>
                    </div>
                </div>
            </li>
            <li></li>
        </ul>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        created () {
            this.Observer.$on( "handleSendText", ( val )=>{
                this.records.push( val );
                axios({
                    method : "get",
                    url : "/apid/openapi/api?key=2465e182e4154777a3a02da0ccaa6c88&userid=1&info=" + val.text,
                })
                .then( ( data )=>{
                    this.records.push( { type : 2, text : data.text } );
                } )
            })
        },
        data () {
            return {
                records : []
            }
        },
        updated () {
            this.$refs.wrapContent.scrollIntoView();
        }
    }
</script>
<style scoped lang="scss">
    #content {
        width: 100%;
        height: 12.4rem;
        overflow: auto;
        padding: 1.2rem 0.32rem 0 0.32rem;
        .client {
            display: flex;
            justify-content: flex-end;
            margin: 0.64rem;
            position: relative;
            .clientText {
                width: auto;
                height: auto;
                text-align: center;
                line-height: 0.67rem;
                background:rgba(10,145,229,1);
                color: #fff;
                font-size: 0.24rem;
                padding: 0.32rem 0.35rem 0.37rem 0.34rem;
                border-radius: 0.12rem;
                margin-right: 0.2rem;
            }
            i {
                display: inline-block;
                width: 0.32rem;
                height: 0.37rem;
                background: url("../../../../static/image_yxl/right.png");
                position: absolute;
                top: 50%;
                left: 5.3rem;
                margin-top: -0.18rem;
            }
            img {
                width: 0.64rem;
                height: 0.64rem;
                background:rgba(229,229,229,1);
                border:0px solid rgba(170,170,170,1);
                border-radius:50%;
                position: absolute;
                top: 50%;
                left: 5.58rem;
                margin-top: -0.32rem;
            }
        }
        .service {
             display: flex;
            margin: 0.64rem;
            position: relative;
             .serviceText {
                width: auto;
                height: auto;
                text-align: center;
                line-height: 0.67rem;
                background:rgba(241,251,255,1);
                color: #000;
                font-size: 0.24rem;
                padding: 0.32rem 0.35rem 0.37rem 0.34rem;
                border-radius: 0.12rem;
                margin-left: 0.2rem;
            }
             i {
                display: inline-block;
                width: 0.32rem;
                height: 0.37rem;
                background: url("../../../../static/image_yxl/left.png");
                position: absolute;
                top: 50%;
                right: 5.3rem;
                margin-top: -0.18rem;
            }
             img {
                width: 0.64rem;
                height: 0.64rem;
                background:rgba(229,229,229,1);
                border:0px solid rgba(170,170,170,1);
                border-radius:50%;
                position: absolute;
                top: 50%;
               right: 5.58rem;
                margin-top: -0.32rem;
            }
        }
    }
</style>