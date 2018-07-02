<template>
  <scroll-view>
    <div class="field border-1px" v-for="(v,index) in poilist" :key="index">                                                              
      <div class="avatar">
        <span class="avatar-brand">品牌</span>
        <img class="avatar-image" :src="v.pic_url" />
      </div>
      <div class="content">                                         
        <div class="shop-na">{{v.name}}</div>
        <div class="clearfix" style="width:100%;height:44rpx;">
          <div class="shop-star">
            <v-star :score="v.wm_poi_score" :size="size" ></v-star>
          </div>
          <div class="shop-sold">月售{{v.month_sale_num > 999?'999+':v.month_sale_num}}</div>
          <i class="shop-right">{{v.distance}}</i><i class="shop-dvd-line">|</i><i class="shop-delivery-time">{{v.avg_delivery_time}}min</i>
        </div>
        <div class="shop-line clearfix">                                            
          <span class="shop-line-item">{{v.min_price_tip}}</span>                                            
          <span class="shop-line-item"><span class="shop-line-item-line">|</span>{{v.shipping_fee_tip}}</span>
          <div class="allocation-icon"><span>美团专送</span></div>
          <div class="clear"></div>                                        
        </div>      
      </div>                                    
    </div>
  </scroll-view>
</template>

<script>
import star from '../star'
export default {
  components: {
    'v-star': star
  },
  data () {
    return {
      score: 3,
      bottomFlag: false,
      size: 24,
      poilist: []
    }
  },
  mounted () {
    this.ajaxList()
  },
  methods: {
    ajaxList () {
      this.$http.get('/list').then((data) => {
        this.pageList = data.data.poilist
        this.poilist = data.data.poilist.splice(0, 10)
      })
    }
  },
  onReachBottom () {
    wx.showLoading({
      title: '加载中'
    })
    setTimeout(() => {
      this.poilist.push(...this.pageList)
      wx.hideLoading()
    }, 1000)
  }
}
</script>

<style lang='stylus' scoped>
.field 
  display flex
  margin-left 20rpx
  padding: 30rpx 0 25rpx;
  &.border-1px
    border-1px(#E4E4E4)
  .avatar 
    position relative
    .avatar-brand 
      position: absolute;
      left: 0;
      top: 0;
      width: 56rpx;
      font-size 20rpx
      line-height: 28rpx;
      height: 28rpx;
      color: #fff;
      background: #FFA627;
      text-align: center;
    .avatar-image
      width 168rpx
      height 126rpx
      border 1rpx solid #eee
  .content
    margin-left 10rpx
    flex 1
    .shop-na 
      font-size: 30rpx;
      height:38rpx;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
    .shop-star
      float: left;
    .shop-sold 
      float: left;
      margin-top: 16rpx;
      font-size: 22rpx;
      color: #656565;
    .shop-right 
      float: right;
      margin-right: 15px;
      font-size: 22rpx;
      padding-top: 16rpx;
      color: #656565;
      text-align: right;
    .shop-dvd-line
      float: right;
      margin:23rpx 10rpx 0 ;
      width: 0;
      height: 20rpx;
      font-size: 0;
      border-right: 1px solid #ccc;
    .shop-delivery-time 
      float: right;
      font-size: 22rpx;
      margin-top: 16rpx;
      color: #656565;
      text-align: right;
    .shop-line 
      clear: both;
      font-size: 22rpx;
      color: #656565;
      width 100%
      .shop-line-item
        float left
      .shop-line-item-line
        margin:23rpx 10rpx 0 ;
        color #ccc
      .allocation-icon 
        float: right;
        margin-right: 15px;
        margin-top: 0;
      .allocation-icon > span 
        position: relative;
        background-color: #FFD161;
        display: inline-block;
        height: 15px;
        line-height: 15px;
        padding: 0 6px;
        font-size: 10px;
        color: #333;
        font-weight: normal;
        vertical-align: baseline;
      .allocation-icon > span:before, .allocation-icon > span:after 
        content: '';
        position: absolute;
        border: 2px solid #fff;
        width: 0;
        height: 0;
        font-size: 0;
      .allocation-icon > span:before 
        left: 0;
        top: 0;
        border-color: #fff #FFD161 #FFD161 #fff;
      .allocation-icon > span:after
        right: 0;
        bottom: 0;        
        border-color: #FFD161 #fff #fff #FFD161;
.bottom-load
  text-align center
  font-size 22rpx
</style>
