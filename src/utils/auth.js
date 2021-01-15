const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

export function setColor(color) {
  return localStorage.setItem('dark-mode',color)
}

export function getColor() {
  return localStorage.getItem('dark-mode')
}
