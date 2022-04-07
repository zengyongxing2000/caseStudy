import request from '@/api/default'

export function getList(params){ //获取城市列表
  return request({
      url: 'v1/cities',
      method: 'get',
      params: {...params}
  })
}

export function getBuineseList(params){ // 获取所有商家列表
  return request({
      url: '/shopping/restaurants',
      method: 'get',
      params: {...params}
  })
}

export function foodList(params){ // 获取食品列表
  return request({
      url: 'v2/index_entry',
      method: 'get',
      params: {...params}
  })
}

export function getYzm(params){ // 获取食品列表
  return request({
      url: 'v1/captchas',
      method: 'post',
      params: {...params}
  })
}

export function searchSite(params){ // 搜索地址
  return request({
      url: 'v1/pois',
      method: 'get',
      params: {...params}
  })
}

