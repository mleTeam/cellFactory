<template>
  <div id="news_notice" class="notice_list">
    <ul>
      <li v-for="item in items" :key="item.id">
        <a href="javaScript:void(0)"><span>{{item.title}}</span>
          <font>{{item.date}}</font>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'news_notice',
    props: {
      items: {
        type: Array
      }
    }
  }
</script>
