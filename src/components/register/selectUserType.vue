<template>
  <div id="register_selectUserType" class="login_bg" style="height: 875px;">
    <a href="javaScript:void(0)" @click="$goRoute('/homeIndex')" class="login_logo" title="返回首页"></a>
    <div class="login_cont select_id">
      <div class="login_title">请选择身份</div>
      <div class="id_selected">
        <ul>
          <li>
            <span>我要发布项目，想要寻找合伙人、投资人</span>
            <a href="../startups/startups_inf.html">我是创业者</a>
          </li>
          <li>
            <span>我有一技之长，想要技术入股，合伙创业</span>
            <a href="../partner/partner_inf.html">我是合伙人</a>
          </li>
          <li>
            <span>我有资金，想要投入一些项目，获取回报</span>
            <a href="###">我是投资者</a>
            <i>还在开发中，咨询电话：0571-88888888</i>
          </li>
        </ul>
      </div>

    </div>
    <div class="login_btm">客服热线：0571-85851253（工作时间 8:30-17:30）</div>

  </div>
</template>

<script>
export default {
  name: 'register_selectUserType'
}
</script>
