<template>
  <div id="product_index">
    <public-head></public-head>
    <div class="main">
      <div class="main_cont">
        <div class="m_search_left">
          <public-search-options :getId="_setAreaId" :items="area.items"
                                 :titleName="area.titleName"></public-search-options>
          <public-search-options :getId="_setSectorId" :items="industrySector.items"
                                 :titleName="industrySector.titleName"></public-search-options>
        </div>
        <div class="m_search_right">
          <div class="main_search"><input type="text" placeholder="请输入项目关键字"><a href="javaScript:void(0)">搜索</a></div>
          <product-list :items="items"></product-list>
          <paging :pageTotal="size" :pageSize="limit" :jump="_choosePage" :pageIndex="cur"></paging>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <public-bottom></public-bottom>
  </div>
</template>

<script>
  import PublicHead from 'components/public/head'
  import PublicBottom from 'components/public/bottom'
  import PublicSearchOptions from 'components/public/searchOptions'
  import ProductList from 'components/product/list'
  import Paging from 'components/public/paging'

  export default {
    name: 'product_index',
    components: {
      PublicHead,
      PublicBottom,
      PublicSearchOptions,
      ProductList,
      Paging
    },
    data() {
      return {
        areaId: 0,
        sectorId: 0,
        area: {
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
          ]
        },
        industrySector: {
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
          ]
        },
        items: [
          {
            product_id: 1,
            product_name: '金融大数据智能导航系统平台',
            product_tag: [{name: '程序开发'}, {name: 'ui设计'}, {name: '系统测试'}],
            product_address: '杭州市滨江xxx孵化基地',
            product_apply_count: 232,
            product_view_count: 56200,
            product_state: 1
          },
          {
            product_id: 2,
            product_name: '美国硅谷专利设计的运动防尘呼吸口罩',
            product_tag: [{name: '程序开发'}, {name: 'ui设计'}, {name: '系统测试'}],
            product_address: '杭州市滨江xxx孵化基地',
            product_apply_count: 9,
            product_view_count: 153,
            product_state: 2
          },
          {
            product_id: 3,
            product_name: '大学生校园电影院',
            product_tag: [{name: '程序开发'}, {name: 'ui设计'}, {name: '系统测试'}],
            product_address: '暂无',
            product_apply_count: 23,
            product_view_count: 1200,
            product_state: 2
          },
          {
            product_id: 4,
            product_name: '金融大数据智能导航系统平台',
            product_tag: [{name: '程序开发'}, {name: 'ui设计'}, {name: '系统测试'}],
            product_address: '杭州市滨江xxx孵化基地',
            product_apply_count: 232,
            product_view_count: 56200,
            product_state: 1
          },
          {
            product_id: 5,
            product_name: '美国硅谷专利设计的运动防尘呼吸口罩',
            product_tag: [{name: '程序开发'}, {name: 'ui设计'}, {name: '系统测试'}],
            product_address: '杭州市滨江xxx孵化基地',
            product_apply_count: 9,
            product_view_count: 153,
            product_state: 2
          },
          {
            product_id: 6,
            product_name: '大学生校园电影院',
            product_tag: [{name: '程序开发'}, {name: 'ui设计'}, {name: '系统测试'}],
            product_address: '暂无',
            product_apply_count: 23,
            product_view_count: 1200,
            product_state: 2
          },
          {
            product_id: 7,
            product_name: '金融大数据智能导航系统平台',
            product_tag: [{name: '程序开发'}, {name: 'ui设计'}, {name: '系统测试'}],
            product_address: '杭州市滨江xxx孵化基地',
            product_apply_count: 232,
            product_view_count: 56200,
            product_state: 1
          },
          {
            product_id: 8,
            product_name: '美国硅谷专利设计的运动防尘呼吸口罩',
            product_tag: [{name: '程序开发'}, {name: 'ui设计'}, {name: '系统测试'}],
            product_address: '杭州市滨江xxx孵化基地',
            product_apply_count: 9,
            product_view_count: 153,
            product_state: 2
          }
        ],
        size: 200,
        limit: 10,
        cur: 1
      }
    },
    methods: {
      _setAreaId(id) {
        this.areaId = id
        console.log('已选地区ID:' + this.areaId)
      },
      _setSectorId(id) {
        this.sectorId = id
        console.log('已选行业领域ID:' + this.sectorId)
      },
      _choosePage(page) {
        console.log('跳转第' + page + '页')
      }
    }
  }
</script>
