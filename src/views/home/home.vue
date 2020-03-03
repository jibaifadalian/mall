<template>
    <div>
      <nav-bar></nav-bar>
      <swiper>
        <swiper-side>11111</swiper-side>
      </swiper>



      <router-view></router-view>

    </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar.vue'
import {getHomeMutation} from '@/network/home.js'
import { Swiper, SwiperSlide} from '@/components/common/swiper'

export default {
  name: 'Home',
  components:{
    NavBar,Swiper, SwiperSlide
  },

    mounted() {

    },

  data() {
    return {
      banners:Array,
      recommend:Array,
      keywords:Array
    }
  },
  created() {
    getHomeMutation().then(res => {
      console.log(res)
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      this.keywords = res.data.keywords.list;
    })
  },
}
</script>




<style lang="scss">

</style>
