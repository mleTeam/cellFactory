<template>
  <div id="public_workExperience">
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
    name: 'public_workExperience',
    data() {
      return {
        titleName: '工作经验',
        items: [
          {name: '全部', id: 0},
          {name: '无经验', id: 1},
          {name: '1-3年', id: 2},
          {name: '3-5年', id: 3},
          {name: '5-10年', id: 4},
          {name: '10年以上', id: 5}
        ],
        choose: 0
      }
    },
    methods: {
      getId(id) {
        this.choose = id;
        this.$emit('setWorkExperienceId', id)
      }
    }
  }
</script>

<style>

</style>
