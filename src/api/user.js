import request from '@/utils/request'

export function login(params) {
  return request({
    url: 'login',
    method: 'post',
    params: params
  })
}

export function getInfo(token) {
  return request({
    url: 'info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'logout',
    method: 'post'
  })
}
