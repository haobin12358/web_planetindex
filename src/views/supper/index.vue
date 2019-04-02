<template>
    <div class="m-supper-page">

      <el-form ref="form" :model="form" label-width="120px" :rules="ruleForm" label-position="left">
        <div v-if="!secondStep">
          <h3 class="m-title">资料填写</h3>
          <el-form-item label="手机号" prop="suloginphone">
            <el-input v-model="form.suloginphone" type="number" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="供应商名称" prop="suname">
            <el-input v-model="form.suname"></el-input>
          </el-form-item>
          <el-form-item label="供应商联系人" prop="sulinkman">
            <el-input v-model="form.sulinkman"></el-input>
          </el-form-item>
          <el-form-item label="供应商联系电话" prop="sulinkphone">
            <el-input v-model="form.sulinkphone" type="number" ></el-input>
          </el-form-item>
          <el-form-item label="供应商邮箱" prop="suemail">
            <el-input v-model="form.suemail"></el-input>
          </el-form-item>
          <el-form-item label="供应商地址" prop="suaddress">
            <el-input v-model="form.suaddress"></el-input>
          </el-form-item>
          <div   class="m-text-center" >
            <span class="m-supper-btn" @click="secondStep = true">下一步</span>
          </div>

        </div>
        <div v-else>
          <el-form-item label="银行卡号" prop="subanksn">
            <el-input v-model="form.subanksn" type="number" ></el-input>
          </el-form-item>
          <el-form-item label="银行卡开户行" prop="subankname">
            <el-input v-model="form.subankname"></el-input>
          </el-form-item>
          <el-form-item label="合同" prop="sucontract">
            <el-upload
              :action="uploadVoucherUrl"
              :file-list="suContractUrl"
              list-type="picture-card"
              accept="image/*"
              :before-upload="beforePicUpload"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleConstractRemove"
              :http-request="uploadContract"
              :limit="20"
              :multiple="true">
              <i class="el-icon-plus"></i>
            </el-upload>
            <span class="m-alert">请上传合同图片</span>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="营业执照" prop="subusinesslicense">
            <el-upload
              :action="uploadUrl"
              class="avatar-uploader"
              list-type="picture-card"
              accept="image/*"
              :on-success="handleHeaderSuccess"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleLicenseRemove">
              <img v-if="form.subusinesslicense" :key="form.subusinesslicense" v-lazy="form.subusinesslicense"
                   class="avatar">
              <i class="el-icon-plus"></i>
            </el-upload>
            <span class="m-alert">请上传营业执照图片</span>
          </el-form-item>
          <el-form-item label="注册资金" prop="suregisteredfund">
            <el-input v-model="form.suregisteredfund"></el-input>
          </el-form-item>
          <el-form-item label="主营类目" prop="sumaincategory">
            <el-input v-model="form.sumaincategory"></el-input>
          </el-form-item>
          <el-form-item label="注册时间" prop="suregisteredtime">
            <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.suregisteredtime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="法人姓名" prop="sulegalperson">
            <el-input v-model="form.sulegalperson"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证" required>
            <el-col :span="11">
              <el-form-item  prop="sulegalpersonidcardfront">
                <el-upload
                  :action="uploadUrl"
                  class="avatar-uploader"
                  list-type="picture-card"
                  accept="image/*"
                  :on-success="handleFrontSuccess"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleFrontRemove">
                  <img v-if="form.sulegalpersonidcardfront" :key="form.sulegalpersonidcardfront" v-lazy="form.sulegalpersonidcardfront"
                       class="avatar">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="m-alert">请上传法人身份证正面图片</span>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item  prop="sulegalpersonidcardback">
                <el-upload
                  :action="uploadUrl"
                  class="avatar-uploader"
                  list-type="picture-card"
                  accept="image/*"
                  :on-success="handleBackSuccess"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleEndRemove">
                  <img v-if="form.sulegalpersonidcardback" :key="form.sulegalpersonidcardback" v-lazy="form.sulegalpersonidcardback"
                       class="avatar">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <span class="m-alert">请上传法人身份证反面图片</span>
              </el-form-item>
            </el-col>


          </el-form-item>
          <div class="m-text-center">
            <div>
              <span class="m-supper-btn cancel" @click="secondStep = false">上一步</span>
              <span class="m-supper-btn" @click="doSave">提交</span>
            </div>

            <div>
              <el-checkbox v-model="form.checked">
                供应商入驻大行星平台<span class="m-underline" @click.stop="userKnowe = true">用户须知</span>
              </el-checkbox>
            </div>
          </div>
          <el-dialog
            title="用户须知"
            :visible.sync="userKnowe"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="userKnowe = false">确 定</el-button>
            </span>
          </el-dialog>
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
              suloginphone:'',
              suname:'',
              sulinkman:'',
              sulinkphone:'',
              suemail:'',
              suaddress:'',
              subanksn:'',
              subankname:'',
              sucontract:[],
              subusinesslicense:'',
              suregisteredfund:'',
              sumaincategory:'',
              suregisteredtime:'',
              sulegalperson:'',
              sulegalpersonidcardfront:'',
              sulegalpersonidcardback:'',
              name: '',
              region: '',
              checked:false
            },
            ruleForm:{
              suloginphone: [
                {required: true, message: '手机好必填', trigger: 'blur'}
              ],
              suname:[
                {required: true, message: '供应商名必填', trigger: 'blur'}
              ],
              sulinkman:[
                {required: true, message: '供应商联系人必填', trigger: 'blur'}
              ],
              sulinkphone:[
                {required: true, message: '供应商联系电话必填', trigger: 'blur'}
              ],
              suemail:[
                {required: true, message: '联系邮箱必填', trigger: 'blur'}
              ],
              suaddress:[
                {required: true, message: '地址必填', trigger: 'blur'}
              ],
              subanksn:[
                {required: true, message: '银行卡号必填', trigger: 'blur'}
              ],
              subankname:[
                {required: true, message: '开户银行必填', trigger: 'blur'}
              ],
              sucontract:[
                {required: true, message: '合同必填', trigger: 'change'}
              ],
              subusinesslicense:[
                {required: true, message: '营业执照必填', trigger: 'change'}
              ],
              suregisteredfund:[
                {required: true, message: '注册资金必填', trigger: 'blur'}
              ],
              sumaincategory:[
                {required: true, message: '主营类目必填', trigger: 'blur'}
              ],
              suregisteredtime:[
                {required: true, message: '注册时间必填', trigger: 'change'}
              ],
              sulegalperson:[
                {required: true, message: '法人必填', trigger: 'blur'}
              ],
              sulegalpersonidcardfront:[
                {required: true, message: '身份证正面必填', trigger: 'change'}
              ],
              sulegalpersonidcardback:[
                {required: true, message: '身份证反面必填', trigger: 'change'}
              ]
            },
            secondStep:false,
            dialogImageUrl: '',
            dialogVisible: false,
            userKnowe:false,
            suContractUrl:[]
          }
      },
      computed: {
        uploadUrl() {
          return this.$api.upload_file
        },
        uploadVoucherUrl() {
          return this.$api.upload_file  + '&type=voucher'
        },
      },
      watch: {
        suContractUrl(val) {
          this.form.sucontract = val.map(item => item.url);
        },
      },
      methods:{
        //  删除合同
        handleConstractRemove(file, fileList){
          this.suContractUrl = fileList
        },
        //删除营业执照
        handleLicenseRemove(file, fileList){
          this.form.subusinesslicense = '';
        },
        //删除正面
        handleFrontRemove(){
          this.form.sulegalpersonidcardfront = '';
        },
        //删除反面
        handleEndRemove(){
          this.form.sulegalpersonidcardback = '';
        },
        //预览
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        //合同
        uploadContract(file) {
          let formData = new FormData();

          formData.append('file', file.file)

          this.$http({
            method: 'post',
            url: this.uploadVoucherUrl,
            data: formData,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(
            res => {
              if (res.data.status == 200) {
                let resData = res.data,
                  data = resData.data;

                this.suContractUrl.push({
                  name: file.file.name,
                  url: data,
                })
              }
            }
          );
        },
        //营业执照
        handleHeaderSuccess(file){
          this.form.subusinesslicense = file.data;
        },
        //正面
        handleFrontSuccess(file){
          this.form.sulegalpersonidcardfront = file.data;
        },
        //反面
        handleBackSuccess(file){
          this.form.sulegalpersonidcardback = file.data;
        },
        beforePicUpload(file){

        },
        //提交
        doSave() {
          this.$refs.form.validate(
            valid => {
              if (valid) {
                // if (this.form.suid) {
                //   // this.supplierForm.pbids = [this.supplierForm.pbids];
                //   this.$http.post(this.$api.update_supplizer, this.supplierForm).then(
                //     res => {
                //       if (res.data.status == 200) {
                //         let resData = res.data,
                //           data = res.data.data;
                //
                //         this.$router.push('/user/suppliers');
                //         this.$notify({
                //           title: '供应商编辑成功',
                //           message: `供应商名称:${this.supplierForm.suname}`,
                //           type: 'success'
                //         });
                //       }
                //     }
                //   )
                // } else {
                //   this.form.suloginphone = this.form.sulinkphone;
                //   this.$http.post(this.$api.create_supplizer, this.supplierForm).then(
                //     res => {
                //       if (res.data.status == 200) {
                //         let resData = res.data,
                //           data = res.data.data;
                //
                //         this.$router.push('/user/suppliers');
                //         this.$notify({
                //           title: '供应商新增成功',
                //           message: `供应商名称:${this.supplierForm.suname}`,
                //           type: 'success'
                //         });
                //       }
                //     }
                //   )
                // }
              } else {
                this.$message.warning('请根据校验信息完善表单!');
              }
            }
          )
        },
      }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
