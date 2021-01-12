import request from '@/utils/request'

export function Login(params) {
    return request({
      url: 'login',
      method: 'post',
      params
    })
  }