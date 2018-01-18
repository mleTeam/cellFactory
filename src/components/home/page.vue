<template>
  <div id="home_page">
    <div class="con">

      <div class="section s1">
        <div class="full_logo"></div>
        <div class="slogan_title"></div>
        <a  href="javaScript:void(0)" class="btn_start" @click="$goRoute('')">开启成功之路</a>
        <div class="full_data">
          <ul>
            <li><p><font>成功创业项目</font><span>{{page1ProductCount}}个</span></p></li>
            <li><p><font>累计投资金额</font><span>{{page1Money}}元</span></p></li>
            <li><p><font>累计注册人数</font><span>{{page1Person}}人</span></p></li>
          </ul>
        </div>

        <a href="#page2" class="btn_page_down" title="点击查看下一屏"><span></span></a>
      </div>

      <!-- 第二页 -->
      <div class="section s2">
        <div class="pro_title"><span>成功项目</span></div>
        <div class="project_list">
          <ul>

            <li v-for="item in successItems">
              <a href="javaScript:void(0)" @click="$goRoute(item.url)">
                <div class="pro_money">风投{{item.money}}万</div>
                <img :src="item.images" width="380" height="285" alt=""/>
                <span>{{item.title}}</span>
                <p>{{item.productDesc}}</p>
                <b>{{item.address}}</b>
              </a>
            </li>

          </ul>
        </div>

        <a href="javaScript:void(0)" class="btn_project" @click="$goRoute('')"><span>➞</span></a>
        <a href="#page3" class="btn_page_down" title="点击查看下一屏"><span></span></a>
      </div>

      <!-- 第三页 -->
      <div class="section s3">
        <div class="pro_title"><span>可投项目</span></div>
        <div class="project_list">
          <ul>

            <li v-for="item in choiceItems">
            <a href="javaScript:void(0)" @click="$goRoute(item.url)">
              <img :src="item.images" width="380" height="285" alt=""/>
              <span>{{item.title}}</span>
              <p>{{item.productDesc}}</p>
              <div class="pro_keyword"><span class="font_gray" v-for="job in item.jobs">{{job.name}}</span></div>
              <div class="pro_data"><p><span>已申请</span><font>{{item.applyPerson}}<i>人</i></font></p><p><span>已浏览</span><font>{{item.browse}}<i>次</i></font></p></div>
            </a>
            </li>

          </ul>
        </div>
        <a href="startups.html" class="btn_project"><span>➞</span></a>
        <a href="#page4" class="btn_page_down" title="点击查看下一屏"><span></span></a>

      </div>



      <!-- 第四页 -->
      <div class="section s4">

        <div class="news">
          <a  href="news.html"><img src="/static/img/news/1.jpg" width="1200" height="260" alt=""/></a></div>
        <div class="pro_title"><span>合作机构</span></div>
        <div class="cooperate_link">
          <ul>
            <li v-for="partner in partners"><a href="javaScript:void(0)" @click="$goRoute(partner.url)"><img :src="partner.images" width="285" height="100" alt=""/></a></li>
          </ul>
        </div>

        <public-bottom></public-bottom>

      </div>

    </div>
  </div>
</template>

<script>
  import fullpage from './js/jquery.fullPage.min.js'
  import PublicBottom from 'components/public/bottom'

  export default {
    name: 'home_page',
    data() {
      return {
        page1ProductCount: '3,413',
        page1Money: '152,214,154',
        page1Person: '511,166',
        successItems: [
          {
            url: '',
            money: '100',
            images: '/static/img/project/1.jpg',
            title: '美国硅谷专利设计的运动防尘呼吸口罩',
            productDesc: '一款适用于最广人群，舒适度和高过滤效果于一身的防霾口罩。',
            address: '杭州市滨江xxx孵化基地'
          },
          {
            url: '',
            money: '40',
            images: '/static/img/project/2.jpg',
            title: '大学生校园电影院',
            productDesc: '国内首家大学生校园影院－让大学校园high起来',
            address: '杭州市滨江xxx孵化基地'
          },
          {
            url: '',
            money: '80',
            images: '/static/img/project/3.jpg',
            title: '门邦网—口腔电子病历服务平台',
            productDesc: '利用“互联网+口腔医疗”的模式，建立口腔医疗新生态',
            address: '杭州市滨江xxx孵化基地'
          },
        ],
        choiceItems: [
          {
            url: '',
            images: '/static/img/project/4.jpg',
            title: '金融大数据智能导航系统平台',
            productDesc: '所谓“互联网＋”，就是借助互联网的手段对传统企业进行技术改造，提升传统企业的竞争力，其核心... ',
            jobs:[{name: '后端开发'}, {name: '前端设计'}, {name: 'ui设计'}],
            applyPerson: '23',
            browse: '1235'
          },
          {
            url: '',
            images: '/static/img/project/1.jpg',
            title: '美国硅谷专利设计的运动防尘呼吸口罩',
            productDesc: '一款适用于最广人群，舒适度和高过滤效果于一身的防霾口罩。',
            jobs:[{name: '测试'}, {name: '前端设计'}, {name: 'ui设计'}],
            applyPerson: '2514',
            browse: '65474'
          },
          {
            url: '',
            images: '/static/img/project/2.jpg',
            title: '大学生校园电影院',
            productDesc: '国内首家大学生校园影院－让大学校园high起来',
            jobs:[{name: '后端开发'}, {name: '前端设计'}, {name: 'ui设计'}],
            applyPerson: '23',
            browse: '1235'
          },
        ],
        partners: [
          {url: '', images: '/static/img//link/1.png'},
          {url: '', images: '/static/img//link/2.png'},
          {url: '', images: '/static/img//link/3.png'},
          {url: '', images: '/static/img//link/4.png'}
        ],
      }
    },
    mounted:function(){
      this._Fullpagetab()
    },
    methods:{
      _Fullpagetab(){
        var con=$(".con")
        con.fullpage({
          navigation: true,
          anchors: ['page1', 'page2', 'page3', 'page4'],
          menu: '.menu',
          verticalCentered:false,
        })
      },
      _GetChoiceItems(){
        var self = this

        var url = '/api/product/getChoices/'
        self.$http.get(url).then((response) => {
          var success = response.data.success
          if(success){
            var list = response.data.list
            self.choiceItems = list
          }
        }, (response) => {
          console.log("error")
        });
      }
    },
    components: {
      PublicBottom
    }
  }
</script>

<style>
  @import './css/jquery.fullPage.css'
</style>
