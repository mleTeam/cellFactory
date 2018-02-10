<template>
    <div id="news">
      <public-head></public-head>
      <router-view></router-view>
      <public-bottom></public-bottom>
    </div>
</template>

<script>
export default {
  name: 'news',
  components: {
    PublicHead: resolve => require(['components/public/head'], resolve),
    PublicBottom: resolve => require(['components/public/bottom'], resolve)
  }
}
</script>
