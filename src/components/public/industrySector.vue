<template>
    <div id="industrySector">
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
        titleName: '行业领域',
        items: [
          {name: '全部', id: 0},
          {name: '金融', id: 1},
          {name: '企业服务', id: 2},
          {name: '体育', id: 3},
          {name: '技术', id: 4},
          {name: '消费', id: 5},
          {name: '文化娱乐', id: 6},
          {name: '教育', id: 7},
          {name: '汽车交通', id: 8},
          {name: '人工智能', id: 9},
          {name: '二次元', id: 10},
          {name: '其他', id: 11}
        ],
        choose:0
      }
    },
    methods: {
      getId(id) {
        this.choose = id;
        this.$emit('setSectorId', id)
      }
    }
  }
</script>

<style>

</style>
