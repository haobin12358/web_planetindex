<template>
    <div class="m-supper-page">

      <el-form ref="form" :model="form" label-width="120px" label-position="left">
        <div v-if="!secondStep">
          <h3 class="m-title">资料填写</h3>
          <el-form-item label="手机号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="供应商名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="供应商联系人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="供应商联系电话">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="供应商邮箱">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="供应商地址">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <div   class="m-text-center" >
            <span class="m-supper-btn" @click="secondStep = true">下一步</span>
          </div>

        </div>
        <div v-else>
          <el-form-item label="银行卡号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="银行卡开户行">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="合同">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <span class="m-alert">请上传合同图片</span>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="营业执照">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <span class="m-alert">请上传营业执照图片</span>
          </el-form-item>
          <el-form-item label="注册资金">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="主营类目">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="注册时间">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="法人姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <span class="m-alert">请上传法人身份证正反面图片</span>
          </el-form-item>
          <div class="m-text-center">
            <span class="m-supper-btn">提交</span>
            <div>
              <el-checkbox v-model="checked">
                供应商入驻大行星平台<span class="m-underline">用户须知</span>
              </el-checkbox>
            </div>
          </div>

        </div>
      </el-form>

    </div>
</template>

<script>
    export default {
        name: "inedx",
      data(){
          return{
            form: {
              name: '',
              region: ''
            },
            secondStep:false,
            dialogImageUrl: '',
            dialogVisible: false
          }
      },
      methods:{
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
      }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
