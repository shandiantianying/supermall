import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Category from '@/views/category/Category'
import Cart from '@/views/cart/Cart'
import Profile from '@/views/profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      } , {
        path: '/category',
        name: 'Category',
        component: Category
      },  {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },  {
        path: '/profile',
        name: 'Profile',
        component: Profile
      }
  ],
  mode:'history'
})
