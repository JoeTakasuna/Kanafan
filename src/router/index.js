import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import News from '@/components/News'
import Profile from '@/components/Profile'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
