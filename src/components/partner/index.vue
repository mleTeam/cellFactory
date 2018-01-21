<template>
  <div id="partner_index">
    <div id="product_index">
      <public-head></public-head>
      <div class="main">
        <div class="main_cont">
          <div class="m_search_left">
            <public-search-options @setId="_setAreaId" :items="area.items" :titleName="area.titleName"></public-search-options>
            <public-search-options @setId="_setWorkExperienceId" :items="workExperience.items" :titleName="workExperience.titleName"></public-search-options>
            <public-search-options @setId="_setEducation" :items="education.items" :titleName="education.titleName"></public-search-options>
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
  import PublicSearchOptions from 'components/public/searchOptions'

  export default {
    name: 'partner_index',
    components: {
      PublicHead,
      PublicBottom,
      PublicSearchOptions,
    },
    data() {
      return {
        areaId: 0,
        workExperienceId: 0,
        educationId: 0,
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
        workExperience: {
          titleName: '工作经验',
          items: [
            {name: '全部', id: 0},
            {name: '无经验', id: 1},
            {name: '1-3年', id: 2},
            {name: '3-5年', id: 3},
            {name: '5-10年', id: 4},
            {name: '10年以上', id: 5}
          ]
        },
        education: {
          titleName: '学历',
          items: [
            {name: '全部', id: 0},
            {name: '初中及以下', id: 1},
            {name: '高中/中专', id: 2},
            {name: '大专', id: 3},
            {name: '本科', id: 4},
            {name: '硕士', id: 5},
            {name: '博士', id: 5}
          ]
        },
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
        console.log('已选学历ID:' + this.educationId)
      },
      _showPage() {
        let paging1 = $("#paging1")
        paging1.pagination({
          items: 15,
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
