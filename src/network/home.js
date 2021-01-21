import { request } from './request'

export function getHomeMultdata() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsdata(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}