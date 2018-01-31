<template>
  <div id="register" class="login_bg" style="height: 875px;">
    <a href="javaScript:void(0)" @click="$goRoute('/homeIndex')" class="login_logo" title="返回首页" style="top:40px;"></a>
    <div class="login_cont" style="top:60px;">
      <div class="login_title">注册</div>
      <div class="login_input">
        <div><input type="text" placeholder="手机号码"></div>
        <div><input type="text" placeholder="短信验证码">
          <a href="javaScript:void(0)" :class="[ 'btn_get_mess' , { 'btn_send_mess' : isSendCode} ]"
             @click="_sendCode()"><!--class="btn_send_mess"-->
            {{btnGetMessage}}</a></div>
        <div><input type="password" placeholder="登录密码"></div>
        <div><input type="password" placeholder="确认密码"></div>
        <section>
          <div class="checkbox_xy">
            <input type="checkbox" checked value="1" id="checkboxXyInput" name=""/>
            <label for="checkboxXyInput"><span>我同意并遵守《<a href="###">服务协议</a>》</span></label>
          </div>
        </section>
        <a href="javaScript:void(0)"  @click="$goRoute('/registerSelectUserType')">注册</a>

      </div>
    </div>
    <div class="login_btm" style="top:60px;">客服热线：0571-85851253（工作时间 8:30-17:30）</div>

  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      isSendCode: false,
      btnGetMessage: '获取验证码'
    }
  },
  methods: {
    _sendCode () {
      let self = this
      if (!self.isSendCode) {
        self.isSendCode = true
        self._showWaitingTime()
      }
    },
    _showWaitingTime (seconds = 60) {
      let self = this
      if (seconds > 0) {
        self.btnGetMessage = seconds + '秒后重新获取'
        setTimeout(() => {
          self. _showWaitingTime(seconds - 1)
        }, 1000)
      } else {
        self.btnGetMessage = '重新获取'
        self.isSendCode = false
      }
    }
  }
}
</script>
