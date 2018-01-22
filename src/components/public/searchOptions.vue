<template>
  <div id="public_search_options">
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
    name: 'public_search_options',
    props: {
      titleName: {
        type: String
      },
      items: {
        type: Array
      }
    },
    data() {
      return {
        choose: 0
      }
    },
    methods: {
      getId(id) {
        this.choose = id;
        this.$emit('setId', id)
      }
    }
  }
</script>
