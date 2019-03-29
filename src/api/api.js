// const title = 'https://planet.daaiti.cn/api/v1/';
// const title = 'https://www.bigxingxing.com/api/v1/'; //正式
let title = '';
if(location.origin.indexOf('localhost') != -1){
  title = 'https://test.bigxingxing.com/api/v1/'; //测试
}else{
  title = `${location.origin}/api/v1/`
}

const api={
  brand_recommend: title + 'index/brand_recommend',                                   // 首页精选商品 品牌
  get_all_news: title +'news/get_all_news',                  //获取圈子
  club_list: title +'club/list',                             //公告
  club_message: title +'club/message',                        //公告详情
  create_message: title + 'club/create_message',               //留言


};


export default api
