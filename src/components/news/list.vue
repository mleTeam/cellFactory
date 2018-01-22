<template>
  <div id="news_list" class="news_left_list">
    <ul>
      <li v-for="item in items">
        <a href="javaScript:void(0)">
          <img :src="item.img" width="240" height="180" alt=""/>
          <span>{{item.title}}</span>
          <p>{{item.intro}}</p>
          <b>{{item.date}}</b>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'news_list',
    props: {
      items: {
        type: Array
      }
    }
  }
</script>
