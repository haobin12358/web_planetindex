<template>
    <div class="m-index">
      <img src="/static/images/index-top-back.png" class="m-index-top-back" alt="">
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
            <span class="m-now-btn">马上体验</span>
            <div class="m-top-code-box">
              <img src="" class="m-code-img" alt="">
            </div>
            <p>扫二维码微信登录</p>
          </div>
        </section>
        <section class="m-index-center">
          <span class="m-line"></span>
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
            <img src="/static/images/index-more-index.png" class="m-index-more-index" alt="">
          </div>

          <h3 class="m-title" id="product">加入大行星</h3>
          <div class="m-add-product">
            <div class="m-product">
              <ul class="m-product-ul">
                <li>
                  <img src="" class="m-product-img" alt="">
                </li>
                <li>
                  <img src="" class="m-product-img" alt="">
                </li>
                <li>
                  <img src="" class="m-product-img" alt="">
                </li>
                <li>
                  <img src="" class="m-product-img" alt="">
                </li>
                <li>
                  <img src="" class="m-product-img" alt="">
                </li>
                <li class="m-code">
                  <img src="" class="m-code-img" alt="">
                  <p>微信扫码查看商品</p>
                </li>
              </ul>
              <div class="m-activity-img-box">
                <img src="" class="m-activity-img" alt="">
                <p>微信扫码查看活动详情</p>
              </div>
            </div>
            <div class="m-wei-code-box">
              <div class="m-one">
                <img src="" class="m-code-img" alt="">
                <p>扫二维码微信登录</p>
              </div>
            </div>
          </div>

          <h3 class="m-title" id="circle">行星精选圈子</h3>
          <p class="m-title-intro">分享我的户外生活</p>
          <div class="m-circle-box">
            <el-carousel :interval="400000" type="card" height="580px">
              <el-carousel-item v-for="item in 6" :key="item">
                <div class="m-circle-detail" @click="toCircle">
                  <div class="m-circle-title">
                    <span>圈子标题1</span>
                    <span class="m-time">2019/03/20</span>
                  </div>
                  <img src="" class="m-circle-img" alt="">
                  <p>公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内…</p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>

          <h3 class="m-title" id="partner">他们已经加入大行星</h3>
          <p class="m-title-intro">分享我的户外生活</p>
          <div class="m-brand-box">
            <ul>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
              <li>
                <img src="" class="m-brand-img" alt="">
              </li>
              <li class="m-brand-text">
                <h3>品牌名称</h3>
                <p>介绍</p>
              </li>
            </ul>
          </div>

          <h3 class="m-title" id="notice">大行星公告</h3>
          <div class="m-notice-box">
            <ul>
              <li>
                <h3>标题</h3>
                <p class="m-time">2018/05/14</p>
                <div class="m-notice-text">公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内内容公告内</div>
              </li>
              <li>
                <h3>标题</h3>
                <p class="m-time">2018/05/14</p>
                <div class="m-notice-text">公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内内容公告内</div>
              </li>
              <li>
                <h3>标题</h3>
                <p class="m-time">2018/05/14</p>
                <div class="m-notice-text">公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内容公告内内容公告内</div>
              </li>
            </ul>
            <p class="m-notice-more">
              <span>历史公告</span>
            </p>
          </div>

          <h3 class="m-title" id="message">在线留言</h3>
          <div class="m-message-box">
            <textarea name="" id="" ></textarea>
           <div class="m-input-box">
             <div>
               <input type="text" placeholder="姓名">
               <input type="text" placeholder="姓名">
               <input type="text" placeholder="姓名">
             </div>
             <span class="m-message-btn">提交</span>
           </div>
          </div>
          <footer class="m-footer">
            <img src="" class="m-footer-code" alt="">
            <div class="m-footer-text">
              <p>地址：大行星地址大行星地址行星地址大行星地址</p>
              <p>
                <span>咨询电话：11111111111 </span>
                <span>邮箱地址：11111111111 @163.com</span>
              </p>
            </div>
          </footer>
        </section>

      </div>
      <img src="/static/images/index-center-back.png" class="m-index-center-back" alt="">
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "index",
      mounted(){
          if(this.$route.query.id){
            document.getElementById(this.$route.query.id).scrollIntoView();
          }
      },
      methods:{
        toCircle(){
          this.$router.push('/circle/detail');
        }
      }
    }
</script>

<style scoped lang="less" >

</style>
