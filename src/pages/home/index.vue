<template>
  <div>
    <div class="iconfont icon-weizhi">{{location}}</div>
    <v-swiper></v-swiper>
    <div class="top-placeholder">
      <div class="top-placeholder-inner border-1px">附近商家</div>
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
      userInfo: {},
      location: ''
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
  onLoad () {
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    // wx.openSetting({
    //   success: (res) => {
    //     console.log(res)
    //     res.authSetting = {
    //       'scope.userInfo': true,
    //       'scope.userLocation': true
    //     }
    //   }
    // })
    // DKOBZ-SDGC6-CEKSL-MOVW3-CBGKE-SLBIU
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.$qqmap.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res) {
            that.location = res.result.address
          },
          fail: function (res) {
            console.log(res)
          }
        })
      },
      fail: function (res) {
        console.log('获取地址11')
        console.log(res)
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.icon-weizhi
  font-size 25rpx 
  margin 0 50rpx 20rpx
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
