<template>
  <div id="product_list">
    <div class="search_pro_list">
      <ul>
        <li v-for="item in items" :key="item.product_id">
          <div><a href="javaScript:void(0)">{{item.product_name}}</a><span
            :class="{ status_send: item.product_state == 2 }">{{item.product_state | productState}}</span></div>
          <p><b v-for="tag in item.product_tag" :key="tag.id">{{tag.name}}</b></p>
          <b>{{item.product_address}}</b>
          <font><i>已申请<strong>{{item.product_apply_count}}</strong>人</i><i>已浏览<strong>{{item.product_view_count}}</strong>次</i></font>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product_list',
  props: {
    items: {
      type: Array
    }
  },
  filters: {
    productState: function (value) {
      if (value == 1) {
        return '招募中'
      } else if (value == 2) {
        return '已投递'
      }
    }
  }
}
</script>
