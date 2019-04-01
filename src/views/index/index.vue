<template>
    <div class="m-index">
      <!--<img src="/static/images/index-top-back.png" class="m-index-top-back" alt="">-->
      <div class="m-index-content">
        <section class="m-index-top">
          <div class="m-index-top-introduce">
            <h2>大行星</h2>
            <div >
              <p class="m-introduce-text">大行星的一些简介
                大行星的一些
                简介字数不要太多放在
                首页控制在六十字以内
                作为宣传简介</p>
            </div>
            <span class="m-now-btn" v-if="$store.state.platform == 'pc'">马上体验</span>


            <div class="m-top-code-box" v-if="$store.state.platform == 'pc'">
              <img src="" class="m-code-img" alt="">
            </div>
            <!--<p v-if="$store.state.platform == 'pc'">扫二维码微信登录</p>-->
          </div>
        </section>
        <div  v-if="$store.state.platform == 'mobile'">
          <span class="m-now-btn">马上体验</span>
          <p>
            <span class="m-now-btn">供应商入驻</span>
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
                <p class="m-text">会员管理的一句话简介
                  不要超过二十个字</p>
              <li>
                <img src="/static/images/function-equipment.png" class="m-function-icon" alt="">
                <h3>装备分销</h3>
                <p class="m-text">会员管理的一句话简介
                  不要超过二十个字</p>
              </li>
              <li>
                <img src="/static/images/function-equipment.png" class="m-function-icon" alt="">
                <h3>营销工具</h3>
                <p class="m-text">会员管理的一句话简介
                  不要超过二十个字</p>
              <li>
                <img src="/static/images/function-h5.png" class="m-function-icon" alt="">
                <h3>微信公众号</h3>
                <p class="m-text">会员管理的一句话简介
                  不要超过二十个字</p>
              </li>
              <li>
                <img src="/static/images/function-app.png" class="m-function-icon" alt="">
                <h3>APP</h3>
                <p class="m-text">会员管理的一句话简介
                  不要超过二十个字</p>
              <li>
                <img src="/static/images/function-data.png" class="m-function-icon" alt="">
                <h3>数据监控</h3>
                <p class="m-text">会员管理的一句话简介
                  不要超过二十个字</p>
              </li>
            </ul>
            <img src="/static/images/index-more-index.png" v-if="$store.state.platform == 'pc'" class="m-index-more-index" alt="">
          </div>



          <h3 class="m-title" id="product">加入大行星</h3>
          <img src="" class="m-activity-img" v-if="$store.state.platform == 'mobile'" alt="">
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
                <img src="" class="m-activity-img" alt="">
                <p>微信扫码查看活动详情</p>
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
            <textarea name="" v-model="create_message.UWmessage" id="" ></textarea>
           <div class="m-input-box">
             <div>
               <input type="text" v-model="create_message.UWname" placeholder="姓名">
               <input  v-model="create_message.UWtelphone" type="number" placeholder="联系电话">
               <input type="text" v-model="create_message.UWemail" placeholder="邮箱">
             </div>
             <span class="m-message-btn" @click="createMes">提交</span>
           </div>
          </div>
        </section>
        <footer class="m-footer" id="telephone">
          <img src="" class="m-footer-code" alt="">
          <div class="m-footer-text">
            <p>地址：大行星地址大行星地址行星地址大行星地址</p>
            <p v-if="$store.state.platform == 'pc'">
              <span>咨询电话：11111111111 </span>
              <span>邮箱地址：11111111111 @163.com</span>
            </p>
            <p v-if="$store.state.platform == 'mobile'">
              咨询电话：11111111111
            </p>
            <p v-if="$store.state.platform == 'mobile'">
             邮箱地址：11111111111 @163.com
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
              UWmessage:'',
              UWname:'',
              UWtelphone:'',
              UWemail:''
            }
          }
      },
      mounted(){
          if(this.$route.query.id){
            document.getElementById(this.$route.query.id).scrollIntoView();
          }
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
              CMid:item.cmid
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
          if(this.create_message.UWmessage == ''){
            this.$message({
              message: '请填写留言内容',
              type: 'warning'
            });
            return false;
          }else if(this.create_message.UWname == ''){
            this.$message({
              message: '请填写姓名',
              type: 'warning'
            });
            return false;
          }else if(this.create_message.UWtelphone == ''){
            this.$message({
              message: '请填写联系方式',
              type: 'warning'
            });
            return false;
          }else if(this.create_message.UWemail == ''){
            this.$message({
              message: '请填写邮箱',
              type: 'warning'
            });
            return false;
          }
          axios.post(api.create_club,this.create_message).then(res => {
            if(res.data.status == 200){
              this.create_message= {
                  UWmessage:'',
                  UWname:'',
                  UWtelphone:'',
                  UWemail:''
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
        }
      }
    }
</script>

<style scoped lang="less" >

</style>
