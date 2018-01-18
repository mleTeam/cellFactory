<template>
  <div id="home_index">
    <public-head></public-head>
    <home-page></home-page>
  </div>
</template>

<script>
  import PublicHead from 'components/public/head'
  import HomePage from 'components/home/page'

  export default {
    name: 'home_index',
    components: {
      PublicHead,
      HomePage
    }
  }
</script>

<style>

</style>
