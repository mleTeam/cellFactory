<template>
  <div id="public_paging" class="page_list">
    <ul>
      <li @click.prevent="prev"><a href="javascript:;" :class="{ no_first: 1 === cur}"><span></span></a></li>
      <li @click.prevent="first"><a :class="{ on: 1 === cur}"><span>1</span></a></li>
      <li v-if="showPrevMore"><a href="javascript:;"><span>...</span></a></li>
      <li v-for="page in pagesArray" @click.prevent="choose(page)" :key="page">
        <a href="javascript:;" :class="{ on: page === cur}"><span>{{page}}</span></a>
      </li>
      <li v-if="showNextMore"><a href="javascript:;"><span>...</span></a></li>
      <li @click.prevent="last" v-if="pages > 1"><a :class="{ on: pages === cur}"><span>{{pages}}</span></a></li>
      <li @click.prevent="next"><a href="javascript:;" :class="{ no_last: pages === cur}"><span></span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'public_paging',
  data () {
    return {
      cur: this.pageIndex,
      size: this.pageTotal,
      limit: this.pageSize,
      showPrevMore: false,
      showNextMore: false
    }
  },
  props: {
    //数据总数
    pageTotal: {
      type: Number,
      default: 0
    },
    //每页显示的数量
    pageSize: {
      type: Number,
      default: 10
    },
    //当前页
    pageIndex: {
      type: Number,
      default: 1
    },
    //活动的页码最多显示数
    groups: {
      type: Number,
      default: 5
    },
    //回调函数
    jump: {
      type: Function
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.size / this.limit)
    },
    pagesArray () {
      let self = this
      const array = []
      const perPages = self.groups
      const pageCount = self.pages
      let current = self.cur
      const _offset = (perPages - 1) / 2

      const offset = {
        start: current - _offset,
        end: current + _offset
      }

      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start)
        offset.start = 1
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount)
        offset.end = pageCount
      }
      if (offset.start < 1) offset.start = 1

      this.showPrevMore = offset.start > 2
      this.showNextMore = offset.end < pageCount - 1

      if (offset.start === 1) {
        offset.start = 2
      }
      if (offset.end === self.pages) {
        offset.end = self.pages - 1
      }

      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i)
      }

      return array
    }
  },
  methods: {
    choose (page) {
      if (this.cur !== page) {
        this.cur = page
        this.jump(page)
      }
    },
    prev () {
      if (this.cur > 1) {
        this.choose(this.cur - 1)
      }
    },
    next () {
      if (this.cur < this.pages) {
        this.choose(this.cur + 1)
      }
    },
    first () {
      if (this.cur !== 1) {
        this.choose(1)
      }
    },
    last () {
      if (this.cur !== this.pages) {
        this.choose(this.pages)
      }
    }
  },
  watch: {
    pageIndex (val = 1) {
      this.cur = val
    },
    pageSize (val = 10) {
      this.limit = val
    },
    pageTotal (val = 0) {
      this.size = val
    }
  }
}
</script>
