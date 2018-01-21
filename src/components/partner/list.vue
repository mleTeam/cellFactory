<template>
  <div id="partner_list">
    <div class="search_partner_list">
      <ul>
        <li v-for="item in items" :key="item.id">
          <div><a href="javaScript:void(0)" @click="_showInfo(item.user_id)">{{item.user_name}} [ UI设计师 ]</a>
          </div>
          <p><b v-for="job_tag in item.user_job_tag">{{job_tag.name}}</b></p>
          <font><i>{{item.user_education}}</i><i>|</i><i>{{item.user_workExperience}}</i></font>
          <a href="javaScript:void(0)" class="btn_zm">立即招募</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'partner_list',
    props: {
      items: {
        type: Array
      }
    }
  }
</script>

<style>

</style>
