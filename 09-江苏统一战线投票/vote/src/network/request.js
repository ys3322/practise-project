import axios from "axios";

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    //进行配置 http://m.xhbycm.net/vote_2021/wx/api.php?act=getBaseList
    //baseURL: 'http://m.xhbycm.net/vote_2021/wx/api.php?act=getBaseList',
    //baseURL:'/apis',
    timeout: 5000
  })
  return instance(config);

}
