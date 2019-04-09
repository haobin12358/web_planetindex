<template>
    <div class="m-index" >
      <!--<img src="/static/images/index-top-back.png" class="m-index-top-back" alt="">-->
      <div class="m-index-content">
        <section class="m-index-top" id="index">
          <div class="m-index-top-introduce">
            <h2>大行星</h2>
            <div class="m-index-intro" v-if="$store.state.platform == 'pc'">
              <p class="m-introduce-text">
                行星精选,  优品户外</p>
<!--              <p class="m-introduce-text">-->
<!--                </p>-->
              <p class="m-introduce-text">
                伴行天下,  共享旅途
                </p>
<!--              <p class="m-introduce-text">-->
<!--                -->
<!--              </p>-->
            </div>
            <div class="m-index-intro" v-else>
              <p class="m-introduce-text">
                行星精选</p>
              <p class="m-introduce-text">
                优品户外
                </p>
              <p class="m-introduce-text">
                伴行天下
              </p>
              <p class="m-introduce-text">
                 共享旅途
              </p>
            </div>

            <div>
              <span class="m-now-btn" v-if="$store.state.platform == 'pc'" @click="nowUse">马上体验</span>
            </div>



            <div class="m-top-code-box" v-if="$store.state.platform == 'pc'">
              <img src="" class="m-code-img" alt="">
            </div>
            <!--<p v-if="$store.state.platform == 'pc'">扫二维码微信登录</p>-->
          </div>
        </section>
        <div  v-if="$store.state.platform == 'mobile'">
          <span class="m-now-btn" @click="nowUse">马上体验</span>
          <p>
            <span class="m-now-btn" @click="changeSupper">供应商入驻</span>
          </p>
        </div>
        <section class="m-index-center">
          <span class="m-line"></span>
          <img src="/static/images/index-more-index.png" v-if="$store.state.platform == 'mobile'" class="m-index-more-index" alt="">
          <h3 class="m-title" id="introduce">我们为您提供更多功能</h3>
          <div class="m-more-function">
            <ul class="m-more-function-ul">
              <li>
                <img src="/static/images/function-member.png" class="m-function-icon" alt="">
                <h3>会员管理</h3>
                <p class="m-text">团队数据一览无余</p>
              <li>
                <img src="/static/images/function-equipment.png" class="m-function-icon" alt="">
                <h3>装备分销</h3>
                <p class="m-text">谁说躺着不能赚钱--致新时代</p>
              </li>
              <li>
                <img src="/static/images/function-equipment.png" class="m-function-icon" alt="">
                <h3>营销工具</h3>
                <p class="m-text">最全、最新的分销黑科技皆汇于此</p>
              <li>
                <img src="/static/images/function-h5.png" class="m-function-icon" alt="">
                <h3>微信公众号</h3>
                <p class="m-text">户外风光尽收眼底，随时随地放飞自我</p>
              </li>
              <li>
                <img src="/static/images/function-app.png" class="m-function-icon" alt="">
                <h3>APP</h3>
                <p class="m-text">自带沉浸模式黑科技，享受一站式户外之旅</p>
              <li>
                <img src="/static/images/function-data.png" class="m-function-icon" alt="">
                <h3>数据监控</h3>
                <p class="m-text">掌握大数据时代浪潮</p>
              </li>
            </ul>
            <img src="/static/images/index-more-index.png" v-if="$store.state.platform == 'pc'" class="m-index-more-index" alt="">
          </div>



          <h3 class="m-title" id="product">加入大行星</h3>
          <img :src="activity_img" class="m-activity-img" v-if="$store.state.platform == 'mobile'" alt="">
          <div class="m-add-product">
            <div class="m-product">
              <ul class="m-product-ul">
                <template v-for="(item,index) in product_list">
                  <li >
                    <img :src="item.prmainpic" class="m-product-img" alt="">
                  </li>
                </template>


                <li class="m-code">
                  <img src="/static/images/coce_index.png" class="m-code-img" alt="">
                  <p  v-if="$store.state.platform == 'pc'">微信扫码查看商品</p>
                </li>
              </ul>
              <div class="m-activity-img-box" v-if="$store.state.platform == 'pc'">
                <img :src="activity_img" class="m-activity-img" alt="">
                <!--<p>微信扫码查看活动详情</p>-->
              </div>
            </div>
            <!--<div class="m-wei-code-box">-->
              <!--<div class="m-one">-->
                <!--<img src="" class="m-code-img" alt="">-->
                <!--<p>扫二维码微信登录</p>-->
              <!--</div>-->
            <!--</div>-->
          </div>

          <h3 class="m-title" id="circle">行星精选圈子</h3>
          <p class="m-title-intro">分享我的户外生活</p>
          <div class="m-circle-box">
            <el-carousel :interval="400000" type="card" v-if="$store.state.platform == 'pc'" height="580px">
              <el-carousel-item v-for="item in circle_list" :key="item.neid">
                <div class="m-circle-detail" @click="toCircle(item)">
                  <div class="m-circle-title">
                    <span>{{item.netitle}}</span>
                    <span class="m-time">{{item.createtime}}</span>
                  </div>
                  <img :src="item.mainpic" class="m-circle-img" alt="">
                  <p>{{item.netext || '大行星精选'}}</p>
                </div>
              </el-carousel-item>
            </el-carousel>
            <div v-if="$store.state.platform == 'mobile'" class="m-circle-scroll">
              <div class="m-circle-detail" v-for="(item,index) in circle_list" @click="toCircle(item)">
                <div class="m-circle-title">
                  <span>{{item.netitle}}</span>
                  <span class="m-time">{{item.createtime.slice(0,10)}}</span>
                </div>
                <img :src="item.mainpic" class="m-circle-img" alt="">
                <p>item</p>
              </div>
            </div>

          </div>

          <h3 class="m-title" id="partner">他们已经加入大行星</h3>
          <p class="m-title-intro">分享我的户外生活</p>
          <div class="m-brand-box">
            <ul>
              <template v-for="(item,index) in  brand_list">
                <li>
                  <img :src="item.pblogo" class="m-brand-img" alt="">
                </li>
                <li class="m-brand-text">
                  <h3>{{item.pbname}}</h3>
                  <p>{{item.pbdesc}}</p>
                </li>
              </template>
            </ul>
          </div>

          <h3 class="m-title" id="notice">大行星公告</h3>
          <div class="m-notice-box">
            <ul v-if="$store.state.platform == 'pc'">
              <li v-for="(item,index) in notice_list" @click="toNoticeDetail(item)">
                <h3>{{item.cmtitle}}</h3>
                <p class="m-time">{{item.createtime.slice(0,10)}}</p>
                <div class="m-notice-text" v-html="item.cmmessage"></div>
              </li>
            </ul>
            <ul v-if="$store.state.platform == 'mobile'">
              <li v-for="(item,index) in notice_list" @click="toNoticeDetail(item)">
               <span class="m-title">{{index +1 }}.{{item.cmtitle}}</span>
                <span class="m-time">{{item.createtime.slice(0,10)}}</span>
              </li>
            </ul>
            <p class="m-notice-more">
              <span @click="changeRoute('/notice/index')">历史公告</span>
            </p>
          </div>

          <h3 class="m-title" id="message">在线留言</h3>
          <div class="m-message-box">
            <textarea name="" v-model="create_message.uwmessage" id="" ></textarea>
           <div class="m-input-box">
             <div>
               <input type="text" v-model="create_message.uwname" placeholder="姓名">
               <input  v-model="create_message.uwtelphone" type="number" placeholder="联系电话">
               <input type="text" v-model="create_message.uwemail" placeholder="邮箱">
             </div>
             <span class="m-message-btn" @click="createMes">提交</span>
           </div>
          </div>
        </section>
        <footer class="m-footer" id="telephone">
          <img src="" class="m-footer-code" alt="">
          <div class="m-footer-text">
            <p>地址：杭州市富阳区富闲路银湖创新中心6号楼16层</p>
            <p v-if="$store.state.platform == 'pc'">
              <span>咨询电话：0571-82812523 </span>
              <span>邮箱地址：kuahu123@163.com</span>
            </p>
            <p v-if="$store.state.platform == 'mobile'">
              咨询电话：0571-82812523
            </p>
            <p v-if="$store.state.platform == 'mobile'">
             邮箱地址：kuahu123@163.com
            </p>
          </div>
        </footer>
      </div>
      <!--<img src="/static/images/index-center-back.png" class="m-index-center-back" alt="">-->
    </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  import api from '../../api/api';
  import {Toast} from 'element-ui'
    export default {
        name: "index",
      data(){
          return{
            brand_list:[],
            product_list:[],
            circle_list:[],
            notice_list:[],
            create_message: {
              uwmessage:'',
              uwUWname:'',
              uwtelphone:'',
              uwemail:''
            },
            activity_img:'/static/images/activity.png'
          }
      },
      mounted(){
          if(this.$route.query.id){
            document.getElementById(this.$route.query.id).scrollIntoView();
          }
        window.addEventListener('scroll', this.handleScroll)

      },
      created(){
          this.getBrand();
          this.getCircle();
          this.getList();
      },
      methods:{
        //  去圈子
        toCircle(item){
          this.$router.push({path:'/circle/detail',query:{neid:item.neid}});
        },
        //去公告列表
        changeRoute(v){
          this.$router.push(v);
        },
        //去公告详情
        toNoticeDetail(item){
          this.$router.push({path:'/notice/detail',query:{
              cmid:item.cmid
            }})
        },
        //获取品牌
        getBrand(){
          axios.get(api.brand_recommend,{
            params:{
              page_num:1,
              page_size:5
            }
          }).then(res => {
            if(res.data.status == 200){
              this.brand_list = res.data.data.brands;
              this.product_list = res.data.data.recommend_for_you;
            }
          })
        },
        //获取圈子
        getCircle(){
          axios.get(api.get_all_news,{
            params:{
              itid:'isrecommend',
              page_num:1,
              page_size:12
            }
          }).then(res => {
            if(res.data.status == 200){
              this.circle_list = res.data.data;
            }
          })
        },
        //获取公告
        getList(){
          axios.get(api.club_list,{
            params:{
              page_num:1,
              page_size:3
            }
          }).then(res => {
            if(res.data.status == 200){
              this.notice_list = res.data.data;
            }
          })
        },
      //  留言
        createMes(){
          if(this.create_message.uwmessage == ''){
            this.$message({
              message: '请填写留言内容',
              type: 'warning'
            });
            return false;
          }else if(this.create_message.uwname == ''){
            this.$message({
              message: '请填写姓名',
              type: 'warning'
            });
            return false;
          }else if(this.create_message.uwtelphone == ''){
            this.$message({
              message: '请填写联系方式',
              type: 'warning'
            });
            return false;
          }else if(this.create_message.uwemail == ''){
            this.$message({
              message: '请填写邮箱',
              type: 'warning'
            });
            return false;
          }
          axios.post(api.create_club,this.create_message).then(res => {
            if(res.data.status == 200){
              this.create_message= {
                  uwmessage:'',
                uwname:'',
                  uwtelphone:'',
                uwemail:''
              };
              this.$message({
                message: res.data.message,
                type: 'success'
              });
            }else{
              this.$message({
                message: res.data.message,
                type: 'warning'
              });
            }
          })
        },
        //滚动
        handleScroll() {
          console.log('sdsds')
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(scrollTop >0){
            this.$store.state.navBar_fixed = true
          }else{
            this.$store.state.navBar_fixed = false
            this.$store.state.select_name = '首页'
          }
          for(let i in this.$store.state.nav_list){
            if(this.$store.state.nav_list[i].url.indexOf('/') == -1){
              let offsetTop = document.querySelector('#' + this.$store.state.nav_list[i].url).offsetTop
              if (scrollTop >=  offsetTop) {
                // this.searchBarFixed = true
                this.$store.state.select_name = this.$store.state.nav_list[i].name;
              }
            }

          }

        },
      //  马上体验
        nowUse(){
          document.getElementById('product').scrollIntoView();
        },
        //供应商入驻
        changeSupper(){
          this.$store.state.select_name = '';
          this.$router.push('/supper/index')
        },
      },
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
      },
    }
</script>

<style scoped lang="less" >

</style>
