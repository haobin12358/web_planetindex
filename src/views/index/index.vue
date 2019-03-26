<template>
    <div class="m-index">
      <img src="/static/images/index-top-back.png" class="m-index-top-back" alt="">
      <div class="m-index-content">
        <section class="m-index-top">
          <div class="m-top-nav">
            <ul>
              <li class="active">
                首页
              </li>
              <li>大行星介绍</li>
            </ul>
            <span class="m-supper-btn">·供应商入驻</span>
          </div>
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
          <h3 class="m-title">我们为您提供更多功能</h3>
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

          <h3 class="m-title">加入大行星</h3>
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

          <h3 class="m-title">行星精选圈子</h3>
          <p class="m-title-intro">分享我的户外生活</p>
          <div class="m-circle-box">
            <el-carousel :interval="400000" type="card" height="580px">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </section>
      </div>
      <img src="/static/images/index-center-back.png" class="m-index-center-back" alt="">
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less" >

</style>
