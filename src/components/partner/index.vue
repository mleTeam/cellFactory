<template>
  <div id="partner_index">
    <div id="product_index">
      <public-head></public-head>
      <div class="main">
        <div class="main_cont">
          <div class="m_search_left">
            <public-area @setAreaId="_setAreaId"></public-area>
            <public-work-experience @setWorkExperienceId="_setWorkExperienceId"></public-work-experience>
            <public-education @setEducation="_setEducation"></public-education>
          </div>
          <div class="m_search_right">
            <div class="main_search"><input type="text" placeholder="请输入项目关键字"><a href="javaScript:void(0)">搜索</a></div>
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
            <div id="paging1" class="page" style=" width:830px; margin:0 auto;"></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      <public-bottom></public-bottom>
    </div>
  </div>
</template>

<script>
  import PublicHead from 'components/public/head'
  import PublicBottom from 'components/public/bottom'
  import PublicArea from 'components/public/area'
  import PublicWorkExperience from 'components/public/workExperience'
  import PublicEducation from 'components/public/education'

  export default {
    name: 'partner_index',
    components: {
      PublicHead,
      PublicBottom,
      PublicArea,
      PublicWorkExperience,
      PublicEducation
    },
    data() {
      return {
        areaId: 0,
        workExperienceId: 0,
        educationId: 0,
        items: [
          {
            user_id: 0,
            user_name: '张寥寥',
            user_job: [{id: 1, name: 'UI设计师'}],
            user_job_tag: [{id: 1, name: 'UI设计'}, {id: 2, name: 'Photoshop'}, {id: 3, name: 'illustrator'}],
            user_education: '本科',
            user_workExperience: '3年工作经验'
          },
          {
            user_id: 1,
            user_name: '张寥寥',
            user_job: [{id: 1, name: 'UI设计师'}],
            user_job_tag: [{id: 1, name: 'UI设计'}, {id: 2, name: 'Photoshop'}, {id: 3, name: 'illustrator'}],
            user_education: '本科',
            user_workExperience: '3年工作经验'
          },
          {
            user_id: 2,
            user_name: '张寥寥',
            user_job: [{id: 1, name: 'UI设计师'}],
            user_job_tag: [{id: 1, name: 'UI设计'}, {id: 2, name: 'Photoshop'}, {id: 3, name: 'illustrator'}],
            user_education: '本科',
            user_workExperience: '3年工作经验'
          },
          {
            user_id: 2,
            user_name: '张寥寥',
            user_job: [{id: 1, name: 'UI设计师'}],
            user_job_tag: [{id: 1, name: 'UI设计'}, {id: 2, name: 'Photoshop'}, {id: 3, name: 'illustrator'}],
            user_education: '本科',
            user_workExperience: '3年工作经验'
          },
          {
            user_id: 2,
            user_name: '张寥寥',
            user_job: [{id: 1, name: 'UI设计师'}],
            user_job_tag: [{id: 1, name: 'UI设计'}, {id: 2, name: 'Photoshop'}, {id: 3, name: 'illustrator'}],
            user_education: '本科',
            user_workExperience: '3年工作经验'
          },
          {
            user_id: 3,
            user_name: '张寥寥',
            user_job: [{id: 1, name: 'UI设计师'}],
            user_job_tag: [{id: 1, name: 'UI设计'}, {id: 2, name: 'Photoshop'}, {id: 3, name: 'illustrator'}],
            user_education: '本科',
            user_workExperience: '3年工作经验'
          },
          {
            user_id: 4,
            user_name: '张寥寥',
            user_job: [{id: 1, name: 'UI设计师'}],
            user_job_tag: [{id: 1, name: 'UI设计'}, {id: 2, name: 'Photoshop'}, {id: 3, name: 'illustrator'}],
            user_education: '本科',
            user_workExperience: '3年工作经验'
          },
          {
            user_id: 5,
            user_name: '张寥寥',
            user_job: [{id: 1, name: 'UI设计师'}],
            user_job_tag: [{id: 1, name: 'UI设计'}, {id: 2, name: 'Photoshop'}, {id: 3, name: 'illustrator'}],
            user_education: '本科',
            user_workExperience: '3年工作经验'
          }
        ]
      }
    },
    mounted() {
      this._showPage()
    },
    methods: {
      _setAreaId(id) {
        this.areaId = id
        console.log('已选地区ID:' + this.areaId)
      },
      _setWorkExperienceId(id) {
        this.workExperienceId = id
        console.log('已选工作经验ID:' + this.workExperienceId)
      },
      _setEducation(id) {
        this.educationId = id
        console.log('已选工作经验ID:' + this.educationId)
      },
      _showPage() {
        let paging1 = $("#paging1")
        paging1.pagination({
          items: 10,
          itemsOnPage: 1,
          cssStyle: 'light-theme'
        })
      },
      _showInfo(id) {
        console.log('跳转用户信息,ID:' + id)
      }
    }
  }
</script>

<style>

</style>
