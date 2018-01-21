<template>
  <div id="news_index">
    <public-head></public-head>
    <div class="main">
      <div class="new_cont">
        <news-banner :items="banner"></news-banner>
        <div class="news_left">
          <news-list :items="items"></news-list>
          <div id="paging1" class="page" style=" width:830px; margin:0 auto;"></div>
        </div>
        <div class="news_right">
          <span>公告</span>
          <news-notice :items="notice"></news-notice>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <public-bottom></public-bottom>
  </div>
</template>

<script>
  import PublicHead from 'components/public/head'
  import PublicBottom from 'components/public/bottom'
  import NewsBanner from 'components/news/banner'
  import NewsList from 'components/news/list'
  import NewsNotice from 'components/news/notice'

  export default {
    name: 'news_index',
    components: {
      PublicHead,
      PublicBottom,
      NewsBanner,
      NewsList,
      NewsNotice
    },
    data() {
      return {
        currentPage: 1,
        banner: [
          {id: 1, intro: '获3.6亿C轮融资，聚合数据欲打造大数据行业里的“天猫”', img: 'static/img/news/pic1.jpg'},
          {id: 2, intro: '不同云应用间传输数据，SnapLogic获4000万美元F轮融资', img: 'static/img/news/pic2.jpg'},
          {id: 3, intro: '二手车C2C鼻祖Beepi关闭加州以外业务，并与Fair.com合并', img: 'static/img/news/pic3.jpg'}
        ],
        items: [
          {
            id: 4,
            title: '从家族企业到估值200亿的巨头，新三板最低调PE怎么玩？',
            intro: '明石创新起初只是一个家族企业，2014年的一次股权置换，让公司发生了脱胎换骨的变化：从没有估值的家族企业，翻身成了估值138亿的巨头。',
            img: 'static/img/news/pic4.jpg',
            date: '2018-01-10'
          },
          {
            id: 5,
            title: '面对转型，企业该如何通过“模拟”走出困境',
            intro: '她会告诉你：为什么模拟如此重要？何时模拟最有效？如何去应用模拟？她会告诉你：为什么模拟如此重要？何时模拟最有效？如何去应用模拟？她会告诉你：为什么模拟如此重要？何时模拟最有效？如何去应用模拟？',
            img: 'static/img/news/pic5.jpg',
            date: '2018-01-10'
          },
          {
            id: 6,
            title: '从家族企业到估值200亿的巨头，新三板最低调PE怎么玩？',
            intro: '明石创新起初只是一个家族企业，2014年的一次股权置换，让公司发生了脱胎换骨的变化：从没有估值的家族企业，翻身成了估值138亿的巨头。',
            img: 'static/img/news/pic4.jpg',
            date: '2018-01-10'
          },
          {
            id: 7,
            title: '从家族企业到估值200亿的巨头，新三板最低调PE怎么玩？',
            intro: '明石创新起初只是一个家族企业，2014年的一次股权置换，让公司发生了脱胎换骨的变化：从没有估值的家族企业，翻身成了估值138亿的巨头。',
            img: 'static/img/news/pic4.jpg',
            date: '2018-01-10'
          },
          {
            id: 8,
            title: '面对转型，企业该如何通过“模拟”走出困境',
            intro: '她会告诉你：为什么模拟如此重要？何时模拟最有效？如何去应用模拟？她会告诉你：为什么模拟如此重要？何时模拟最有效？如何去应用模拟？她会告诉你：为什么模拟如此重要？何时模拟最有效？如何去应用模拟？',
            img: 'static/img/news/pic5.jpg',
            date: '2018-01-10'
          }
        ],
        notice: [
          {id: 1, title: '新赛季优惠券', date: '2018-10-10'},
          {id: 2, title: '平台新系统将于20日晚13:00更新', date: '2018-10-10'},
          {id: 3, title: '这是新赛季到来的首次版本更新', date: '2018-10-10'},
          {id: 4, title: '平台新系统将于20日晚13:00更新', date: '2018-10-10'},
          {id: 5, title: '这是新赛季到来的首次版本更新', date: '2018-10-10'},
          {id: 6, title: '新赛季优惠券', date: '2018-10-10'},
          {id: 7, title: '平台新系统将于20日晚13:00更新', date: '2018-10-10'}
        ]
      }
    },
    mounted() {
      this._showPage()
    },
    methods: {
      _showPage() {
        let paging1 = $("#paging1")
        paging1.pagination({
          items: 10,
          itemsOnPage: 1,
          currentPage: this.currentPage,
          cssStyle: 'light-theme'
        })
      }
    }
  }
</script>

<style>

</style>
