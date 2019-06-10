<style scoped>

.wh_top_changge {
  display: flex;
}

.wh_top_changge li {
  cursor: pointer;
  display: flex;
  color: #333333;
  font-size: .38rem;
  align-items: center;
  height: .6rem;
  width: .6rem;
  margin:.1rem 0  .1rem .72rem;
}

.wh_top_changge .wh_content_li {
  cursor: auto;
  flex: 2.5;
}
.wh_content_all {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  padding-bottom: .18rem;
}

.wh_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* padding: 0 2% 0 2%; */
  width: 100%;
}

.wh_content:first-child .wh_content_item_tag,
.wh_content:first-child .wh_content_item {
  color: #000;
  font-size: .28rem;
}

.wh_content_item,
wh_content_item_tag {
  display: flex;
  align-items: center;
  font-size: .28rem;
  width: 1.03rem;
  text-align: center;
  color: #333;
  /* color: #d11a1a; */
  /* border: 1px solid; */
}
.wh_content_item {
  height: 1.03rem;
}

.wh_top_tag {
  width: .5rem;
  height: .5rem;
  line-height: .5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wh_item_date {
  width: .5rem;
  height: .5rem;
  line-height: .5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}


.wh_jiantou1 {
  width: .18rem;
  height: .18rem;
  border-top: .02rem solid #000;
  border-left: .02rem solid #000;
  transform: rotate(-45deg);
}

.wh_jiantou1:active,
.wh_jiantou2:active {
  border-color: #ddd;
}

.wh_jiantou2 {
  width: .18rem;
  height: .18rem;
  border-top: .02rem solid #000;
  border-right: .02rem solid #000;
  transform: rotate(45deg);
}


.wh_content_item > .wh_isMark {
  margin: auto;
  border-radius: 100%;
  background: blue;
  z-index: 2;
}
.wh_content_item .wh_other_dayhide {
  color: #bfbfbf;
}
.wh_content_item .wh_want_dayhide {
  color: #bfbfbf;
}
.wh_content_item .wh_isToday {
  background: rgb(29, 189, 96);
  /* color: #fff; */
  border-radius: 100%;
}
.wh_content_item .wh_chose_day {
  /* 选中日期的属性 */
  border: 1px solid #000;
  width: 1.03rem;
  height: 1.03rem;
  border-radius: 100%;
}

.confirm_btn{
  width: 4.38rem;
  height: .88rem;
  line-height: .88rem;
  background: #4174f2;
  border-radius: .12rem;
  text-align: center;
  color: #fff;
  font-size: .32rem;
  margin: 1rem auto;
}
#ckday{
  margin-left: .5rem;
}

</style>
<template>
  <section class="wh_container">
    <div class="wh_content_all">

      <div class="wh_content">
        <div class="wh_content_item" v-for="tag in textTop">
          <div class="wh_top_tag">
            {{tag}}
          </div>
        </div>
      </div>

      <div class="wh_top_changge">
        <li class="wh_content_li">{{dateTop}}</li>

        <li @click="PreMonth(myDate,false)">
          <div class="wh_jiantou1"></div>
        </li>
        <li @click="NextMonth(myDate,false)">
          <div class="wh_jiantou2"></div>
        </li>
      </div>
      
      <div class="wh_content">
        <div class="wh_content_item" v-for="(item,index) in list" @click="clickDay(item,index)">
          <div class="wh_item_date" v-bind:class="[{ wh_isMark: item.isMark},{wh_other_dayhide:item.otherMonth!=='nowMonth'},{wh_want_dayhide:item.dayHide},{wh_isToday:item.isToday},{wh_chose_day:item.chooseDay},setClass(item)]">
            {{item.id}}
          </div>
        </div>
      </div>
      
    </div>
    <div id="ckday">
      <p>您选择的日期为：{{this.historyChose}}</p>
    </div>
    <div class="confirm_btn" @click="handleConfirm()">
      确认
    </div>
  </section>
