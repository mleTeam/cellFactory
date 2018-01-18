<template>
  <div id="product_index">
      <public-head></public-head>
      <div class="main">
        <div class="main_cont">
          <div class="m_search_left">
            <public-area @setAreaId="setAreaId"></public-area>
            <public-industry-sector @setSectorId="setSectorId"></public-industry-sector>
          </div>
        </div>
      </div>
      <public-bottom></public-bottom>
  </div>
</template>

<script>
  import PublicHead from 'components/public/head'
  import PublicBottom from 'components/public/bottom'
  import PublicArea from 'components/public/area'
  import PublicIndustrySector from 'components/public/industrySector'

  export default {
    name: 'product_index',
    data() {
      return {
        areaId:0,
        sectorId:0
      }
    },
    components: {
      PublicHead,
      PublicBottom,
      PublicArea,
      PublicIndustrySector
    },
    methods: {
      setAreaId(id){
        this.areaId = id
        console.log('已选地区ID:'+this.areaId)
      },
      setSectorId(id){
        this.sectorId = id
        console.log('已选行业领域ID:'+this.sectorId)
      }
    }
  }
</script>

<style>

</style>
