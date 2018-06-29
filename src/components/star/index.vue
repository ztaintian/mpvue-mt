<template>
  <div :class="[starType,'star']" >
    <span :class="[itemType,'star-item']" v-for="(itemType,index) in itemTypes" :key="index"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      length: 5,
      on: 'on',
      half: 'half',
      off: 'off'
    }
  },
  props: {
    size: {
      type: Number,
      default: 24
    },
    score: {
      type: Number,
      default: 4.5
    }
  },
  computed: {
    starType () {
      return `star-${this.size}`
    },
    itemTypes () {
      var result = []
      var intScore = Math.floor(this.score)
      var hasDecimal = this.score % 1 !== 0
      for (var i = 0; i < intScore; i++) {
        result.push(this.on)
      }
      if (hasDecimal) {
        result.push(this.half)
      }
      while (result.length < this.length) {
        result.push(this.off)
      }
      return result
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
.star
  .star-item
    font-size 0
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 40rpx
      height 40rpx
      margin-right 44rpx
      background-size 40rpx 40rpx
      &.on
        bg-image("star48_on")
      &.half
        bg-image("star48_half")
      &.off
        bg-image("star48_off")
  &.star-36
    .star-item
      width 30rpx
      height 30rpx
      margin-right 30rpx
      background-size 30rpx 30rpx
      &.on
        bg-image("star36_on")
      &.half
        bg-image("star36_half")
      &.off
        bg-image("star36_off")
  &.star-24
    .star-item
      width 20rpx
      height 20rpx
      margin-right 10rpx
      background-size 20rpx 20rpx
      &.on
        bg-image("star24_on")
      &.half
        bg-image("star24_half")
      &.off
        bg-image("star24_off")

</style>
