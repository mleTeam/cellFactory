<template>
  <div id="home_index">
    <public-head></public-head>
    <home-page></home-page>
  </div>
</template>

<script>
export default {
  name: 'home_index',
  components: {
    PublicHead: resolve => require(['components/public/head'], resolve),
    HomePage: resolve => require(['components/home/page'], resolve)
  }
}
</script>
