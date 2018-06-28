<template>
  <swiper class="categoryList" :autoplay="false" :circular="true" :indicator-dots="true" indicator-color="rgba(228,228,228,1)" indicator-active-color="#FECA49">
    <swiper-item v-for="(items,i) in categoryList" :key="i">
      <div v-for="(item,index) in items" class="category-info" :key="index" @click="choose">
        <image :src="item.src"  classs="category-image"/>
        <div class="category-text">{{item.name}}</div>
      </div>
    </swiper-item>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      item: {
        name: 1,
        imgs: [1, 2, 3]
      },
      categoryList: {}
    }
  },
  mounted () {
    this.ajaxSwiper()
  },
  methods: {
    ajaxSwiper () {
      this.$http.get('/swiper').then((data) => {
        this.categoryList = data.data.categoryList
      })
    },
    choose () {
      wx.showToast({
        title: '代完善',
        icon: 'success',
        duration: 2000
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.categoryList {
  width: 100%;
  height: 350rpx;
  border-bottom: 20rpx solid #f4f4f4;

  .category-info {
    display: inline-block;
    text-align: center;
    position: relative;
    margin-top: 10rpx;
    width: 25%;
    height: 150rpx;

    image {
      width: 95rpx;
      height: 95rpx;
    }

    .category-text {
      font-size: 25rpx;
      width: 100%;
      line-height: 30rpx;
    }
  }
}
</style>
