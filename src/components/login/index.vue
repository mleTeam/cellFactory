<template>
  <div id="login_index" class="login_bg" style="height: 875px;">
    <a href="javaScript:void(0)" @click="$goRoute('/homeIndex')" class="login_logo" title="返回首页"></a>
    <div class="login_cont">
      <div class="login_title">登录</div>
      <div class="login_input">
        <div><input type="text" placeholder="手机号码"></div>
        <div><input type="password" placeholder="登录密码"></div>
        <a href="javaScript:void(0)">登录</a>
        <div class="login_other"><span>没有账号？<a href="javaScript:void(0)" @click="$goRoute('/register')">立即注册&gt;&gt;</a></span><a href="javaScript:void(0)">忘记密码？</a></div>
      </div>
    </div>
    <div class="login_btm">客服热线：0571-85851253（工作时间 8:30-17:30）</div>

  </div>

</template>

<script>
export default {
  name: 'login_index'
}
</script>
