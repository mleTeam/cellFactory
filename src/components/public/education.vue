<template>
    <div id="public_education">
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
    name: 'public_education',
    data() {
      return {
        titleName: '学历',
        items: [
          {name: '全部', id: 0},
          {name: '初中及以下', id: 1},
          {name: '高中/中专', id: 2},
          {name: '大专', id: 3},
          {name: '本科', id: 4},
          {name: '硕士', id: 5},
          {name: '博士', id: 5}
        ],
        choose: 0
      }
    },
    methods: {
      getId(id) {
        this.choose = id;
        this.$emit('setEducation', id)
      }
    }
  }
</script>

<style>

</style>
