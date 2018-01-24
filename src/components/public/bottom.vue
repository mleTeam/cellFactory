<template>
  <div id="public_bottom">
    <div class="bottom btm_ani">
      <div class="btm_cont">
        <div class="btm_logo"></div>
        <div class="btm_link">
          <ul>
            <li v-for="item in items" :key="item.id">
              <a href="javaScript:void(0)" @click="$goRoute(item.url)">{{item.name}}</a></li>
          </ul>
        </div>

        <div class="erweima"><img src="/static/img/erweima.png" width="120" height="120" alt=""/><span>扫码关注微信平台</span>
        </div>
        <div class="btm_contact">
          <span>客服邮箱</span>
          <font>xxx.163.com</font>
          <span>客服热线（工作时间 8:30-17:30）</span>
          <font>0571-88888888</font>
        </div>
      </div>

      <div class="copy_right">版权所有 © 2016 深圳前海米粒儿互联网金融服务有限公司粤ICP备16052930号-1</div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {id: 1, name: '关于我们', url: ''},
        {id: 2, name: '联系我们', url: ''},
        {id: 3, name: '新手帮助', url: ''},
        {id: 4, name: '人才招聘', url: ''},
        {id: 5, name: '服务条款', url: ''},
        {id: 6, name: '友情链接', url: ''}
      ]
    }
  }
}
</script>
