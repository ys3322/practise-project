import {request} from "./request";
import {rankData} from "./rankData"
export function getRankTop(){
 /* return request({
    url:'/vote_2021/wx/api.php?act=getBaseTop'
  })*/
  return Promise.resolve({data:rankData});
}
