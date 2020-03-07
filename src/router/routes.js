import Home from '../pages/Home/Home.vue'
import Item from '../pages/Item/Item.vue'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import User from '../pages/User/User.vue'

export default [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/item',
    component: Item,
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
  },
  {
    path: '/',
    redirect: '/home'
  }
]