<template>
  <div id="news_banner" class="top_new">
    <ul>
      <li v-for="item in items" :key="item.id"><a href="javaScript:void(0)" @click="goNewsDetail(item.id)"><img :src="item.img" alt=""/><span>{{item.intro}}</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'news_banner',
  props: {
    items: {
      type: Array
    }
  },
  methods: {
    goNewsDetail(id){
      let url = '/news/detail/' + id
      this.$router.push(url)
    }
  }
}
</script>
