<template>
  <div class="vue-date-container clx">
    <p @click="turnToPre" v-if="!isNext" class="fl"><img src="../../../assets/pre.png" class="enter"/></p>  
    <p @click="turnToNext" v-else="isNext" class="fr"><img src="../../../assets/enter.png" class="enter"/></p>
    <!-- 主体 -->
    <div :class="{'main fr': isNext, 'main fl': !isNext}">
      <div class="weekdays">
        <span :class="{'cell past': isNext && (current.weekday > weekday) }" v-for="(index, weekday) in current.weekdays" track-by="$index">{{changeWeekInEnglish(weekday)}}</span>
      </div>
      <!-- 日期选择 -->
      <div class="middle clx">
        <div ref="ele" class="days-box">
          <span @click="chooseDay(dayItem)" :class="{'cell active': currentDay === dayItem, 'cell': currentDay !== dayItem, 'cell past': daysShow.indexOf(dayItem) < daysShow.indexOf(current.day)}" v-for="(dayItem, i) in daysShow">{{dayItem}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import util from './util'

  export default {
    data () {
      return {
        // 当前显示的时间
        current: {
          weekdays: [],
          year: 0,
          month: 0,
          day: 0,
          days: 0
        },
        month: 0,
        currentDay: 0,
        startX: 0,
        endX: 0,
        isNext: true
      }
    },
    created () {
      this.current = util.initDate()
      // this.days = this.current.days
      this.currentDay = this.current.day
      this.month = this.current.month + 1
    },
    computed: {
      /**
       * 展示的日期
       */
      daysShow () {
        let totaldays = util.getDays(this.current.year)[this.current.month]
        let daysArray = []
        // 把本月的天数放进一个数组里
        let totaldaysArray = new Array(totaldays)
        for (var i = 0; i < totaldays; i++) {
          totaldaysArray[i] = i + 1
        }
        // 返回需要的两周日期
        // 判断今天是否是周日（不是的话前面要显示之前的日期，不可选择）
        if (this.current.weekday !== 0) {
          daysArray = totaldaysArray.slice(this.current.day - this.current.weekday - 1)
        } else {
          daysArray = totaldaysArray.slice(this.current.day - 1)
        }
        // 判断获得本月（包括显示的昨日之前的日期）天数的长度是否大于14（两周）
        if (daysArray.length > 14) {
          return daysArray.splice(0, 14)
        } else if (daysArray.length < 14) {
          let arr = new Array(14 - daysArray.length)
          for (var j = 0; j < arr.length; j++) {
            arr[j] = j + 1
          }
          return daysArray.concat(arr)
        } else if (daysArray.length === 14) {
          return daysArray
        }
      },
      /**
       * 每个月的第一天是星期几
       */
      start () {
        var date = new Date()
        date.setFullYear(this.current.year)
        date.setMonth(this.current.month)
        date.setDate(1)
        return date.getDay()
      }
    },
    methods: {
      /**
       * 转化星期几为英文写法
       */
      changeWeekInEnglish (week) {
        switch (week) {
          case 1: return 'Mon'
          case 2: return 'Tue'
          case 3: return 'Wed'
          case 4: return 'Thu'
          case 5: return 'Fri'
          case 6: return 'Sat'
          case 0: return 'Sun'
        }
      },
      /**
       * 点击选取日期
       */
      chooseDay (index) {
        if (this.daysShow.indexOf(index) < this.daysShow.indexOf(this.current.day)) {
          return false
        }
        this.currentDay = index
      },
      /**
       * 日期翻页
       */
      turnToNext () {
        this.isNext = false
        this.$refs.ele.style.transform = 'translateX(-' + 7 * 0.93 + 'rem' + ')'
        this.$refs.ele.style.transitionDuration = 1 + 's'
      },
      turnToPre () {
        this.isNext = true
        this.$refs.ele.style.transform = 'translateX(0)'
        this.$refs.ele.style.transitionDuration = 1 + 's'
      }
    }
  }
</script>

<style lang="less" scoped>
@color_1: #4d4d4d;
@background_color_1: #ff4236;

.vue-date-container {
  width: 7.5rem;
	padding: .46rem 0 .28rem;
	p {
    width: .16rem;
    padding: .38rem .14rem .44rem;
    height: .24rem;
    line-height: .24rem;
    text-align: center;
    img{
      width: .16rem;
      height: .24rem;
      display: block;
    }
	}
	.main {
		height: 1.06rem;
		width: 6.51rem;
    .cell.past {
      color: @color_1;
    }
		.weekdays {
			display: flex;
			width: 100%;
			span {
				flex: 1;
				height: .33rem;
				line-height: .33rem;
				font-size: .24rem;
				text-align: center;
			}
		}
		.middle {
			height: .73rem;
			line-height: .73rem;
			width: 100%;
			overflow: hidden;
			.days-box{
        height: .73rem;
        width: 13.02rem;
        .cell {
          width: .57rem;
          height: .53rem;
          line-height: .53rem;
          margin: .08rem .18rem;
          float: left;
          font-size: .36rem;
          font-weight: bold;
          text-align: center;
        }
        .cell.active {
          background-color: @background_color_1;
          border-radius: 50%;
          padding-top: .04rem;
        }
      }
    }
  }
} 
</style>
