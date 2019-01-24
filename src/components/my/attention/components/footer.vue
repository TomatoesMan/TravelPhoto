<template>
    <div>
       <Button icon="more" @click="handle()">更多</Button>

        <mt-header fixed title="固定在顶部">
            <mt-button icon="back" slot="left"></mt-button>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
       
    

    </div>
</template>

<script>
import Vue from "vue";

import { Button,Header ,Toast ,Indicator ,MessageBox} from 'mint-ui';

// Vue.component(Button.name, Button);

// Vue.component(Header.name, Header);


// import { Toast } from 'mint-ui';
//import { Indicator } from 'mint-ui';
//import { MessageBox } from 'mint-ui';


export default {
    methods:{
        // handle(){
        //     Toast({
        //          message: '操作成功',
        //         iconClass: 'icon icon-success'
        //     })
        // }

        // handle(){
        //     Indicator.open('加载中...');
        // }

        handle(){
            //MessageBox('提示', '操作成功');
            MessageBox({
                title: '提示',
                message: '确定执行此操作?',
                showCancelButton: true
            });
        }



    }
}
</script>

<style>

</style>


