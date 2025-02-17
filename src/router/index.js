import { createRouter, createWebHistory } from 'vue-router'

// components 폴더의 모든 Vue 파일을 자동으로 import
const components = import.meta.glob('@/components/*.vue')

// 라우트 배열 생성
const routes = Object.keys(components).map(component => {
  const componentName = component.split('/').pop().replace('.vue', '')
  return {
    path: `/${componentName.toLowerCase()}`,
    name: componentName,
    component: components[component]
  }
})
console.log("================================================")
console.log(routes)
console.log("================================================")
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router 