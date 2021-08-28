import {request} from './request'
import {voteData} from "./voteListData";
export function getBaseList() {
  /*return request({
    url:'/vote_2021/wx/api.php?act=getBaseList'
  })*/
  return Promise.resolve({data:voteData});
}