</template>
<script>
import timeUtil from './calendar';
export default {
  data() {
    return {
      myDate: [],
      list: [],
      historyChose: "",
      dateTop: ''
    };
  },
  props: {
    markDate: {
      type: Array,
      default: () => []
    },
    markDateMore: {
      type: Array,
      default: () => []
    },
    textTop: {
      type: Array,
      default: () => [ '一', '二', '三', '四', '五', '六','日']
    },
    sundayStart: {
      type: Boolean,
      default: () => false
    },
    agoDayHide: { type: String, default: `0` },
    futureDayHide: { type: String, default: `2554387200` }
  },
  created() {
    this.intStart();
    this.myDate = new Date();
  },
  methods: {
    handleConfirm(){
    
      let a = this.historyChose
      this.$router.push({path:"/paylist"})
    },
    intStart() {
      timeUtil.sundayStart = this.sundayStart;
    },
    setClass(data) {
      let obj = {};
      obj[data.markClassName] = data.markClassName;
      return obj;
    },
    clickDay: function (item, index) {
      if (item.otherMonth === 'nowMonth' && !item.dayHide) {
        this.getList(this.myDate, item.date);
      }
      if (item.otherMonth !== 'nowMonth') {
        item.otherMonth === 'preMonth'
          ? this.PreMonth(item.date)
          : this.NextMonth(item.date);
      }
    },
    ChoseMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = new Date(date);
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    PreMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'preMonth');
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    NextMonth: function (date, isChosedDay = true) {
      date = timeUtil.dateFormat(date);
      this.myDate = timeUtil.getOtherMonth(this.myDate, 'nextMonth');
      this.$emit('changeMonth', timeUtil.dateFormat(this.myDate));
      if (isChosedDay) {
        this.getList(this.myDate, date, isChosedDay);
      } else {
        this.getList(this.myDate);
      }
    },
    forMatArgs: function () {
      let markDate = this.markDate;
      let markDateMore = this.markDateMore;
      markDate = markDate.map((k) => {
        return timeUtil.dateFormat(k);
      })
      markDateMore = markDateMore.map((k) => {
        k.date = timeUtil.dateFormat(k.date)
        return k;
      })
      return [markDate, markDateMore];
    },
    getList: function (date, chooseDay, isChosedDay = true) {
      const [markDate, markDateMore] = this.forMatArgs();
      this.dateTop = `${date.getFullYear()}年${date.getMonth() + 1}月`;
      let arr = timeUtil.getMonthList(this.myDate);
      for (let i = 0; i < arr.length; i++) {
        let markClassName = '';
        let k = arr[i];
        k.chooseDay = false;
        const nowTime = k.date;
        const t = new Date(nowTime).getTime() / 1000;
        //看每一天的class
        for (const c of markDateMore) {
          if (c.date === nowTime) {
            markClassName = c.className || '';
          }
        }
        //标记选中某些天 设置class
        k.markClassName = markClassName;
        k.isMark = markDate.indexOf(nowTime) > -1;
        //无法选中某天
        k.dayHide = t > this.futureDayHide;
        if (k.isToday) {
          this.$emit('isToday', nowTime);
        }
        let flag = !k.dayHide && k.otherMonth === 'nowMonth';
        if (chooseDay && chooseDay === nowTime && flag) {
          this.$emit('choseDay', nowTime);
          this.historyChose = nowTime;
          k.chooseDay = true;
        } else if (
          this.historyChose[this.historyChose.length - 1] === nowTime && !chooseDay && flag
        ) {
          k.chooseDay = true;
        }
      }
      this.list = arr;
    }
  },
  mounted() {
    this.getList(this.myDate);
  },
  watch: {
    markDate: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    markDateMore: {
      handler(val, oldVal) {
        this.getList(this.myDate);
      },
      deep: true
    },
    agoDayHide: {
      handler(val, oldVal) {
        this.agoDayHide = parseInt(val);
        this.getList(this.myDate);
      },
      deep: true
    },
    futureDayHide: {
      handler(val, oldVal) {
        this.futureDayHide = parseInt(val);
        this.getList(this.myDate);
      },
      deep: true
    },
    sundayStart: {
      handler(val, oldVal) {
        this.intStart();
        this.getList(this.myDate);
      }, deep: true
    }
  }
};
</script>