<template>
  <div id="public_head">
    <div class="head" >
      <div class="top">

        <div class="logo"><a href="javaScript:void(0)" @click="$goRoute('/homeIndex')"></a></div>

        <div class="nav">
          <ul>
            <li v-for="item in items" :class="item.state"><a href="javaScript:void(0)" @click="$goRoute(item.url)">{{item.name}}</a></li>
          </ul>
        </div>

        <div class="login">
          <a href="javaScript:void(0)" @click="$goRoute('/login')" class="btn_login">登录</a>
          <a href="javaScript:void(0)" @click="$goRoute('/register')" class="btn_register">注册</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {name: '首页', url: '/homeIndex', state: 'on'},
          {name: '找项目', url: '/productIndex', state: ''},
          {name: '找合伙人', url: '/partnerIndex', state: ''},
          {name: '关于我们', url: '/aboutIndex', state: ''},
          {name: '新闻公告', url: '/newsIndex', state: ''}
        ]
      }
    }
  }
</script>

<style>

</style>
