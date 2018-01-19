<template>
  <div id="area">
    <div class="sort_menu">
      <div class="sort_title">{{ titleName }}</div>
      <ul>
        <li v-for="item in items">
          <a href="javaScript:void(0)" @click="getId(item.id)" :key="item.id" :class="{ on: item.id == choose }">
            {{item.name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        titleName: '所在地区',
        items: [
          {name: '全部', id: 0},
          {name: '杭州', id: 1},
          {name: '上海', id: 2},
          {name: '深圳', id: 3},
          {name: '武汉', id: 4},
          {name: '成都', id: 5},
          {name: '苏州', id: 6},
          {name: '重庆', id: 7},
          {name: '广州', id: 8},
          {name: '济南', id: 9},
          {name: '厦门', id: 10},
          {name: '南京', id: 11}
        ],
        choose: 0
      }
    },
    methods: {
      getId(id) {
        this.choose = id;
        this.$emit('setAreaId', id)
      }
    }
  }
</script>

<style>

</style>
