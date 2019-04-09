<template>
    <div class="m-supper-page">

      <el-form ref="form" :model="form" label-width="120px" :rules="ruleForm" label-position="left">
        <div v-if="!secondStep">
          <h3 class="m-title">资料填写</h3>
          <el-form-item label="手机号" prop="suloginphone">
            <el-input v-model="form.suloginphone" type="number" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="供应商名称" prop="suname">
            <el-input v-model="form.suname" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="供应商联系人" prop="sulinkman">
            <el-input v-model="form.sulinkman" maxlength="15"></el-input>
          </el-form-item>
          <el-form-item label="供应商联系电话" prop="sulinkphone">
            <el-input v-model.number="form.sulinkphone" maxlength="11" ></el-input>
          </el-form-item>
          <el-form-item label="供应商邮箱" prop="suemail">
            <el-input v-model="form.suemail" maxlength="200"></el-input>
          </el-form-item>
          <el-form-item label="供应商地址" prop="suaddress">
            <el-input v-model="form.suaddress" maxlength="200"></el-input>
          </el-form-item>
          <div   class="m-text-center" >
            <span class="m-supper-btn" @click="secondStep = true">下一步</span>
          </div>

        </div>
        <div v-else>
          <el-form-item label="银行卡号" prop="subanksn">
            <el-input v-model="form.subanksn" type="number" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="银行卡开户行" prop="subankname">
            <el-input v-model="form.subankname" maxlength="30"></el-input>
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
              <img v-if="form.subusinesslicense" :key="form.subusinesslicense"
                   class="avatar">
              <i class="el-icon-plus"></i>
            </el-upload>
            <span class="m-alert">请上传营业执照图片</span>
          </el-form-item>
          <el-form-item label="注册资金" prop="suregisteredfund">
            <el-input v-model="form.suregisteredfund" maxlength="200"><template slot="append">万</template></el-input>
          </el-form-item>
          <el-form-item label="主营类目" prop="sumaincategory">
            <el-input v-model="form.sumaincategory" maxlength="1000"></el-input>
          </el-form-item>
          <el-form-item label="注册时间" prop="suregisteredtime">
            <el-date-picker type="date" placeholder="选择日期" value-format="yyyy-MM-dd" v-model="form.suregisteredtime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="法人姓名" prop="sulegalperson">
            <el-input v-model="form.sulegalperson" maxlength="30"></el-input>
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
                  <img v-if="form.sulegalpersonidcardfront" :key="form.sulegalpersonidcardfront"
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
                  <img v-if="form.sulegalpersonidcardback" :key="form.sulegalpersonidcardback"
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
              <el-checkbox v-model="checked">
                供应商入驻大行星平台<span class="m-underline" @click.stop="userKnowe = true">用户须知</span>
              </el-checkbox>
            </div>
          </div>
          <el-dialog
            title="用户须知"
            :visible.sync="userKnowe"
            >
            <div class="m-user-knowe">
              <h3>一、入驻标准</h3>
              <p>1、境内商家公司注册资金≥10万，注册时间须满1年以上（旅游业>=30万）代发商家>=50万，注册时间需满2年以上</p>
              <p>2、企业信息网上近12个月内无行政处罚记录；</p>
              <p>3、必须是具有法人资格的公司或者企业；</p>
              <p>4、二级/一级以上的经销商合作（包含一级）及品牌方、经销商需提供拿货渠道证明或合同，需获得品牌方授权，且授权需真实有效；</p>
              <p>5、提供品牌方联系方式、运营负责人联系方式、提供仓库地址。多级代理均要提供所有链路相关的联系信息；
              <p>6、商品可开增值税发票；</p>
              <h3>二、资质要求</h3>
              <p>1、营业执照</p>
              <p>具备法人资格，分公司不具有法人资格的需提供总公司营业执照及其授权书，复印件需加盖公司公章；</p>
              <p>2、法人身份证</p>
              <p>需提供法人正反面身份证扫描件或复印件，复印件需加盖公司公章，如法人非大陆公民，可提供驾驶证或护照</p>
              <p>3、商标注册证</p>
              <p>①需提供有效期内的商标注册证（R标）正反面拍摄件/扫描件或商标受理通知书（TM标）。</p>
              <p>②若办理过变更、转让、续展，请一并提供商标总局颁发对应证明或受理通知书（商标受理通知书的有效期为18个月）。</p>
              <p>③商标注册证保护类别需要与质检报告质检商品类别、商家入驻经营的商品类别一致。</p>
              <p>④请提供文字商标或者文字+图形组合商标，不支持单独提供图形商标。</p>
              <p>⑤国外标：</p>
              <p>a.只要商标是在中国注册的，有中国知识产权局或中国商标局出具的商标证</p>
              <p>b.根据马德里公约，在中国知识产权局或商标局进行了国外商标在中国的地域延伸的证明</p>
              <p>4、授权书</p>
              <p>品牌方入驻</p>
              <p>①商标注册人为公司，商标注册公司名称需与入驻公司名称一致，无需提供品牌授权书；</p>
              <p>②商标注册人为个人，以其为法人所在的公司名义申请入驻时，视为品牌方入驻。需要提供商标权利人身份证正反面拍摄件或者扫描件、营业执照、以及授权该公司使用该商标和在大行星开店经销该品牌商品的授权书。</p>
              <p>代理商入驻</p>
              <p>品牌授权书需满足以下条件：</p>
              <p>①需授权在大行星销售；</p>
              <p>②授权书需注明授权期限、落款（个人授权需亲笔签名+手印）；同时商家的上一级授权方出具的到商家的授权书必须盖授权方鲜章；</p>
              <p>③若商标注册人是个人，需提供商标注册人身份证正反面复印件，签字并按压手印；共有商标，如授权注明为排他许可或独占许可的，需商标共有人共同授权。</p>
              <p>④需要确保授权链条的完整，即申请入驻公司拿到的授权能够逐级逆推回品牌方。TM标只能由商标申请方自行入驻，不接受授权代理商入驻。</p>
              <p>⑤授权书授权章需为授权方公章，不支持合同章、销售章、财务章等业务章。</p>
              <p>⑥所有为复印件的材料需要加盖入驻公司公章（鲜章）。</p>
              <p>⑦商家的上游是进口贸易商，提供的二级授权，给予认可，需要有报关单等进口采购&报关凭证</p>
              <p>⑧授权书未限定期限，入驻公司为商标持有人，可按商标期限填写；代理授权期限默认一年</p>

              <p>5、质检报告</p>
              <p>须提供一份由权威质检机构出具的最近2年内的质检报告（其中，一次性卫生用品和化妆品要求一年内质检报告，食品要求一年内质检报告），检测报告内容须包含品牌名称、产品名称和大行星要求的检测项(查看详细说明)。（备注：进口商品提供一年内报关单和检验检疫证明）</p>
              <p>6、3C认证</p>
              <p>3C认证证书：</p>
              <p>经营电玩具类、弹射玩具类、童车类、安全座椅、电子产品等属于《强制性产品认证管理规定》范围的商品，必须通过3C强制认证。具体明细http://www.cnca.gov.cn/cnca/rdht/qzxcprz/rzml/images/20080701/4755.htm?spm=a223k.7870629.4250051047.48.JTjIba。（备注：需证明入驻公司或品牌方与出具质检报告公司或3C强制认证公司的关系）</p>
              <p>7、书籍：</p>
              <p>①经营非出口出版物</p>
              <p>a.入驻公司为图书出版公司，则提供《图书出版许可证》；</p>
              <p>b.入驻公司为非出版公司，则提供入驻公司的《出版物经营许可证》或《音像制品经营许可证》；</p>
              <p>c.请提供一家及以上出版社直接授权入驻公司的授权书，以及出版社的《图书出版许可证》；</p>

              <p>②经营进口出版物：</p>
              <p>a.需提供1年内的报关单，且提供与出版物进出口公司经销合作的证明文件；</p>
              <p>b.提供出版物进出口公司的《出版物进口经营许可证》或进口出版物备案文件</p>
              <p>8、保健食品：</p>
              <p>①提供生产单位《保健食品生产企业卫生许可证》；</p>
              <p>②提供一份售卖商品的《保健食品批准证书》；</p>
              <p>9、医疗</p>
              <p>体温计、血压计、鼻咽喷雾、创可贴等等：</p>
              <p>提供第二类医疗器械许可证</p>


              <p>10、旅游度假：</p>
              <p>只接受旅行社和景区经营方入驻；“邮轮/游船”仅招募邮轮/游船公司或旅行社；</p>
              <p>①商家营业执照经营范围必须包含下列相关内容中的一项：旅游服务，旅游观光，休闲度假，入境旅游业务，国内旅游业务，出境旅游业务及相关内容；</p>
              <p>②公司身份为旅行社总社，请提供《旅行社业务经营许可证》和旅行社责任险保险单；若公司身份为旅行社分社，请提供旅行社分社备案登记证明，旅行社责任险保险单（若为总社统一购买请提供总社）， 旅行社分社补充协议和总社的营业执照、税务登记证、《旅行社业务经营许可证》
              </p>
              <p>③无出境旅游业务资质的旅行社欲代售出境线路请提供委托招徕授权书，同时提交授权方（限总社）的企业营业执照，税务登记证，组织机构代码证，旅行社业务经营许可证和旅行社责任险保险单（旅游局颁发的旅行社委托代理招徕业务备案登记证明同样有效
              </p>
              <p>④邮轮/游船公司需提供《水路运输许可证》；</p>
              <p>⑤如果入驻商家销售火车票、飞机票的，需要：</p>
              <p>a.营业执照上的有相应的经营范围；</p>
              <p>b.需要火车票销售资质（铁路部门的许可或合作合同） 或飞机票销售资质（民航颁发的机票代代理销售经营许可证，这里还分国内机票和国际机票代理资质）</p>


              <p>11、体检卡套餐（医疗集团）：</p>
              <p>①需提供开店主体与各下属医疗机构之间的股权关系证明（医疗集团控股需达50%及以上，如是单一大股东则持股比例不少于30%，医疗集团间接持股的每层持股关系均应符合上述比例要求），含章程和股权结构图
              </p>
              <p>②需提供其下属医疗机构名单及相应的《医疗机构执业许可证》，医疗机构清单表格点此下载；经营范围应包括对应科目；医疗服务需要在医疗机构的合法执业地点提供。</p>
              <p>③开店公司需提供《无限连带责任保证函》</p>
              <p>12、景点门票/实景演出/主题乐园</p>
              <p>①景区经营方（仅限AAA，AAAA，AAAAA级别的景区）需提供以下资质：
              </p>
              <p>a.景区质量等级评定委员会出具的旅游景区质量等级证书。
              </p>
              <p>b.其中风景名胜景区需提供上级管理单位（景区管委会/管理局）授权文件；非风景名胜景区请至少提供下列资料中的1份：正规景区门票正反面扫描件（尽可能提交盖有当地地税局监制章的门票）；景区门票价格在物价局的备案登记证明。</p>
              <p>②经营游乐园
              </p>
              <p>需提供至少5份游乐特种设备（备案）登记证明和游乐设备最新的定期检测报告，可根据不同商铺的经营性质要求商家提供对应的相关资质，包括但不限于水族馆/海洋世界提供水生野生动物经营利用许可证、动物园提供野生动物经营利用许可证。</p>
              <p>③商家经营旅游局推广店铺</p>
              <p>a.需提供《旅游局特许经营授权书》</p>
              <p>b.商家营业执照经营范围内需至少需包含下列内容中一项：代订（预定）门票，票务代理（服务），旅游服务），主题公园开发经营及相关内容。</p>
              <p>c.至少三个景点门票有效的授权书或合作协议；</p>

              <p>13、在线课程</p>
              <p>①在线课程的版权证明 （如果版权是其他方所有，需要提供代理销售、授权经销证明）</p>
              <p>②增值电信业务经营许可证</p>
              <p>③基础公司证照</p>
            </div>
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
              region: ''
            },
            checked:false,
            ruleForm:{
              suloginphone: [
                {required: true, message: '请填写正确的手机号', trigger: 'blur'}
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
          return this.$api.upload_file  + '?type=contract'
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
          if(!this.checked){
            this.$message.warning('请先同意该平台的用户须知!');
            return false;
          }
          this.$refs.form.validate(
            valid => {
              if (valid) {
                  // this.form.suloginphone = this.form.sulinkphone;
                  this.$http.post(this.$api.create_supplizer, this.form).then(
                    res => {
                      if (res.data.status == 200) {
                        let resData = res.data,
                          data = res.data.data;

                        this.$router.push('/index');
                        this.$notify({
                          title: '供应商新增成功',
                          message: `供应商名称:${this.form.suname}，等待大行星客服电话联系`,
                          type: 'success'
                        });
                      }else{
                        this.$notify({
                            title: '提示',
                          message: res.data.message,
                          type: 'success'
                        });
                      }
                    }
                  )
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
