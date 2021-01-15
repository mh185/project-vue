import Layout from '@/layout'

const user = {
  path: '/user',
  name: '用户列表',
  redirect: '/user/userList',
  component: Layout,
  meta: {
    title: '用户列表',
    icon: 'el-icon-user'
  },
  id: '2',
  children: [{
    path: '/userList',
    id: '2-1',
    component: () => import("@/views/user"),
    meta: {
      title: '用户列表',
      icon: 'el-icon-user',
    }
  }]
}

export default user
