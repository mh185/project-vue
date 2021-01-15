import request from '@/utils/request'

export function Users(params) {
  return request({
    url: 'users',
    method: 'get',
    params
  })
}