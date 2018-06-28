<template>
  <div>
    <v-swiper></v-swiper>
    <div class="top-placeholder">
      <div class="top-placeholder-inner">附近商家</div>
    </div>
    <goods-list></goods-list>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import goodsList from '@/components/goodsList'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    'v-swiper': swiper,
    goodsList
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style lang="stylus" scoped>
.top-placeholder {
  background: #fff;
  margin-top: 20rpx;
  text-align: center;
}
.top-placeholder-inner {
  display: flex;
  align-items center
  justify-content center;
  color: #333;
  font-weight: bold;
}
.top-placeholder-inner:before, .top-placeholder-inner:after {
  content: '';
  width: 80rpx;
  height: 0;
  font-size: 0;
  border-top: 1px solid #333;
  -webkit-transform: scaleY(0.5);
  -moz-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>
