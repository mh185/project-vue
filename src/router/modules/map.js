import Layout from '@/layout'

const map = {
  path: '/map',
  name: '地图管理',
  redirect: '/map/autoNavi',
  component: Layout,
  meta: {
    title: '地图管理',
    icon: 'el-icon-map-location'
  },
  id: '1',
  children: [{
    path: 'autoNavi',
    id: '1-1',
    component: () => import("@/views/map"),
    meta: {
      title: '高德地图',
      icon: 'el-icon-map-location',
    }
  }]
}

export default map
