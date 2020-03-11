import Home from '../pages/Home/Home.vue'
import CategoryList from '../pages/CategoryList/CategoryList'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import User from '../pages/User/User.vue'
import Login from '../pages/User/Login/Login.vue'
import Register from '../pages/User/Register/Register.vue'

export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/categoryList',
    component: CategoryList,
  },
  {
    path: '/topic',
    component: Topic,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/user',
    component: User,
    children:[
      {
        path: '/user/login',
        component: Login
      },
      {
        path: '/user/register',
        component: Register
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]