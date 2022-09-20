import request from "@/api/default";

export function getList(params) {
  //获取城市列表
  return request({
    url: "v1/cities",
    method: "get",
    params: { ...params },
  });
}

export function getBuineseList(params) {
  // 获取所有商家列表
  return request({
    url: "/shopping/restaurants",
    method: "get",
    params: { ...params },
  });
}

export function foodList(params) {
  // 获取食品列表
  return request({
    url: "v2/index_entry",
    method: "get",
    params: { ...params },
  });
}

export function getYzm(params) {
  // 获取食品列表
  return request({
    url: "v1/captchas",
    method: "post",
    params: { ...params },
  });
}

export function searchSite(params) {
  // 搜索地址
  return request({
    url: "v1/pois",
    method: "get",
    params: { ...params },
  });
}

export function psfs(params) {
  // 配送方式
  return request({
    url: "/shopping/v1/restaurants/delivery_modes",
    method: "get",
    params: { ...params },
  });
}

export function storeList(params) {
  // 所有商铺分类列表
  return request({
    url: "/shopping/v2/restaurant/category",
    method: "get",
  });
}

export function restaurants(params) {
  return request({
    url: "v4/restaurants",
    method: "get",
    params: { ...params },
  });
}

export function foodActivity(params) {
  // 商家属性
  return request({
    url: "/shopping/v1/restaurants/activity_attributes",
    method: "get",
  });
}

export function shopDetails(params) {
  //shopDetails页面商铺详情
  return request({
    url: "shopping/restaurant/" + params,
    method: "get",
  });
}

export function shopLeftList(params) {
  //shopDetails页面商品左边列表
  return request({
    url: "/shopping/v2/menu",
    method: "get",
    params: { ...params },
  });
}

export function ratingScores(params) {
  //shopDetails页面评价
  return request({
    url: "/ugc/v2/restaurants/" + params + "/ratings/scores",
    method: "get",
  });
}

export function ratingTags(params) {
  //shopDetails页面评价标签
  return request({
    url: "ugc/v2/restaurants/" + params + "/ratings/tags",
    method: "get",
  });
}

export function getRatingList(params) {
  //shopDetails页面评论列表
  return request({
    url: "/ugc/v2/restaurants/" + params + "/ratings",
    method: "get",
  });
}
// has_content: true,
// offset,
// limit: 10,
// tag_name,
