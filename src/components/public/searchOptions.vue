<template>
  <div id="public_search_options">
    <div class="sort_menu">
      <div class="sort_title">{{ titleName }}</div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <a href="javaScript:void(0)" @click="changeId(item.id)" :key="item.id" :class="{ on: item.id == choose }">
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
    },
    getId: {
      type: Function
    }
  },
  data() {
    return {
      choose: 0
    }
  },
  methods: {
    changeId(id) {
      this.choose = id
      this.getId(id)
    }
  }
}
</script>
