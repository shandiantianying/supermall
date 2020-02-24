import {request} from "./request"

export function getHomeData(){
    return  request({
        url: '/toutiao/index?type=&key=fd3f7fc7f0aa529f06cfd38fb46c1f15'
    })
}