<template>
  <div id="news_detail">
    <div class="main">
      <div class="new_cont">
        <div class="new_detail">
          <span>{{news_title}}</span>
          <i>{{news_dateTime}}</i>
          <div class="new_detail_cont">
            <img :src="news_img" alt=""/> <br>
            <div v-html="news_desc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news_detail',
  data () {
    return {
      news_title: '从家族企业到估值200亿的巨头，新三板最低调PE怎么玩？',
      news_dateTime: '2018年10月10日',
      news_img: '/static/img/news/pic_cont.jpg',
      news_desc: '<p> 一次股权置换，翻身成了估值138亿的巨头<br><br>\n' +
      '\n' +
      '明石创新起初只是一个家族企业，2014年的一次股权置换，让公司发生了脱胎换骨的变化：从没有估值的家族企业，翻身成了估值138亿的巨头。<br><br>\n' +
      '\n' +
      '1999年，高寿江、高鹏和唐焕新三人共同出资1000万，成立了北京致远达投资管理有限公司。三人都是自家人，高寿江是高鹏的父亲，而唐焕新是高寿江另一个儿子高峰的妻子。<br><br>\n' +
      '\n' +
      '从成立到2014年的14年间，由于没有外部股东的加入，公司一直没有明确的估值。期间，致远达投资正式更名为“北京明石投资控股有限公司”（以下简称“明石有限”）。<br><br>\n' +
      '\n' +
      '2014年7月，明石有限继续增资，只是此次增资并不是用真金白银，而是将唐焕新、曲焕芝、高松三人持有的万达集团13.10%的股权，估值23.7亿元，置换成明石有限2178万注册资本，增资价格为109元每股。<br><br>\n' +
      '\n' +
      '曲焕芝是唐焕新的公婆，而高松又是曲焕芝的儿子，此次股权置换仍是自家人在玩。但是，按照此次换股价格计算，明石有限估值已经达到124亿元。<br><br>\n' +
      '\n' +
      '此次股权置换堪称经典，唐焕新等人攥在自己手里的估值181亿的万达集团部分股权，除了分红几乎没什么收益，一家非上市的传统企业股权转让也成问题，但是注入到明石有限之后，除了能将自身的估值拉高，还能为以后挂牌新三板，高估值进行融资打好坚实基础，何乐而不为？<br><br>\n' +
      '\n' +
      '挂牌新三板后募集近10亿，估值高达193亿<br><br>\n' +
      '\n' +
      '股权置换后，脱胎换骨的明石创新，于2015年7月22日正式登陆新三板。这一步棋，让明石创新的估值从138亿飙到了193亿。<br><br>\n' +
      '\n' +
      '挂牌新三板后，明石创新干的第一件事就是拿钱：挂牌同时定增，以投后146亿的估值募资9.24亿元，之后又分别发行了5年期4亿元的公司债和7年期10亿元的公司债。<br><br>\n' +
      '\n' +
      '拿到了9.24亿的明石创新，开始了一系列的买！买！买！与九鼎集<br><br></p>'
    }
  },
  methods: {
    getDetail (id) {
      console.log(id)
    }
  },
  created: function () {
    let self = this;
    let id = self.$route.params.newsId
    self.getDetail(id)
  }
}
</script>
