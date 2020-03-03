  <template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
  </template>
  <script>
  import Swiper from 'swiper'
  import SwiperSlide from './SwiperSlide.vue'
  export default {
   name: 'Swiper',
    props:{
      perview:Number
    },
    mounted() {
      new Swiper('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
    },

  }
  </script>
  <style lang='scss' scoped>
  .swiper-container {
      width: 100%;
      height: 100%;
      margin: 0px auto;
    }


  </style>
